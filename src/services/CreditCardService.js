import CreditCardModel from '../models/CreditCardModel.js';

export const addCreditCard = (cardData) => {
    return CreditCardModel.insert(cardData)
};

export const getAllCreditCards = () => {
    return CreditCardModel.find();
};