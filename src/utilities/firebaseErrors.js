export const AuthErrorCode = code => {
    console.error(`Error al autenticar: ${code}`)
    switch(code) {
        case 'auth/email-already-in-use':
            return "Este correo ya está siendo usado por otro usuario"
        case 'auth/user-disabled':
            return "Este usuario ha sido deshabilitado"
        case 'auth/operation-not-allowed':
            return "Operación no permitida"
        case 'auth/invalid-email':
            return "Correo electrónico no valido"
        case 'auth/wrong-password':
            return "Contraseña incorrecta"
        case 'auth/user-not-found':
            return "No se encontró cuenta del usuario con el correo especificado"
        case 'auth/network-request-failed':
            return "Promblema al intentar conectar al servidor"
        case 'auth/weak-password':
            return "Contraseña muy debil o no válida"
        case 'auth/missing-email':
            return "Hace falta registrar un correo electrónico"
        case 'auth/internal-error':
            return "Error interno"
        case 'auth/invalid-custom-token':
            return "Token personalizado invalido"
        case 'auth/too-many-requests':
            return "Ya se han enviado muchas solicitudes al servidor"
        case 'auth/popup-closed-by-user':
            return 'Cancelado por el usuario'
        default:
            return "Error inesperado, vuelva a intentar"
        }
}