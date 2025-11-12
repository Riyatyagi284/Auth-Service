import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { Config } from './index.js';

const logger = createLogger({
  level: 'info',
  defaultMeta: {
    serviceName: 'auth-service',
  },

  transports: [
    new DailyRotateFile({
      dirname: 'logs/combinedLog',
      filename: 'application-%DATE%.log',
      level: 'info',
      silent: Config.NODE_ENV === 'test',

      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
    new DailyRotateFile({
      dirname: 'logs/errorLog',
      filename: 'application-%DATE%.log',
      level: 'error',
      silent: Config.NODE_ENV === 'test',

      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
    new transports.Console({
      level: 'info',
      format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf(({ level, message, timestamp }) => {
          return `${timestamp} [${level}]: ${message}`;
        })
      ),
      silent: Config.NODE_ENV === 'test',
    }),
  ],
});

export default logger;
