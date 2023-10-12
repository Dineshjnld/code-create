document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-button");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        if (username === "code" && password === "create") {
            window.location.href = "explore.html";
        } else {
            alert("Incorrect username or password. Please try again.");
        }
    });
});
