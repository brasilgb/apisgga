require('dotenv').config();
const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT_API || 3000;
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
const controlesRoute = require('./routes/controlesRoute');
const despesasRoute = require('./routes/despesasRoute');
const entradasRoute = require('./routes/entradasRoute');
const empresasRoute = require('./routes/empresasRoute');
const emailsRoute = require('./routes/emailsRoute');

app.use(cors());
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
app.use('/controles', controlesRoute);
app.use('/despesas', despesasRoute);
app.use('/entradas', entradasRoute);
app.use('/empresas', empresasRoute);
app.use('/emails', emailsRoute);

app.listen(port, () => console.log(`Server on port: ${port}`));