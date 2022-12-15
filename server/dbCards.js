import mongoose from 'mongoose'

const cardSchema = new mongoose.Schema({
    id: {
        type:Number,
        require:true
    },
    img: {
        type:String,
        require:true
    },
    title: {
        type:String,
        require:true
    },
    text: {
        type:String,
        require:true
    },
    link: {
        type:String,
        require:true
    },
    diff: {
        type:String,
        require:true
    }
})

export default mongoose.model('Course', cardSchema)