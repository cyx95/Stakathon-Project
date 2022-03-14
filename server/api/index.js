const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/trails', require('./allTrails'))
router.use('/parks', require('./parks'))
router.use('/beartrails', require('./bearTrails'))
router.use('/minnewaskatrails', require('./minnewaskaTrails'))
router.use('/hudsontrails', require('./hudsonTrails'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
