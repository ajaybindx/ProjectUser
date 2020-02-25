// loading required packages  
const mongoose = require('mongoose');


// Schema for user 


const userSchema = new mongoose.Schema(

    {
        id: { type: Number, required: true },
        name: { type: String },
        username: { type: String },
        email: { type: String },
        address: {
            street: { type: String },
            suite: { type: String },
            city: { type: String },
            zipcode: { type: String },
            geo: {
                lat: { type: String },
                lng: { type: String }
            }
        },
        phone: { type: String },
        website: { type: String },
        company: {
            name: { type: String },
            catchPhrase: { type: String },
            bs: { type: String }
        }
    }
);







module.exports = mongoose.model('User', userSchema);


