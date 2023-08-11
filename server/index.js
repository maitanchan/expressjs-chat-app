import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import { Configuration, OpenAIApi } from "openai"

import openaiRoute from './routes/openai.js'
import authRoute from './routes/auth.js'

const app = express()
dotenv.config()

const port = process.env.PORT || 9000

//Middleware
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

//Config OpenAi
const configuration = new Configuration({

    apiKey: process.env.OPENAI_API_KEY,

})
export const openai = new OpenAIApi(configuration)

//Routes
app.use("/openai", openaiRoute)
app.use("/auth", authRoute)

app.listen(port, () => {

    console.log(`Server is running  at http://localhost:${port}`)

})