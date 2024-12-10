import * as Yup from 'yup';

export const registerInitValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
export const registerValidationSchema = Yup.object({
    firstName: Yup.string()
        .required('El nombre es requerido'),
    lastName: Yup.string()
        .required('El apellido es requerido'),
    email: Yup.string()
        .required('El correo electrónico es requerido.')
        .email('Ingrese un correo electrónico valido.'),
    password: Yup.string()
        .required('La contraseña es requerida.'),
    confirmPassword: Yup.string()
        .required('Confirme su contraseña')
        .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
})