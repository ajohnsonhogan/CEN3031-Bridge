const express = require("express");
const router = express.Router();
const upload = require('../config/file_upload');

var fileUrl;

const singleUpload = upload.upload.single('image')

router.post('/image-upload', function(req, res) {
  upload.name = req.body.date
  singleUpload(req, res, function(err, some) {
	    if (err) {
	    	return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}] });
	    };
	});
})

module.exports = router;