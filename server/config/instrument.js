// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
    dsn: "https://b42857aec1759aa4b56938e82a5ab780@o4510016453869568.ingest.us.sentry.io/4510016672563200",

    // Setting this option to true will send default PII data to Sentry.
    // For example, automatic IP address collection on events
    sendDefaultPii: true,

    integrations: [
        nodeProfilingIntegration(),
        Sentry.mongooseIntegration()
    ],

    //Tracing
    //tracesSampleRate: 1.0,
});

Sentry.profiler.startProfiler();

Sentry.startSpan({
    name: "My First Transaction",
}, ()=> {

});

Sentry.profiler.startProfiler();
