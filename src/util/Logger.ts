import {createLogger, transports, format, Logger} from 'winston'

const DEV: boolean = process.env.DEV_MODE === "true"

const MTGLog: Logger = createLogger({
    level: DEV ? "debug" : "info",
    exitOnError: false,
    transports: [
        new transports.Console({
            format: format.combine(
                format.errors({stack: true}),
                format.colorize(),
                format.simple(),
            )
        }),
        new transports.File({ 
            filename: 'log/error.log', level: 'error',
        }),
        new transports.File({
            filename: 'log/console.log',
        })
    ]
})

export default MTGLog

