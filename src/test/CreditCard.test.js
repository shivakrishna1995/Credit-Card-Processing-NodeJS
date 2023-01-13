import mocha from 'mocha';
import { expect } from 'chai';
import CreditCardRequestValidation from '../validations/CreditCardRequestValidation.js';

describe('CreditCardTestSuite', () => {
    describe('Credit card validation', () => {
        it('It should validate the credit card', async () => {
            const validCardData = {
                name: 'Valid user',
                card_number: '4485275742308327',
                card_limit: 2000,
                balance: 0,
            }
            let res = await CreditCardRequestValidation.isValid(validCardData);
            expect(res).true;
        });
        it('It should invalidate the credit card', async () => {
            const validCardData = {
                name: 'Valid user',
                card_number: '1234567890',
                card_limit: 2000,
                balance: 0,
            }
            let res = await CreditCardRequestValidation.isValid(validCardData);
            expect(res).false;
        });
    });
});