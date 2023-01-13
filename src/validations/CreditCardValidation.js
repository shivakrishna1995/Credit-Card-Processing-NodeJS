import yup from 'yup';

const CCRequestSchema = yup.object({
    name: yup.string()
        .required('provide name'),
    card_number: yup.string()
        .required('provide credit card number')
        .test(
            'Luhn check',
            'provide valid credit card number',
            (value) => {
                const arr = value
                    .split('')
                    .reverse()
                    .map(x => parseInt(x));
                const lastDigit = arr.shift();
                let sum = arr.reduce(
                    (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val)),
                    0
                );
                sum += lastDigit;
                return sum % 10 === 0;
            }
        ),
    card_limit: yup.number()
        .min(0),
    balance: yup.number()
        .default(0)
});

export default CCRequestSchema;