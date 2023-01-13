import CreditCardModel from '../models/CreditCardModel.js';

export const addCreditCard = (cardData) => {
    const response = CreditCardModel.insert(cardData);
    if(response?.['$loki']){
        response['id'] = response['$loki'];
        delete response['$loki'];
    }
    return response;
};

export const getAllCreditCards = () => {
    const response = CreditCardModel.find().reverse();
    return response?.map?.(cc => {
        if(cc?.['$loki']){
            cc['id'] = cc['$loki'];
            delete cc['$loki'];
        }
        return cc;
    })
};