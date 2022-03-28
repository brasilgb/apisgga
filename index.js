const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const userRoute = require('./routes/usersRoute');
const ciclosRoute = require('./routes/ciclosRoute');
const lotesRoute = require('./routes/lotesRoute');
const aviariosRoute = require('./routes/aviariosRoute');
const metasRoute = require('./routes/metasRoute');
const coletasRoute = require('./routes/coletasRoute');
const enviosRoute = require('./routes/enviosRoute');
const mortalidadesRoute = require('./routes/mortalidadesRoute');
const pesagensRoute = require('./routes/pesagensRoute');
const recebimentosRoute = require('./routes/recebimentosRoute');
const consumosRoute = require('./routes/consumosRoute');
const tarefasRoute = require('./routes/tarefasRoute');

app.use(bodyParser.json());

app.use('/users', userRoute);
app.use('/ciclos', ciclosRoute);
app.use('/lotes', lotesRoute);
app.use('/aviarios', aviariosRoute);
app.use('/metas', metasRoute);
app.use('/coletas', coletasRoute);
app.use('/envios', enviosRoute);
app.use('/mortalidades', mortalidadesRoute);
app.use('/pesagens', pesagensRoute);
app.use('/recebimentos', recebimentosRoute);
app.use('/consumos', consumosRoute);
app.use('/tarefas', tarefasRoute);

app.listen(port, () => console.log(`Server on port: ${port}`));