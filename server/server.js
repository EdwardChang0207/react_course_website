import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Course from './dbCards.js'
import Student from './student.js'

//App config
const app = express()
const port = process.env.PORT || 8000
const connection_url = 'mongodb+srv://edwardchang:22188581@codingedudatabase.8kkbn.mongodb.net/web?retryWrites=true&w=majority'

//Middlewares
app.use(express.json())
app.use(Cors())

//DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//API Endpoints
app.get('/', (req, res) => res.status(200).send(`The Server is running on ${port}`))

app.post('/courses', (req, res) => {
    const dbCard = req.body

    Course.create(dbCard, (err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.get('/courses', (req, res) => {
    Course.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
            console.log('get data sucessfully')
        }
    })
})

app.post('/student', (req, res) => {
    const student = req.body

    Student.create(student, (err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

app.post('/student', (req, res) => {
    Student.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

//Listener
app.listen(port, () => console.log(`listening on localhost ${port}`))