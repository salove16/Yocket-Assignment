
const router = require('express').Router();
const copsContoller=require("./controller/copsController")
const captureController=require("./controller/captureController")
const citiesController=require("./controller/citiesController")
const vehiclesController=require("./controller/vehiclesController")


router.post('/capture', captureController.capture);
router.get('/vehicles', vehiclesController.getVehicles);

router.get('/cities',citiesController.getCities);
router.get('/cops',copsContoller.getCops);


module.exports = router
