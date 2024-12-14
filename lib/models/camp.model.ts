import mongoose from "mongoose";


const campSchema= new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},  
    district:{type: String, required: true},
    phoneNumber:{type: String, required: true}, 
})

const Camp = mongoose.models.Camp || mongoose.model('Camp',  campSchema);

export default Camp;