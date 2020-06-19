const express = require('express');

const homeController = require('../controller/home_controller');
const createHabitController = require('../controller/createhabit_controller');

const router = express.Router();


router.use(express.urlencoded());

router.get('/', homeController.home);
router.post('/addHabit', createHabitController.create);

module.exports = router;