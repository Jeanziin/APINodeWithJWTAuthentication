const { default: mongoose } = require('mongoose');
const connection = require('./models/connection');
const app = require('./app');
require('dotenv').config();

const PORT = 3333;

connection.then(() => {
    
    app.listen(PORT, () => console.log(`Server listening on port ${PORT} and connected database`));

}).catch((err) => console.log(err));
