import { config } from './config/config';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { sequelize } from './sequelize';

import { IndexRouter } from './controllers/v0/index.router';

import bodyParser from 'body-parser';
import { V0_FEED_MODELS, V0_USER_MODELS } from './controllers/v0/model.index';

(async (): Promise<void> => {
  await sequelize.addModels(V0_FEED_MODELS);
  await sequelize.addModels(V0_USER_MODELS);
  await sequelize.sync();

  console.log('Database Connected');

  const app = express();
  const port = config.port || 8080;

  // use the logger middleware
  app.use(morgan('dev'));

  app.use(bodyParser.json());

  app.use(cors());

  app.use('/api/v0/', IndexRouter);

  // Root URI call
  app.get('/', async (_req, res) => {
    res.send('/api/v0/');
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`Server is running at ${config.url}`);
    console.log(`Press CTRL+C to stop server`);
  });
})();
