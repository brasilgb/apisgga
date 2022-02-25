const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const userRoute = require('./routes/usersRoute');
const productRoute = require('./routes/productsRoute');
const categoryRoute = require('./routes/categoriesRoute');

app.use(bodyParser.json());

app.use('/users', userRoute);
app.use('/products', productRoute);
app.use('/categories', categoryRoute);

app.listen(port, () => console.log(`Server on port: ${port}`));