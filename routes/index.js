const express = require('express');

const homeController = require('../controller/home_controller');
const createHabitController = require('../controller/createhabit_controller');
const deleteHabitController = require('../controller/deletehabit_controller');
const habitDetailsController = require('../controller/habitdetails_controller');

const router = express.Router();


router.use(express.urlencoded());

router.get('/', homeController.home);
router.post('/addHabit', createHabitController.create);
router.get('/delete', deleteHabitController.delete);

router.get('/details', habitDetailsController.showDetails);

module.exports = router;