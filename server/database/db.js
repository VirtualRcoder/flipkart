import mongoose from 'mongoose';

export const Connection = async(USERNAME, PASSWORD)=>{
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.3awqdzg.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL)
        console.log("Database connected successfully")
    }
    catch(error){
        console.log(error)
    }
}

export default Connection;