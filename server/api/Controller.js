require('dotenv').config()
const { connect } = require('mongoose')
const mongoose = require('mongoose')
const User = require('./Model')
const { hash, compare } = require('bcrypt')
const jwt = require('jsonwebtoken')

const test = (req, res) => {
    res.json(
        "Test is working fine"
    )
}

const register = async (req, res) => {

    try {
        const { name, email, password } = req.body;
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Success")

        if (!name) {
            return res.json({
                error: 'name is required'
            })
        }

        if (!password || password.length < 6) {
            return res.json({
                error: 'password is required and should be atleast 6 characters long'
            })
        }

        const checkExist = await User.findOne({ email })

        if (checkExist) {
            return res.json({
                error: "User already Exist"
            })
        }

        const user = await User.create({
            name, email, password: await hash(password, 12)
        })
        return res.json(user)




    } catch (error) {
        res.json({
            message: "Error"
        })
    }



}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (!user) {
            return res.json({
                error: 'No user found'
            })
        }

        const match = await compare(password, user.password)
        if (match) {
            jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(user)
            })
        }
        if (!match) {
            res.json({
                error: 'Password does not match'
            })
        }
    } catch (error) {
        console.log(error)
    }

}

const getProfile = (req, res) => {
    const { token } = req.cookies
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) throw err;
            res.json(user)
        })
    } else {
        res.json(null)
    }

}

module.exports = { test, register, loginUser, getProfile }