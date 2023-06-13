const express = require('express'); 
const router = express.Router(); 
const formController = require('./../controller/formController'); 

router
    .route('/')
    .get(formController.showForm); 

router
    .route('/submitdata')
    .get( (req, res) => {
        res.redirect('/');
    })
    .post(formController.buildData,
        formController.commitData); 

module.exports = router; 