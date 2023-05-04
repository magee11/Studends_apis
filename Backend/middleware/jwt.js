const jwt = require('jsonwebtoken');

const jwt_auth= (req,res,next) => {
    const token = req.cookies.access_token;
    if(!token){
        return res.send('Access Denied');
    }
    try{
        const verified = jwt.verify(token,process.env.TOKEN_KEY,)
        req.user = verified
        next()

    }catch(err){
        console.log("Message",err);
    }
}



module.exports = jwt_auth