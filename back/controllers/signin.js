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
        Promise.reject('Wrong credentials')
      }
    })
    .catch(err =>{
       console.log(err);
    }) 
}


const getAuthTokenId = () => {
  console.log('auth ok');

}

const signinAuth = (db, bcrypt) => (req, res) => {
  const { authorization } = req.headers;
  return authorization ? 
    getAuthTokenId():
    handleSignin(db, bcrypt, req, res)
      .then(data =>{
        res.json(data);
      })
      .catch(e=>res.status(400).json(e))
}

module.exports = {
  signinAuth: signinAuth
}

