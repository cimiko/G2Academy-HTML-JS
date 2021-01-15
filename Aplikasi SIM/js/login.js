const admin = [{
    username: "admin",
    password: "admin"
}]

let loginSession;
let userLogin;
let idUser;

let dataMhs = JSON.parse(localStorage.getItem('dataMhs'));
let dataDsn = JSON.parse(localStorage.getItem('dataDsn'));
let userSession = JSON.parse(localStorage.getItem('userLogin'));

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
const validate = () => {
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
    } else if (username == admin[0].username && password != admin[0].password) {
        attempt--;
        loginSession = false;
        alert("your password is wrong, please enter the correct password!!");
        alert("You have left " + attempt + " attempt;");
        return;
    } else {

        for (let i = 0; i < dataMhs.length; i++) {
            if (dataMhs[i].nim == username && password == 1) {
                alert("Login successfully");
                loginSession = true;
                Mhs = true;
                localStorage.setItem('loginSession', JSON.stringify(loginSession));

                userLogin = dataMhs[i].name;
                localStorage.setItem('userLogin', JSON.stringify(userLogin));

                idUser = username
                localStorage.setItem('idUser', JSON.stringify(idUser));
                window.location = "mhs.html";
                return;
            } else {
                for (let i = 0; i < dataDsn.length; i++) {
                    if (dataDsn[i].nid == username && password == 2) {
                        alert("Login successfully");
                        loginSession = true;
                        Dsn = true;
                        localStorage.setItem('loginSession', JSON.stringify(loginSession));

                        userLogin = dataDsn[i].name;
                        localStorage.setItem('userLogin', JSON.stringify(userLogin));

                        idUser = username
                        localStorage.setItem('idUser', JSON.stringify(idUser));
                        window.location = "dsn.html";
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
                        break;
                    }
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
        } else {
            for (let i = 0; i < dataMhs.length; i++) {
                if (userSession == dataMhs[i].name) {
                    window.location.href = "mhs.html";
                    return;
                } else {
                    for (let i = 0; i < dataDsn.length; i++) {
                        if (userSession == dataDsn[i].name) {
                            window.location.href = "dsn.html";
                            return;
                        }

                    }
                }
            }
        }
    }
}