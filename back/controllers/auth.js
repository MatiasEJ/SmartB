const redisClient = require('./signin.js').redisClient;

const requireAuth = (req,res,next)=>{
  const { authorization } = req.headers;
  if(!authorization){
    return res.status(401).json("unauthorized middleware");
  }
  return redisClient.get(authorization, (err, reply)=>{
    if(err || !reply){
      return res.status(401).json("unauthorized middleware");
    }
    console.log("you Shall pass");
    return next();
  });
}


module.exports = {
  requireAuth
}
