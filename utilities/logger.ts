const winston = require('winston');

const logger = winston.createLogger({
    level: "info",
    transports: [
        new winston.transports.Console({
            level: 'info',
            colorize: false
        }),
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'info',
            maxsize: '5242880',
            maxFiles: '5',
            // handleExceptions: true, 
            colorize: false
        }),
    ]
})

module.exports = logger;
