import express from 'express';
import  * as dotenv from 'dotenv';
import cors from  'cors';

import connectedDB from './mongodb/connect.js';
import noteRouter  from './routes/notes.routes.js';



// express app
dotenv.config()
const app = express()
app.use(cors());
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.json({mssg: 'learnig rest api'})
})



// Middleware
app.use('/api/v1/notes', noteRouter);


// listen for request

const startServer = async () => {
    try {
        connectedDB(process.env.MONGODB_URL);

        app.listen(process.env.PORT, () => {
            console.log('server started on port', process.env.PORT);
        })

    } catch (error) {
        console.log(error)
    }
}

startServer();


