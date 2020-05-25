const jwt = require('jsonwebtoken');
const redis = require('redis');

const redisClient = redis.createClient(process.env.REDIS_URI);

const handleSignin = (db, bcrypt, req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return Promise.reject('incorrect form submission');
  }
  return db.select('email', 'hash').from('login')
    .where('email', '=', email)
    .then(data => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        return db.select('*').from('users')
          .where('email', '=', email)
          .then(user => user[0])
          .catch(err => Promise.reject('unable to get user'))
      } else {
        Promise.reject('Wrong credentials');
      }
    })
    .catch(err =>{
        Promise.reject('Wrong Credentials');
    }) 
}

const signToken = (email) => {
  const jwtPayload = { email };
  return jwt.sign( jwtPayload, 'JWT_SECRET', { expiresIn: '2 days'} );
}


const getAuthTokenId = (req, res) => {
  const { authorization } = req.headers;
  return redisClient.get(authorization, (err, reply)=>{
    if(err || !reply){
      return res.status(400).json("unauthorized");
    }
      console.log("REPLY: ", reply)
      return res.json({id: reply});
  });

}


const setToken = ( key, value )=> {
  return Promise.resolve(redisClient.set(key, value));

}

const createSessions = (user) => {
  //create token, return user data
  const { email, id } = user;
  const token = signToken(email);
  //SETTING TOKEN
  return setToken(token, id)
    .then( ()=> {
      return { success: 'true', userId: id, token }
    })
    .catch((e)=>{console.log(e)})
  
  
}

const signinAuthentication = (db, bcrypt) => (req, res) => {
  const { authorization } = req.headers;
  return authorization ? getAuthTokenId(req, res) :
        handleSignin(db, bcrypt, req, res)
          .then(data =>{
            return data.id && data.email ?
                createSessions(data) : 
                Promise.reject(data); //COMPROMISING DATA
    })
    .then(session => res.json(session) )
    .catch(e=> res.status(400).json(e) )
}

module.exports = {
  signinAuthentication: signinAuthentication,
  redisClient: redisClient
}

