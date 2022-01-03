const app = require('./app.js');

//A variable for the port number to make it configurable
const port = 9000;

//calls the app listener on the port number variable. when accessed returns "Hello World"
app.listen(port, () => console.log(`running on port ${port}`));
