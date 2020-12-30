import * as Sentry from '@sentry/node'
import * as Tracing from '@sentry/tracing'
import MTGLog from './Logger';

// This is boilerplate for down the road
export const createSentry = () => {
    Sentry.init({
        dsn: process.env.SENTRY,
        tracesSampleRate: 1.0,
    });

    const transaction = Sentry.startTransaction({
        op: "test",
        name: "My First Test Transaction"
    })

    setTimeout(() => {
        try{
            throw new Error("Test")
        }
        catch(err){
            Sentry.captureException(err)
        }
        finally{
            transaction.finish()
        }
    }, 99)
}
