import mongose from 'mongoose';
import * as dotenv from "dotenv";

dotenv.config();

const connectToDb = () => {
  mongose.connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log(err));
};

export default connectToDb;
