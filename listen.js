const app = require('./app.js');

//A variable for the port number to make it configurable
const { PORT = 9090 } = process.env;

//calls the app listener on the port number variable. when accessed returns "Hello World"
app.listen(PORT, () => console.log(`running on port ${PORT}`));
