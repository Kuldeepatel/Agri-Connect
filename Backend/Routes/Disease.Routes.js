const {Router} = require('express');
const { Disease_Details } = require('../Controllers/Disease.Controllers.js');
const router = Router();


router.post('/disease-details',Disease_Details);

module.exports = router;