import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { LogRecord } from './interface';

type Schema = {
  logs: LogRecord[];
};

const adapter = new FileSync<Schema>('db.json');
const db = lowdb(adapter);

db.defaults({ logs: [] }).write();

const newLog = (timestamp: number, level: string, message: string): void => {
  db.get('logs').push({ timestamp, level, message }).write();
};

const getLogs = (num: number): LogRecord[] => {
  return db.get('logs').takeRight(num).value();
};

export { newLog, getLogs };
