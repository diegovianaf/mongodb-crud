const router = require('express').Router()

const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

router.get('/', IndexController.index)

router.get('/register', CustomersController.index)
router.post('/register', CustomersController.add)

router.get('/list', CustomersController.listUsers)

router.get('/update', CustomersController.formUpdate)
router.post('/update/:id', CustomersController.update)

module.exports = router
