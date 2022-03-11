const express = require("express");
const connectDB = require("./config/db");
const app = express();

//connection base de données
connectDB();

//middleware
app.use(express.json())

//routes
app.use('/api/contacts',require('./routes/contact'))


const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`server started on ${port}`));