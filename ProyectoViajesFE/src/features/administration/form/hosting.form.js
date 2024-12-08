import * as Yup from 'yup';

export const hostingInitValues = () => ({
    id : '',
    name: '',
    description: '',
    pricePerNight: '',
    typeHostingId: '',
    travelPackageId: '',
    imageUrl: ''
});

export const hostingValidationSchema = () => Yup.object({
    name: Yup.string()
        .required("El nombre del hospedaje es requerido")
        .min(3, "El nombre debe tener al menos 3 caracteres"),
    description: Yup.string()
        .required("La descripción es requerida")
        .min(10, "La descripción debe tener al menos 10 caracteres")
        .max(500, "La descripción no puede exceder 500 caracteres"),
    pricePerNight: Yup.number()
        .required("El precio del hospedaje es requerido")
        .positive("El precio debe ser un número positivo")
        .typeError("El precio debe ser un número válido")
        .min(0, "El precio no puede ser negativo"),
    typeHostingId: Yup.string()
        .required("El id del tipo de hospedaje es requerido"),
    travelPackageId: Yup.string()
        .required("El id del paquete de viaje es requerido"),
    imageUrl: Yup.string()
        .required("La url de imagen del hospedaje es obligatoria")
});