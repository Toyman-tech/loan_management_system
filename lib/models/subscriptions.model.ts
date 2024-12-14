import mongoose from "mongoose";


const subscriptionSchema= new mongoose.Schema({
    email:{type: String, required: true},   
})

const Subscription = mongoose.models.Subscription || mongoose.model('Subscription',  subscriptionSchema);

export default Subscription;