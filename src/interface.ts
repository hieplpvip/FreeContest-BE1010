export interface LogSchema {
  level: string;
  message: string;
}

export interface LogRecord {
  timestamp: number;
  level: string;
  message: string;
}
