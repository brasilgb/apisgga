const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const userRoute = require('./routes/usersRoute');
const ciclosRoute = require('./routes/ciclosRoute');
const lotesRoute = require('./routes/lotesRoute');
const aviariosRoute = require('./routes/aviariosRoute');
const metasRoute = require('./routes/metasRoute');
const coletasRoute = require('./routes/coletasRoute');
const enviosRoute = require('./routes/enviosRoute');

app.use(bodyParser.json());

app.use('/users', userRoute);
app.use('/ciclos', ciclosRoute);
app.use('/lotes', lotesRoute);
app.use('/aviarios', aviariosRoute);
app.use('/metas', metasRoute);
app.use('/coletas', coletasRoute);
app.use('/envios', enviosRoute);

app.listen(port, () => console.log(`Server on port: ${port}`));