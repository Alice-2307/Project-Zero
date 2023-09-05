const user = require("../models/user")

exports.postUser = async (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const pass = req.body.password;
 
    try {
        let result = await user.create({
            name: name,
            email: email,
            password: pass
        })
        res.status(201).json({ userData: result });
        console.log("User Data Added")
    } catch (err) {
        console.log(err);
        if (err.name === "SequelizeUniqueConstraintError") {
            res.status(403).json({ Error: "Email already exist" })
        }
        else {
            res.status(500).json({ Error: "An error occurred" })
        }
    }
} 