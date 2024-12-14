import mongoose from "mongoose";


const dueSchema= new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},  
    phoneNumber:{type: String, required: true},
    amount:{type: String, required: true},
    plan:{type: String, required: true}, 
})

const Due = mongoose.models.Due || mongoose.model('Due',  dueSchema);

export default Due;