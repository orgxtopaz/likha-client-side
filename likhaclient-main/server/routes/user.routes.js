
const signUp = require('../controller/signUp_controller');
const userVisit = require('../controller/visit_controller');


const router = require('express').Router();





////ALL OFFICIALS FUNCTIONALITIES
router.post('/signUp',signUp); ///TIME IN  
router.post('/visit',userVisit); ///TIME IN  






module.exports = router;