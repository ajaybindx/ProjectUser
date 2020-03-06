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


    //===============================================================================================///////

    Register.find({ email: req.body.email })
        .then(result => result.length == 1 ? true : false)
        .then((data) => {
            if (!data) {
                return bcrypt.hash(req.body.password, 10);
            }
            else {
                res.send({ msg: " email already exist " });
            }
        })
        .then((hash) => {
            let register = new Register();
            register.email = req.body.email
            register.password = hash;
            return register.save();

        })
        .then(data => res.json({ msg: 'Registration Done', data, }))
        .catch((err) => {
            //console.log(err);
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



// const postRegister = (req, res) => {

//     Register.find({ email: req.body.email }, (result) => result)
//         .then(result => {
//             if (result.length == 1)
//                 res.send("email already exist  try login ")
//             else {
//                 let register = new Register();
//                 register.email = req.body.email;
//                 bcrypt.hash(req.body.password, 10)
//                     .then((hash) => {
//                         register.password = hash;
//                         register.save(function (err, register) {
//                             if (err) {
//                                 res.send(err);
//                             }
//                             res.json({ msg: 'Registration Done', data: register });
//                         });
//                     })
//                     .catch((err) => {
//                         console.log(err);
//                     })


//             }
//         })


// }

