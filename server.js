const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

const port = process.env.PORT || 5000;

connectDb();

const app = express();

app.use(express.json());

app.use("/api/contacts", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port,  () => {
    console.log(`Server running on port ${port}`);
})