const express = require('express');
const router = express.Router()

const addController = require('../controller/calculatorController');
router.get('/add', (req, res) => {
  addController.addNumbers(req,res)

})

const subtractController = require('../controller/calculatorController');
router.get('/subtract', (req, res) => {
  subtractController.subtractNumbers(req,res)

})

const multiplyController = require('../controller/calculatorController');
router.get('/multiply', (req, res) => {
  multiplyController.multiplyNumbers(req,res)

})


const divideController = require('../controller/calculatorController');
router.get('/divide', (req, res) => {
  divideController.divideNumbers(req,res)

})


module.exports = router;




  