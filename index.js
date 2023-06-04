const express = require('express');
const cookieParser = require("cookie-parser");
const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');

const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', userRoute);
app.use('/api', postRoute);

app.get('/', (req, res) => {
    res.send("Hi from prisma with mongodb.");
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});