import yup from 'yup';

const CCRequestSchema = yup.object({
    name: yup.string()
        .required('provide name'),
});

export default CCRequestSchema;