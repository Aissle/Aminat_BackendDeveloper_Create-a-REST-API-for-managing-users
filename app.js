const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
mongoose.connect("mongodb://localhost:27017/mngurs", {useNewUrlParser: true, useUnifiedTopology: true});

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

app.use("", authRoutes);
app.use("", userRoutes); 

app.listen(6000, () => {
    console.log('This server is running on http://localhost:6000');
});

