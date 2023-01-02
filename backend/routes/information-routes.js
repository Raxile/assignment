const express = require('express');
const { check } = require('express-validator');

const informationControllers = require('../controllers/information-controllers');

const router = express.Router();

router.post('/addinformation', [
    check('name').not().isEmpty(),
    check('dob'),
    check('address').not().isEmpty(),
    check('email').isEmail(),
    check('country').not().isEmpty() 
   ], informationControllers.createInformation);

router.get('/',informationControllers.getInformation);

router.patch('/updateinformation/:iid',[
    check('name').not().isEmpty(),
    check('dob'),
    check('address').not().isEmpty(),
    check('country').not().isEmpty() 
],informationControllers.updateInformation);

router.delete('/deleteinformation/:iid',informationControllers.deleteInformation)

module.exports = router
