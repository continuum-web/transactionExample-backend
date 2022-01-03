const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes/apiRoutes')

const app = express();

// for cross site calling
app.use(cors());

//A base route, every call to ip:port/api is first directed here
app.use("/api", apiRouter)

//A catch all route for any pages that dont exist
app.all('*', (req, res) => {
	res.status(404).send('Hello World');
});


//exports app to use in the listener
module.exports = app;
