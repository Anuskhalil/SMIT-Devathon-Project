const express = require('express')
const { register, test, loginUser, getProfile } = require('./Controller')
const router = express.Router()
const cors = require('cors')

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.post('/', test)
router.post('/register', register)
router.post('/login', loginUser)
router.get('/profile', getProfile)

module.exports = router