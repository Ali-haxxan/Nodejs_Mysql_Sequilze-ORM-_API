const express = require('express')
const router = express.Router();
const controller = require('../controllers/controller')


router.get('/', controller.index)
router.post('/create/post', controller.savePost)


module.exports = router;