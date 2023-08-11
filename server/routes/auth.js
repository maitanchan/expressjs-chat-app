import express from 'express'
import { login, signup } from '../controllers/auth.controller.js'

const router = express.Router()

//Login
router.post("/login", login)

//Register
router.post("/signup", signup)

export default router