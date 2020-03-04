const Register = require('./register.model');
const bcrypt = require('bcryptjs');


const getRegisteredUser = (req, res) => {
    Register.find((err, registers) => {
        if (err) {
            res.send(err);
        }
        res.send(registers);

    });
}


const postRegister = (req, res) => {

    console.log(req.body.email);
    let register = new Register();
    register.email = req.body.email;


    bcrypt.hash(req.body.password, 10)
        .then((hash) => {
            register.password = hash;
            register.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.json({ msg: 'Registration Done', data: register });
            });
        })
        .catch((err) => {
            console.log(err);
        })
}




const deleteRegistereduser = (req, res) => {

    Register.findByIdAndDelete(req.params.register_id, (err) => {
        if (err)
            res.send(err);

        res.send("Deleted")
    });
};


module.exports = { getRegisteredUser, deleteRegistereduser, postRegister };



// JOI
    // // createing Schema to validate  data
    // const schema = Joi.object().keys({
    //     email: Joi.string().trim().email().required(),
    //     password: Joi.string().min(5).max(12).required()
    // })

    // Joi.validate(req.body, schema, (err, result) => {
    //     if (err) {
    //         res.send(err)
    //         console.log("error console"+result);
    //     }
    //     else {
    //         console.log("else console"+result);
    //         res.send("Validation Done")
    //     }

    // });