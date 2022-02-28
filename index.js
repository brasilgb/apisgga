const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const userRoute = require('./routes/usersRoute');
const ciclosRoute = require('./routes/ciclosRoute');
const lotesRoute = require('./routes/lotesRoute');
const aviariosRoute = require('./routes/aviariosRoute');
const metasRoute = require('./routes/metasRoute');

app.use(bodyParser.json());

app.use('/users', userRoute);
app.use('/ciclos', ciclosRoute);
app.use('/lotes', lotesRoute);
app.use('/aviarios', aviariosRoute);
app.use('/metas', metasRoute);

app.listen(port, () => console.log(`Server on port: ${port}`));