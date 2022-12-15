import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    age: {
        type:Number,
        require:true
    },
    email: {
        type:String,
        require:true
    },
    phone: {
        type:String,
        require:true
    },
    class: {
        type:String,
        require:true
    }
})

export default mongoose.model('Student', studentSchema)