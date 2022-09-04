const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home Page'
  })
})

router.get('/register', (req, res) => {
  res.render('register', {
    title: 'Clients Register'
  })
})

module.exports = router
