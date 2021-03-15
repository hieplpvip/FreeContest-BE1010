import express from 'express';
import cors from 'cors';
import { LogSchema } from './interface';
import { getTimestamp } from './utils';
import { newLog, getLogs } from './database';

const app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/timestamp', (req, res) => {
  res.json({ timestamp: getTimestamp() });
});

app.post('/logs', (req, res) => {
  const data: LogSchema = req.body;
  newLog(getTimestamp(), data.level, data.message);
  res.sendStatus(200);
});

app.get('/logs', (req, res) => {
  if (req.query.limit === undefined) {
    res.sendStatus(400);
  } else {
    const limit = +req.query.limit;
    res.json(getLogs(limit));
  }
});

app.listen(app.get('port'), () => {
  console.log(`server running on port ${app.get('port')}`);
});
