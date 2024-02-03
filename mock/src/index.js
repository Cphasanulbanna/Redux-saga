import { createMiddleware } from "@mswjs/http-middleware"
import express from "express"
import cors from "cors"
import handlers from "./handlers/index.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(createMiddleware(...handlers))

app.use(process.env.NODE_PORT || 9004)