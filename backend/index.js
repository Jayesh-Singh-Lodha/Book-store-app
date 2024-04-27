import express from "express";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";

const app = express();

app.use(express.json());

app.use(cors());
// app.use(cors(
//     {
//         origin:'http://localhost:3000',
//         methods:['GET','PUT','DELETE','POST'],
//         allowedHeaders:['Content-Type']
//     }
// ))

app.use('/books',booksRoute);

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('GET request response');
})

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to Database');
        app.listen(PORT, () => {
            console.log(`App is listening on PORT: ${PORT}`);
        })
    })
    .catch(error => {
        console.log(error);
    })