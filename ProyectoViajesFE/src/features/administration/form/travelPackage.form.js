import * as Yup from 'yup';

export const travelPackageInitValues = () => ({
    id : '',
    name: '',
    description: '',
    price: '',
    duration: '',
    numberPerson: '',
    imageUrl: '',
    destinationId: ''
});

export const travelPackageValidationSchema = () => Yup.object({
    name: Yup.string()
        .required("El nombre del paquete de viaje es requerido")
        .min(3, "El nombre debe tener al menos 3 caracteres"),
    description: Yup.string()
        .required("La descripción es requerida")
        .min(10, "La descripción debe tener al menos 10 caracteres")
        .max(500, "La descripción no puede exceder 500 caracteres"),
    price: Yup.number()
        .required("El precio del paquete de viaje es requerido")
        .positive("El precio debe ser un número positivo")
        .typeError("El precio debe ser un número válido")
        .min(0, "El precio no puede ser negativo"),
    duration: Yup.number()
        .required("La duración del paquete de viaje es requerida")
        .integer("La duración debe ser un número entero")
        .positive("La duración debe ser un número positivo")
        .typeError("La duración debe ser un número válido")
        .min(1, "La duración mínima es 1 día"),
    numberPerson: Yup.number()
        .required("El número de personas del paquete de viajes es requerido")
        .integer("El número de personas debe ser un número entero")
        .positive("El número de personas debe ser un número positivo")
        .typeError("El número de personas debe ser un número válido")
        .min(1, "Debe haber al menos una persona"),
    imageUrl: Yup.string()
        .required("La url de imagen del punto de interés es obligatoria"),
    destinationId: Yup.string()
        .required("El id del destino es requerido")
});