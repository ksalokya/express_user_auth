import dotenv from "dotenv";
import express from 'express';
import connectDB from './database/dbConnection.js';
import userRoute from './routes/userRoute.js';

const app = express();
app.use(express.json());

dotenv.config({ path: `./config/.env` })
const port = process.env.PORT || 5000;

connectDB()
    .then(() => console.log("Connected to database successfully..."))
    .catch((err) => console.log(err));

app.use('/', userRoute);

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
});