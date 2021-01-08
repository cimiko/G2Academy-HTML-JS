const admin = [{
    username: "gateIn",
    password: "in"
}]

const adminOut = [{
    username: "gateOut",
    password: "out"
}]

let loginSession;
let userLogin;

let userList = JSON.parse(localStorage.getItem('userList'));
let userSession = JSON.parse(localStorage.getItem('userLogin'));

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    let form = document.loginForm
    let username = form.username.value;
    let password = form.password.value;

    if (username == admin[0].username && password == admin[0].password) {
        alert("Login successfully");
        loginSession = true
        localStorage.setItem('loginSession', JSON.stringify(loginSession));

        userLogin = username;
        localStorage.setItem('userLogin', JSON.stringify(userLogin));
        window.location = "index.html"; // Redirecting to other page.
        return false;
    } else if (username == adminOut[0].username && password == adminOut[0].password) {
        alert("Login successfully");
        loginSession = true
        localStorage.setItem('loginSession', JSON.stringify(loginSession));

        userLogin = username;
        localStorage.setItem('userLogin', JSON.stringify(userLogin));
        window.location = "getOut.html"; // Redirecting to other page.
        return false;
    } else if (username == admin[0].username && password != admin[0].password) {
        attempt--;
        loginSession = false;
        alert("your password is wrong, please enter the correct password!!");
        alert("You have left " + attempt + " attempt;");
    } else {
        for (let i = 0; i < userList.length; i++) {
            if (userList[i].name == username && password == 1) {
                alert("Login successfully");
                loginSession = true
                localStorage.setItem('loginSession', JSON.stringify(loginSession));

                userLogin = username;
                localStorage.setItem('userLogin', JSON.stringify(userLogin));
                window.location = "karyawan.html";
                return;
            } else {
                attempt--;// Decrementing by one.
                alert("You have left " + attempt + " attempt;");
                // Disabling fields after 3 attempts.
                if (attempt == 0) {
                    document.querySelector("#username").disabled = true;
                    document.querySelector("#password").disabled = true;
                    document.querySelector("#submit").disabled = true;
                }
            }
        }
    }
    loginSession = false;
}

const checkLogin = () => {
    if (localStorage.loginSession == "true") {
        if (userSession.toUpperCase() == admin[0].username.toUpperCase()) {
            window.location.href = "index.html";
            return;
        } else if(userSession.toUpperCase() == adminOut[0].username.toUpperCase()){
            window.location.href = "getOut.html";
            return;
        }
    }
}