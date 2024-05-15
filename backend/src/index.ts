import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/user.routes';
dotenv.config();

const app = express();
const port = process.env.PORT;
const url = process.env.URL!;

app.use(express.json());
app.use('/api', router)

mongoose.connect(url)
    .then(result => console.log('Connected'))
    .catch(err => console.error('Error connecting to db', err))

app.listen(port, () => {
    console.log('Listening on', port)
})