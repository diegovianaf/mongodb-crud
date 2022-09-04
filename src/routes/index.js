const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Title Test'
  })
})

module.exports = router
