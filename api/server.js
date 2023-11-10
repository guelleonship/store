//access routers
const product_router = require("./routers/product_router");

//access express functionalities
const express = require("express");
const app = express();

//access env file contents
const env = require("dotenv");
env.config();

//access mongoose functionalities
const mongoose = require("mongoose");

const cors = require('cors');



//starts the server to start accpeting html requests
app.listen(3000, () => {
    console.log("\nReady to accept requests in 3000");
})


//connect to mongoose database
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("DB Connection successful") //execute this code if connected successful
    })
    .catch((err) => {
        console.log(err) //prints the error if an error occurred
    })

    
const corsOptions = {
    origin: 'http://localhost:3001',
};

app.use(cors(corsOptions));



//allows handling of JSON
app.use(express.json());

//middleware for products
app.use('/api/products', product_router);
