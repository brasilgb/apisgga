const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const userRoute = require('./routes/usersRoute');
const productRoute = require('./routes/productsRoute');
const categoryRoute = require('./routes/categoriesRoute');

app.use(bodyParser.json());
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header(
//         'Access-Control-Allow-Header',
//         'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//     );

//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).send({});
//     }
//     next();
// });

app.use('/users', userRoute);
app.use('/products', productRoute);
app.use('/categories', categoryRoute);


app.listen(port, () => console.log(`Server on port: ${port}`));