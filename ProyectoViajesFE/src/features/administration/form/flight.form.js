import * as Yup from 'yup';

export const flightInitValues = () => ({
    id : '',
    typeFlightId: '',
    travelPackageId: '',
    airline: '',
    price: ''
});

export const flightValidationSchema = () => Yup.object({
    typeFlightId: Yup.string()
        .required("El id del tipo de vuelo es requerido"),
    travelPackageId: Yup.string()
        .required("El id del paquete de viaje es requerido"),
    airline: Yup.string()
        .required("El nombre de la aerolínea es requerido")
        .min(3, "El nombre debe tener al menos 3 caracteres"),
    price: Yup.number()
        .required("El precio del vuelo es requerido")
        .positive("El precio debe ser un número positivo")
        .typeError("El precio debe ser un número válido")
        .min(0, "El precio no puede ser negativo")
});