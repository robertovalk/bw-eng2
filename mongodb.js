import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const user = process.env.MONGODB_USER
const password = process.env.MONGODB_PASSWORD
const uri = `mongodb+srv://${username}:${password}@site-bw.ngyramd.mongodb.net/?retryWrites=true&w=majority`;

const database = {
  async connect() {
    console.log('wait connect to database: mongodb')
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "site-bw",
        })
        .catch(err => console.log(err))
    },
}

database.connect();


