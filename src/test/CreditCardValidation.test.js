import mocha from 'mocha';
import { expect } from 'chai';
import CreditCardValidation from '../validations/CreditCardValidation.js';

describe('Credit card validation suite', () => {
    it('It should validate the credit card', async () => {
        const validCardData = {
            name: 'Valid user',
            card_number: '4485275742308327',
            card_limit: 2000,
            balance: 0,
        }
        let res = await CreditCardValidation.isValid(validCardData);
        expect(res).true;
    });
    it('It should invalidate the credit card', async () => {
        const validCardData = {
            name: 'Valid user',
            card_number: '1234567890',
            card_limit: 2000,
            balance: 0,
        }
        let res = await CreditCardValidation.isValid(validCardData);
        expect(res).false;
    });
});