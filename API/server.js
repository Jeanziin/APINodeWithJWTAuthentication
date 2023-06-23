const connection = require('./src/models/connection');
const app = require('./src/app');


const PORT = 3333

connection
  .then(() => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT} and connected to the database`));
  })
  .catch((err) => console.log(err));
