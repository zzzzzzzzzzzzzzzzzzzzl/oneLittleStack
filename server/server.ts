import express from 'express'
import { join } from 'node:path'
import router from './routes/todo'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))
server.use('/gpt', router)

export default server
