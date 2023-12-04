function validarCredenciales() {
  // Obtener los valores de usuario y contraseña
  var usuario = document.getElementById('usuario').value;
  var contrasena = document.getElementById('contrasena').value;

  // Verificar si los valores son válidos
  if (usuario === 'usuario_valido' && contrasena === 'contrasena_valida') {
      // Redireccionar a otra página
      window.location.href = 'DashBoard.html';
  } else {
      // Mostrar un mensaje de error
      alert('Usuario o contraseña incorrectos');
  }
}