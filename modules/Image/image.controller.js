const multer = require('multer');
const path = require('path');
const Image = require('./image.model');



// Set The Storage Engine
const storage = multer.diskStorage({
    destination: './modules/public/uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Init Upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('profilePic');

// Check File Type
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}


const uploadImage = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.send({
                msg: err
            });
        } else {
            if (req.file == undefined) {
                res.send({
                    msg: 'Error: No File Selected!'
                });
            } else {
                let image = new Image();
                image.imagepath = (req.file.fieldname + '-' + Date.now() + path.extname(req.file.originalname));
                image.save((err) => {
                    if (err) {
                        res.send(err);
                    }
                    res.json({ msg: 'File Uploaded!', data: image.imagepath });
                });

            };
        }
    })
};


const getImage = (req, res) => {

    Image.find({ imagepath: req.params.imagepath }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            if (result.length == 0) {
                res.send({ massage: "No profilePic found " });
            }
            else {
                res.send({ massage: "profilePic found", data: result });
            }

        }


    });

}

const allImages = (req, res) => {
    Image.find((err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            if (result.length == 0) {
                res.send({ massage: "no record found do some uploads ..." })
            }
            res.send(result)

        }
    })
}


module.exports = { uploadImage, getImage, allImages };
