function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'aby' || password === '1234') {
      alert('Por favor, ingrese nombre de usuario y contraseña');
      return false;
    }
  }
