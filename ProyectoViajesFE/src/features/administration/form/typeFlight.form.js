import * as Yup from 'yup';

export const typeFlightInitValues = () => ({
    id : '',
    name: ''
});

export const typeFlightValidationSchema = () => Yup.object({
    name: Yup.string()
        .required("El nombre del tipo de vuelo es requerido")
        .min(3, "El nombre debe tener al menos 3 caracteres")
});