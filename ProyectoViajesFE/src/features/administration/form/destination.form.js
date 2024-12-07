import * as Yup from 'yup';

export const destinationInitValues = () => ({
    id : '',
    name: '',
    description: '',
    location: '',
    imageUrl: ''
});

export const destinationValidationSchema = () => Yup.object({
    name: Yup.string()
        .required("El nombre del destino es requerido")
        .min(3, "El nombre debe tener al menos 3 caracteres"),
    description: Yup.string()
        .required("La descripción es requerida")
        .min(10, "La descripción debe tener al menos 10 caracteres")
        .max(500, "La descripción no puede exceder 500 caracteres"),
    location: Yup.string()
        .required("La ubicación es requerida"),
    imageUrl: Yup.string()
        .required("La url de imagen del destino es obligatoria")
});