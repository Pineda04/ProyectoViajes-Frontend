import * as Yup from 'yup';

export const typeHostingInitValues = () => ({
    id : '',
    name: ''
});

export const typeHostingValidationSchema = () => Yup.object({
    name: Yup.string()
        .required("El nombre del tipo de hospedaje es requerido")
        .min(3, "El nombre debe tener al menos 3 caracteres")
});