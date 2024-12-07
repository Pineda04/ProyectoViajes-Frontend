import * as Yup from 'yup';

export const pointInterestInitValues = () => ({
    id : '',
    name: '',
    description: '',
    imageUrl: '',
    destinationId: ''
});

export const pointInterestValidationSchema = () => Yup.object({
    name: Yup.string()
        .required("El nombre del punto de interés es requerido")
        .min(3, "El nombre debe tener al menos 3 caracteres"),
    description: Yup.string()
        .required("La descripción es requerida")
        .min(10, "La descripción debe tener al menos 10 caracteres")
        .max(500, "La descripción no puede exceder 500 caracteres"),
    imageUrl: Yup.string()
        .required("La url de imagen del punto de interés es obligatoria"),
    destinationId: Yup.string()
        .required("El id del destino es requerido")
});