const CustomerModel = require('../models/customers')
const { crypto } = require('../utils/password')

function index(req, res) {
  res.render('register', {
    title: 'Clients Register'
  })
}

async function add(req, res) {
  const {
    name,
    age,
    email,
    password,
  } = req.body

  const passwordCrypto = await crypto(password)

  const register = new CustomerModel({
    name,
    age,
    email,
    password: passwordCrypto,
  })

  register.save()
  res.send('Successful register!')
}

module.exports = {
  index,
  add,
}
