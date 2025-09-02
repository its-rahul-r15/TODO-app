import express from 'express'
import dotenv from "dotenv";
import cors from "cors";
import connectDB from './config/db.js';
import todoRoutes from './routes/todoRoutes.js'

dotenv.config()
const app = express();

const port = process.env.PORT || 3000 

//midleware
app.use(cors())
app.use(express.json())

//database connection

connectDB();

//routes

app.use("/api/todo", todoRoutes)

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.listen(port, ()=> {
    console.log(`port are workin on ${port}`);
})