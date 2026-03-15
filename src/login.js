function validarLogin(email, password) {
    if (!email || !password) {
        return "Campos vacíos";
    }
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
        return "Formato de email inválido";
    }
    return "OK";
}
