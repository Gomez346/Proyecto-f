const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web") {
        alert("Has iniciado sesión correctamente.");
        window.location.href = "DashBoard.html"; // Replace with the desired URL
    } else {
        loginErrorMsg.style.opacity = 1;
    }
});




