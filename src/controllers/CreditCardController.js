import { Router } from 'express';
import CreditCardValidation from '../validations/CreditCardValidation.js';
import { addCreditCard, getAllCreditCards } from '../services/CreditCardService.js';

const router = Router();

router.post('/add', async (req, res) => {
    try{
        const body = req.body;
        await CreditCardValidation.validate(body);
        const result = addCreditCard(body);
        res.status(201).send(result);
    }catch(e){
        res.status(403).send(e?.message || e || "Something went wrong");
    }
});

router.get('/all', (req, res) => {
    try{
        const result = getAllCreditCards();
        res.status(200).send(result);
    }catch(e){
        res.status(500).send(e);
    }
});

export default router;