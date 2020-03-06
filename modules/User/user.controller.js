
const User = require('./user.model');

// getUser  function 
const getUser = (req, res) => {
    User.find((err, users) => {
        if (err) {
            res.send(err);
        }

        res.send(users);

    });
}

const insertUser = (req, res) => {
    let user = new User();
    // Set the user properties that came from the POST data
    user.id = req.body.id;
    user.name = req.body.name;
    user.username = req.body.username;
    user.email = req.body.email;
    user.address = {
        street: req.body.address.street,
        suite: req.body.address.suite,
        city: req.body.address.city,
        zipcode: req.body.address.zipcode,
        geo: {
            lat: req.body.address.geo.lat,
            lng: req.body.address.geo.lng
        }
    };
    user.phone = req.body.phone;
    user.website = req.body.website;
    user.company = {
        name: req.body.company.name,
        catchPhrase: req.body.company.catchPhrase,
        bs: req.body.company.bs
    };
    if (req.body.isActivated == undefined)
        req.body.isActivated = false;
    user.isActivated = req.body.isActivated;

    // Save the user and check for errors
    user.save(function (err) {
        if (err)
            res.send(err);

        res.json({ message: 'user added to the userDetails !', data: user });
    });
}




// Create function for putuser
const putUser = (req, res) => {
    // Use the User model to find a specific user
    User.findByIdAndUpdate({ _id: req.params.user_id }, req.body, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.send({ msg: 'Updated' });

    });
};


// Create function  for deleteuser
const deleteUser = (req, res) => {
    // Use the User model to find a specific user and Update
    User.findByIdAndDelete(req.params.user_id, (err, user) => {
        if (err) {
            res.send(err);
        }


        res.send("DELETED ")
    });
};

const getById = (req, res) => {
    // Use the Beer model to find a specific user
    User.findById(req.params.user_id, (err, result) => {
        if (err) {
            res.send(err);
        }

        // Update the existing beer quantity
        res.send(result)
    });
};








module.exports = { getUser, insertUser, deleteUser, putUser, getById };