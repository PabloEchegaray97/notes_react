import express from "express"
import mongoose from "mongoose"
import morgan from "morgan"
import router from './routes/notes.js'
import cors from "cors"
const app = express()

//database
mongoose.connect('mongodb://127.0.0.1:27017/notes')
    .then(() => {
        console.log("Connected")
    })


//cfg
app.set('PORT', 3000)

//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
//routes
app.use('/api/', router)
//server

app.listen(app.get('PORT'),() => {
    console.log('Server port 3000')
})