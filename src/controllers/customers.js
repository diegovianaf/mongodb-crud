const CustomersModel = require('../models/customers')
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

  const register = new CustomersModel({
    name,
    age,
    email,
    password: passwordCrypto,
  })

  register.save()
  res.send('Successful register!')
}

async function listUsers(req, res) {
  const users = await CustomersModel.find()

  res.render('listUsers', {
    title: 'List of Users',
    users,
  })
}

module.exports = {
  index,
  add,
  listUsers,
}
