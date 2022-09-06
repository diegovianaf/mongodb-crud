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

async function formUpdate(req, res) {
  const { id } = req.query

  const user = await CustomersModel.findById(id)

  res.render('updateUser', {
    title: 'Update User',
    user,
  })
}

async function update(req, res) {
  const {
    name,
    age,
    email,
  } = req.body

  const { id } = req.params

  const user = await CustomersModel.findById(id)

  user.name = name
  user.age = age
  user.email = email

  user.save()

  res.render('updateUser', {
    title: 'Update User',
    user,
    message: 'User successfully updated!'
  })
}

module.exports = {
  index,
  add,
  listUsers,
  formUpdate,
  update,
}
