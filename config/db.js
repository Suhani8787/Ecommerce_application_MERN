import mongoose from 'mongoose';
import colors from 'colors';
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to  Mongobd database ${conn.connection.host}`);
    }catch (error){
      console.log(`Error in Mongobd ${error}`.bgRed.white);
    }
};

export default connectDB;