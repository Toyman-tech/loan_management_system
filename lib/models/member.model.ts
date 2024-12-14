import mongoose from "mongoose";

const memberSchema= new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true}, 
    gender:{type: String, required: true}, 
    age:{type: String, required: true}, 
    district:{type: String, required: true},
    country:{type: String, required: true}, 
    maritalStatus:{type: String, required: true},  
    phoneNumber:{type: String, required: true}, 
    statesVisited:{type: String, required: true}, 
    expectations:{type: String, required: true}, 
    profession:{type: String, required: true}, 
    skills:{type: String, required: true}, 
    support:{type: String, required: true} 
})

const Member = mongoose.models.Member || mongoose.model('Member',  memberSchema);

export default Member;