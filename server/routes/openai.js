import express from 'express'
import { chatAssistAi, chatCodeAi, chatTextAi } from '../controllers/openai.controller.js'

const router = express.Router()

//Chatbot Text
router.post("/text", chatTextAi)

//Chatbot Code
router.post("/code", chatCodeAi)

//Chatbot Assist
router.post("/assist", chatAssistAi)

export default router