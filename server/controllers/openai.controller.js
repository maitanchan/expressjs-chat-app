import axios from "axios"
import { openai } from '../index.js'

//Chatbot Text
export const chatTextAi = async (req, res) => {

    try {

        const { text, activeChatId } = req.body

        const response = await openai.createChatCompletion(

            {

                model: "gpt-3.5-turbo",

                messages: [

                    { role: "system", content: "AI text" },

                    { role: "user", content: text }

                ]

            }

        )

        await axios.post(

            `https://api.chatengine.io/chats/${activeChatId}/messages/`,

            { text: response.data.choices[0].message.content },

            {
                headers: {

                    "Project-ID": process.env.PROJECT_ID,
                    "User-Name": process.env.BOT_USER_NAME,
                    "User-Secret": process.env.BOT_USER_SECRET,

                }
            }

        )

        res.status(200).json({ text: response.data.choices[0].message.content })

    } catch (error) {

        console.error("error", error.response.data.error)

        res.status(500).json({ error: error.message })

    }

}

//Chatbot Code
export const chatCodeAi = async (req, res) => {

    try {

        const { text, activeChatId } = req.body

        const response = await openai.createChatCompletion(

            {

                model: "gpt-3.5-turbo",

                messages: [

                    { role: "system", content: "AI code" },

                    { role: "user", content: text }

                ]

            }

        )

        await axios.post(

            `https://api.chatengine.io/chats/${activeChatId}/messages/`,

            { text: response.data.choices[0].message.content },

            {

                headers: {

                    "Project-ID": process.env.PROJECT_ID,
                    "User-Name": process.env.BOT_USER_NAME,
                    "User-Secret": process.env.BOT_USER_SECRET

                }

            }

        )

        res.status(200).json({ text: response.data.choices[0].message.content })

    } catch (error) {

        console.error("error", error.response.data.error)

        res.status(500).json({ error: error.message })

    }


}

//Chatbot Assist
export const chatAssistAi = async (req, res) => {

    try {

        const { text } = req.body;

        const response = await openai.createChatCompletion(
            {

                model: "gpt-3.5-turbo",

                messages: [

                    {
                        role: "system",
                        content: "AI assist",
                    },
                    { role: "user", content: `Finish my thought: ${text}` }

                ]

            }
        )

        res.status(200).json({ text: response.data.choices[0].message.content })

    } catch (error) {

        console.error("error", error)
        res.status(500).json({ error: error.message })

    }

}