const CustomerModel = require('../models/customers')

function add(req, res) {
  const {
    name,
    age,
    email,
    password,
  } = req.body

  const register = new CustomerModel({
    name,
    age,
    email,
    password,
  })

  register.save()
  res.send('Successful register!')
}

module.exports = {
  add
}
