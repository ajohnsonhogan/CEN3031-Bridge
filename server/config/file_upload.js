const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
var Mediums = require('../models/mediums.server.model.js');

aws.config.update({
    // Your SECRET ACCESS KEY from AWS should go here,
    // Never share it!
    // Setup Env Variable, e.g: process.env.SECRET_ACCESS_KEY
    secretAccessKey: "xSlA5kRf8/34nPGMBbPvF4UJ8D5sSfoXNTxlKueS",
    // Not working key, Your ACCESS KEY ID from AWS should go here,
    // Never share it!
    // Setup Env Variable, e.g: process.env.ACCESS_KEY_ID
    accessKeyId: "AKIAI6UBYEPBULRAFMCA",
    region: 'us-east-1' // region of your bucket
});

const s3 = new aws.S3();

const uploadName = "String";

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'petree-images',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, file.originalname);
    }
  })
})



module.exports.upload = upload;
module.exports.name = uploadName;