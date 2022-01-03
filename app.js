const express = require('express');
const cors = require('cors');

const app = express();

// for cross site calling
app.use(cors());


//A catch all route for any pages that dont exist
app.all('*', (req, res) => {
	res.status(404).send('Hello World');
});


//exports app to use in the listener
module.exports = app;
