function validarFormulario() {
    const titulo = document.getElementById('titulo').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();
    const prioridad = document.getElementById('prioridad').value;

    if (titulo === '') {
        alert('El título es obligatorio.');
        return false;
    }
    if (descripcion === '') {
        alert('La descripción es obligatoria.');
        return false;
    }
    if (prioridad === '') {
        alert('La prioridad es obligatoria.');
        return false;
    }
    return true;
}

function validarLogin() {
    const usuario = document.getElementById('usuario').value.trim();
    const password = document.getElementById('password').value.trim();

    if (usuario === '') {
        alert('El usuario es obligatorio.');
        return false;
    }
    if (password === '') {
        alert('La contraseña es obligatoria.');
        return false;
    }
    return true;
}