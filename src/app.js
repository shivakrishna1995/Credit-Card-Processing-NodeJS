import express from 'express';
import cors from 'cors';
import * as env from 'dotenv';
import CreditCardController from './controllers/CreditCardController.js';

env.config()
const PORT = process.env.PORT
const app = express();

app.use(cors());
app.use('/credit-card', CreditCardController);

app.listen(PORT, () => {
    console.log(`NodeJS is running on PORT ${PORT}`);
});