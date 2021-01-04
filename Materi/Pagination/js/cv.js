let userList = [{
    name: "Administrator",
    gender: "Laki-laki",
    hobby: "Berenang, Badminton",
    "place-dob": "Jakarta, 2001-01-01",
    address: "Jakarta"
}, {
    name: "Administrator 1",
    gender: "Laki-laki",
    hobby: "Berenang, Badminton",
    "place-dob": "Jakarta, 2001-01-01",
    address: "Jakarta 1"
}, {
    name: "Administrator 2",
    gender: "Laki-laki",
    hobby: "Berenang, Badminton",
    "place-dob": "Jakarta, 2001-01-01",
    address: "Jakarta 2"
}, {
    name: "Administrator 3",
    gender: "Laki-laki",
    hobby: "Berenang, Badminton",
    "place-dob": "Jakarta, 2001-01-01",
    address: "Jakarta 3"
}, {
    name: "Administrator 4",
    gender: "Laki-laki",
    hobby: "Berenang, Badminton",
    "place-dob": "Jakarta, 2001-01-01",
    address: "Jakarta 5"
}, {
    name: "Administrator 5",
    gender: "Laki-laki",
    hobby: "Berenang, Badminton",
    "place-dob": "Jakarta, 2001-01-01",
    address: "Jakarta 5"
}]
let currentPage = 0
let rowPerPage = 1
let maxButtonPage = 3

// save form
function save() {
    event.preventDefault()
    console.log("this save:", this);


    let form = document.userInput
    let userData = {}

    console.log(form.gender.children);
    userData.name = form.name.value
    userData.gender = getSelected("gender")
    userData.hobby = getSelectedAll("hobby")
    userData["place-dob"] = form.place.value + ", " + form.dob.value
    userData.address = form.address.value

    console.log("userdata:", userData);

    userList.push(userData)

    showHidePage()
}

function showHidePage() {
    document.querySelector(".inputData").classList.toggle("hidden")
    document.querySelector(".showData").classList.toggle("hidden")
}

function back() {
    showHidePage()
}

// get single selected
function getSelected(name) {

    let checkedEl = document.querySelector(`input[name='${name}']:checked`)
    if (checkedEl) return checkedEl.value

    return null
}

// get multi selected
function getSelectedAll(name) {
    let hobbies = ""
    let checkedEl = document.querySelectorAll("input[name='" + name + "']:checked")

    // start test
    let checkedElMale = document.querySelector("input[value='Laki-laki']:checked")
    let checkedElFemale = document.querySelector("input[value='Perempuan']:checked")

    console.log(checkedElMale);
    console.log(checkedElFemale);

    if (checkedElMale) console.log("checked: male");
    if (checkedElFemale) console.log("checked: female");
    // end test

    for (let index = 0; index < checkedEl.length; index++) {
        const element = checkedEl[index];

        hobbies += hobbies ? ", " + element.value : element.value
    }

    return hobbies
}

// add next index
function next() {
    console.log("next");
    if (currentPage == (userList.length - 1)) {
        // currentPage = -1
        alert("Data Terakhir!!")
        // return
    } else {
        currentPage += 1
        console.info("currentPage:", currentPage)
        console.warn("Value:", userList[currentPage])

        showData()
    }
}

// add prev index
async function prev() {
    console.log("prev");
    if (currentPage == 0) {
        alert("Data Pertama!!")
        return
    }

    currentPage = await currentPage - 1
    console.info("currentPage:", currentPage)
    console.warn("Value:", userList[currentPage])

    showData()
}

function showData(page = 1) {
    const tbody = document.querySelector("table[name='listData'] tbody")
    const startLoop = (page - 1) * rowPerPage
    const totalData = startLoop + rowPerPage
    const endLoop = totalData > userList.length ? userList.length : totalData

    /**
     * 1 = 1[0] - 2[1] = (page - 1) * rowPerPage
     * 2 = 3[2] - 4[3] = 
     * 3 = 5[4] - 6[5]
     */

    let tr = ""
    for (let index = startLoop; index < endLoop; index++) {
        const user = userList[index];

        tr += `
            <tr>
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.gender}</td>
                <td>${user["place-dob"]}</td>
                <td>${user.hobby}</td>
                <td>${user.address}</td>
            </tr>
        `
    }
    tbody.innerHTML = tr

    renderPagination(page)
}

function renderPagination(page) {
    const divPagination = document.querySelector("div.pagination")
    const devided = Math.floor(maxButtonPage / 2)
    let startButtonPage = 1
    let endButtonPage = maxButtonPage
    let totalButtonPage = Math.ceil(userList.length / rowPerPage)

    if (page == 1 || page - devided < 1) {

    } else if (page + devided > totalButtonPage) {
        startButtonPage = totalButtonPage + 1 - maxButtonPage
        endButtonPage = totalButtonPage
    } else {
        startButtonPage = page - devided
        endButtonPage = page + devided
    }

    /**
    * 1 = 1, 2, 3 (1)
    * 2 = 1, 2, 3 (1 , )
    * 3 = 2, 3, 4
    * 4 = 3, 4, 5
    * 5 = 4, 5, 6
    * 6 = 4, 5, 6
    */

    let divButtonPage = ""
    for (let start = startButtonPage; start <= endButtonPage; start++) {
        divButtonPage += `
            <div class="pagination-button" onclick="showData(${start})">${start}</div>
        `
    }
    divPagination.innerHTML = divButtonPage
}

function __init() {
    showData()
}
__init()

/**
 * TUGAS:
 *  - Buat menu list karyawan dan pendaftaran karyawan (Nama, Jenkel, TTL, Alamat, Jabatan)
 *  - Tersedia Form Login
 *  - Karyawan yang sudah didaftarkan bisa Login
 *  - Admin bisa mendaftarkan karyawan
 *  - Karyawan tidak bisa mendaftarkan karyawan lain
 */