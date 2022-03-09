const { createLogger, transports, format } = require("winston");

const logConfiguration = {
  transports: [
    new transports.File({
      filename: "./logs/error.log",
      level: "error",
      format: format.combine(format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}), format.json()),
    }),
    new transports.File({
      filename: "./logs/warn.log",
      level: "warn",

      format: format.combine(format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}), format.json()),
    }),
    new transports.File({
      filename: "./logs/info.log",
      level: "info",
      format: format.combine(format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}), format.json()),
    }),
    new transports.File({
      filename: "./logs/http.log",
      level: "http",
      format: format.combine(format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}), format.json()),
    }),
    new transports.File({
      filename: "./logs/verbose.log",
      level: "verbose",
      format: format.combine(format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}), format.json()),
    }),
    new transports.File({
      filename: "./logs/debug.log",
      level: "debug",
      format: format.combine(format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}), format.json()),
    }),
    new transports.File({
      filename: "./logs/silly.log",
      level: "silly",
      format: format.combine(format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}), format.json()),
    }),
  ],
};

const logger = createLogger(logConfiguration);

module.exports = { logger };
