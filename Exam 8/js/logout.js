let loginSession = localStorage.loginSession;
let userLogin = JSON.parse(localStorage.getItem('userLogin'));
let Karyawan = JSON.parse(localStorage.getItem('userList'));

const logout = () => {
    loginSession = false;
    localStorage.setItem('loginSession', JSON.stringify(loginSession));
    window.location = "login.html";

    userLogin = " ";
    localStorage.setItem('userLogin', JSON.stringify(userLogin));
}

const user = () => {
    let nav = document.querySelector('.nav')

    // nav.innerHTML = `
    //     <a class="navbar-brand" href="#">${userLogin.toUpperCase()}</a>
    // `
}
user()

const checkLoginKaryawan = () => {
    if (localStorage.loginSession == "false") {
        window.location.href = "login.html";
    } else {
        for (let i = 0; i < Karyawan.length; i++) {
            if (Karyawan[i].name.toUpperCase() != userLogin.toUpperCase()) {
                window.location.href = "index.html";
            }
            break;
        }
    }
}

const checkLoginAdmin = () => {
    if (localStorage.loginSession == 'false') {
        window.location.href = "login.html";
    } else {
        for (let i = 0; i < Karyawan.length; i++) {
            if (Karyawan[i].name.toUpperCase() == userLogin.toUpperCase()) {
                window.location.href = "karyawan.html";
            }
            break;
        }
    }
}