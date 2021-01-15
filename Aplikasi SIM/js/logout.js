let loginSession = localStorage.loginSession;
let userLogin = JSON.parse(localStorage.getItem('userLogin'));
let idUser = JSON.parse(localStorage.getItem('idUser'))
let dosen = JSON.parse(localStorage.getItem('dataDsn'));
let siswa = JSON.parse(localStorage.getItem('dataMhs'));
console.log(idUser);

const logout = () => {
    loginSession = false;
    localStorage.setItem('loginSession', JSON.stringify(loginSession));
    window.location = "login.html";

    userLogin = " ";
    localStorage.setItem('userLogin', JSON.stringify(userLogin));

    idUser = " "
    localStorage.setItem('idUser', JSON.stringify(idUser));
}

const user = () => {
    let nav = document.querySelector('#loginUser')
    let drop = document.querySelector('#userLogin')

    nav.innerHTML = `
        ${userLogin.toUpperCase()}
    `
    drop.innerHTML = `
        ${userLogin.toUpperCase()}
    `
}

const checkLoginMhs = () => {
    if (localStorage.loginSession == "false") {
        window.location.href = "login.html";
    } else {
        for (let i = 0; i < dosen.length; i++) {
            if (dosen[i].nid.toUpperCase() == idUser.toUpperCase()) {
                window.location.href = "dsn.html";
                return;
            }
        }
    }
}

const checkLoginDsn = () => {
    if (localStorage.loginSession == "false") {
        window.location.href = "login.html";
    } else {
        for (let i = 0; i < siswa.length; i++) {
            if (siswa[i].nim == idUser) {
                window.location.href = "mhs.html";
                return;
            }
        }
    }
}

const checkLoginAdmin = () => {
    if (localStorage.loginSession == "false") {
        window.location.href = "login.html";
    } else {
        for (let i = 0; i < dosen.length; i++) {
            if (dosen[i].nid == idUser) {
                window.location.href = "dsn.html";
            } else {
                for (let i = 0; i < siswa.length; i++) {
                    if (siswa[i].nim == idUser) {
                        window.location.href = "mhs.html";
                    }
                }
            }
            break;
        }
    }
}