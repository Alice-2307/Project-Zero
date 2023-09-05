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

exports.loginUser = async (req, res, next) => {
    const email = req.body.email;
    const pass = req.body.password;

    try {
        let result = await user.findAll();

        for (let i = 0; i < result.length; i++) {
            if (email === result[i].email) {
                if (pass === result[i].password) {
                    return res.status(200).json({ success: true, message: "User logged in successfully" })
                }
                return res.status(404).json({ success: false, Error: "Password is incorrect" })
            }
        }
        return res.status(404).json({ Error: "Email does not exist" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: "An error occurred" })
    }
}