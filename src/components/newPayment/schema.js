import * as Yup from 'yup';
export const ValidationSchema = Yup.object({

    number: Yup.string()
        .min(10, 'mobile number must be at least 10 characters')
        .required('mobile number is required'),
    amount: Yup.string()
        .min(1, 'minimum value is 1')
        .required('amount is required'),
});