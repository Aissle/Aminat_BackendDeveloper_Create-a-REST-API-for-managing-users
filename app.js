const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
mongoose.connect('mongodb://localhost:27017/userdb', {useNewUrlParser: true, useUnifiedTopology: true});

app.listen(3000, () => {
    console.log('This server is running on http://localhost:3000');
});