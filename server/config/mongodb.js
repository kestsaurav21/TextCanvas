import mongoose from "mongoose";


const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log('DB is connected');
        
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/textcanvas`)
}

export default connectDB;