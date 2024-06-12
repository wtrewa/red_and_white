
const jwt = require('jsonwebtoken')
const BlackList = require('../blacklist/blackList')

const auth = async(req,res,next)=>{
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if(BlackList.includes(token)){
        res.send('you need to log in frist')
    }
    else{
      let decoded =  jwt.verify(token,'secret')
  
     
      if(!decoded){
        res.send('invalide token')
      }
      req.userId = decoded.userId;
      req.username = decoded.username;
      
      next();
    }
  } catch (error) {
    res.send(error)
  }

}

module.exports = auth;