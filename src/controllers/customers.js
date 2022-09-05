const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTitle = 'Registration of Clients'

function index(req, res) {
  res.render('register', {
    title: defaultTitle,
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
  res.render('register', {
    title: defaultTitle,
    message: 'Registration completed successfully!',
  })
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
