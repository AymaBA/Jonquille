const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = 80;

const app = express();

mongoose.connect('mongodb://localhost/userdb', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', require("./routes/api"));

app.use((err , req , res , next) => {
	res.status(422).send({error : err.message});
});

app.listen(port, () => {
	console.log("Server is running on port "+port);
});

