import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const user = process.env.MONGODB_USER
const password = process.env.MONGODB_PASSWORD
const uri = `mongodb+srv://${user}:<${password}>@site-bw.ngyramd.mongodb.net/?retryWrites=true&w=majority`;


const connectDatabase = () => {
  console.log('wait connecting to database');

  mongoose.connect(uri,
    {
    useNewUrlParser: true, 
    useUnifiedTopology: true}
    );
    
}


const run = async(url) => {
  await mongoose.connect(url);
  console.log('conectado')
}

run(uri)
