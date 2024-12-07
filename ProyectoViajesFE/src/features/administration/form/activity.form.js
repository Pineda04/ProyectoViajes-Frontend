import * as Yup from 'yup';

export const activityInitValues = () => ({
    id : '',
    name: '',
    description: '',
    travelPackageId: ''
});

export const activityValidationSchema = () => Yup.object({
    name: Yup.string()
        .required("El nombre de la actividad es requerido")
        .min(3, "El nombre debe tener al menos 3 caracteres"),
    description: Yup.string()
        .required("La descripción es requerida")
        .min(10, "La descripción debe tener al menos 10 caracteres")
        .max(500, "La descripción no puede exceder 500 caracteres"),
    travelPackageId: Yup.string()
        .required("El paquete de viajes es requerido")
});