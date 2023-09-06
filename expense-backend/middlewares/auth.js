const jwt = require("jsonwebtoken");

const User = require("../models/user")

exports.authentication = async(req,res,next) => {
    try{
        const token = req.header("Authorization");
        const user = await jwt.verify(token, "823e029e29e2r0928382fhunf283j13j8h2f8h28fh2301h823h82h932") ;
        const userId = await User.findByPk(user.userId);
        req.user = userId;
        next();
    } catch(err){
        console.log(err);
        res.status(401).json({Error: "An error occurred"})
    }

}