import lokijs from 'lokijs';

const db = new lokijs('main.db');

const CreditCardModel = db.addCollection('CreditCard');

export default CreditCardModel;