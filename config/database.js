import mongoose from 'mongoose';
let connected = false;
const connectDB = async () => {
  mongoose.set('strictQuery', true);
  // don't connect if already connected
  if (connected) {
    console.log('MongoDB is already connected');
    return;
  }
  // connect
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log('MongoDB connected ...');
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
