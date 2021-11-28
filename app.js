const express = require("express");

const app = express();

const mongoose = require('mongoose');

const morgan = require('morgan');

const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser')

const expressValidator = require('express-validator');

const cors = require('cors')

const dotenv = require('dotenv')
dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
.then(() => console.log('DB Connected'));

mongoose.connection.on('error', err => {
    console.log(`DB Connetion error: ${err.message}`);
});

const postRoutes = require('./routes/post');

const authRoutes = require('./routes/auth');

const userRoutes = require('./routes/users');

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(expressValidator());
app.use(cors());
app.use("/", postRoutes);
app.use("/", authRoutes);
app.use("/", userRoutes);

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({error: 'Unauthorized!'});
    }
  });

const port = process.env.PORT || 27017;

app.listen(port, () => {
    console.log('this is a callback funtions from node js');
});

// made a change to check push to github