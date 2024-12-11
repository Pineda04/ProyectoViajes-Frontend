import * as Yup from 'yup';

export const assessmentInitValues = () => ({
    id : '',
    userId: '',
    comment: '',
    travelPackageId: '',
    stars: ''
});

export const assessmentValidationSchema = () => Yup.object({
    comment: Yup.string(),
    stars: Yup.number()
        .required("La valoración es requerida")
});