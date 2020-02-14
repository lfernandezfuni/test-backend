import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import { logger } from 'wraps-logger';

import * as config from './config';
import { getEstilo } from './routes/estilos';
import { getAllGrupos, getGrupo, updateGrupo } from './routes/grupos';

const app = express();

app.use( bodyParser.json({limit: '50mb'}) );
app.use(cors());

app.get('/grupos',getAllGrupos);
app.get('/grupos/:id',getGrupo);
app.put('/grupos/:id',updateGrupo);

app.get('/estilos/:id',getEstilo);

app.listen(config.APP_PORT, () => {
	logger.info(`Server listening on http://localhost:${config.APP_PORT}`);
	logger.info('CTRL-C to exit\n');
});
