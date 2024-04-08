const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const registrationRoutes = require('./MVC/Routes/registrationRoutes');
 
const app = express();
 
app.use(cors());
 
app.use(bodyParser.json());
 
app.use('/register', registrationRoutes);
 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});