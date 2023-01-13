import mocha from 'mocha';
import { expect } from 'chai';
import {addCreditCard, getAllCreditCards} from '../services/CreditCardService.js';

describe('Credit card service suite', () => {
    it('It should add a credit card', async () => {
        const cardData = {
            name: 'Valid user',
            card_number: '1212',
            card_limit: 2000,
            balance: 0,
        }
        let res = addCreditCard(cardData);
        expect(res).not.null;
    });
    it('It should get all credit cards', async () => {
        let res = getAllCreditCards();
        expect(res).not.null;
    });
});