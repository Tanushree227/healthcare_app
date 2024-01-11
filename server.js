const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.status(200).send({
        message: "Server is running",
    });
});

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`.bgCyan.white);
})