// let admin = window.location

// const login = () => {
//     admin.replace("./index.html")
// }

const admin = [{
    username: "admin",
    password: "admin"
}]

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    let form = document.loginForm
    let username = form.username.value;
    let password = form.password.value;

    if (username == admin[0].username && password == admin[0].password) {
        alert("Login successfully");
        window.location = "index.html"; // Redirecting to other page.
        return false;
    } else if(username == admin[0].username && password != admin[0].password){
        attempt--;
        alert("your password is wrong, please enter the correct password!!");
        alert("You have left " + attempt + " attempt;");
    }else {
        attempt--;// Decrementing by one.
        alert("You have left " + attempt + " attempt;");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.querySelector("#username").disabled = true;
            document.querySelector("#password").disabled = true;
            document.querySelector("#submit").disabled = true;
            return false;
        }
    }
}