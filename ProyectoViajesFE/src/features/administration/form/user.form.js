import * as Yup from 'yup';

export const userInitValues = () => ({
    id : '',
    firstName: '',
    lastName: '',
    email: '',
    imageUrl: ''
});

export const userValidationSchema = () => Yup.object({
    firstName: Yup.string()
        .required("El nombre es requerido")
        .min(3, "El nombre debe tener al menos 3 caracteres"),
    lastName: Yup.string()
        .required("El apellido es requerido")
        .min(3, "El apellido debe tener al menos 3 caracteres"),
    email: Yup.string()
        .required('El correo electrónico es requerido.')
        .email('Ingrese un correo electrónico valido.'),
    imageUrl: Yup.string()
        .required("La url de imagen del destino es obligatoria")
});