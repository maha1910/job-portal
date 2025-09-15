import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node";
import {clerkWebHooks} from './controllers/webhooks.js'

const app = express()



//Connect to database
await connectDB()

//Middleware
app.use(cors())
app.use(express.json())

//Routes
app.get('/', (req,res)=> res.send("API Working"))

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.post('/webhooks',clerkWebHooks)

//Port
const PORT = process.env.PORT || 5000

Sentry.setupExpressErrorHandler(app);
 

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running locally on http://localhost:${PORT}`);
  });
}

export default app;
