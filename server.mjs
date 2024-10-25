//Imports
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from './db/conn.mjs';
import activityRoutes from './routes/activityRoutes.mjs';
import { activities } from './data/data.mjs';
import Activity from './models/activitySchema.mjs';

//Setup
dotenv.config();
const app = express();
let PORT = process.env.PORT || 3001;

//DB Connection
connectDB()

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//Routes
app.use('/activity', activityRoutes)

//Seed database (linked to data.mjs)
//Must comment out before making public
app.get('/seed', async (req, res) => {
  // Create items in database
  await Activity.create(activities)
  res.send('Seeding database')
});

//Listener
app.listen(PORT, () => {
  console.log(`Sever is running on PORT: ${PORT}`);
});
