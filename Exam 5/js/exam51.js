let userList = []
let currentPage = 0

console.log(userList);

// function pagination() {
//     // console.log("params:", params);
//     console.log("pagination");
//     console.info("currentPage:", currentPage)
//     console.warn("Value:", userList[currentPage])
// }

// save form
function save() {
    event.preventDefault()

    let form = document.userInput
    let userData = {}
    currentPage += 1;

    console.log(form.gender.children);
    userData.id_data =  currentPage
    userData.name = form.name.value
    userData.address = form.address.value
    userData.gender = getSelected("gender")
    userData.hobby = getSelectedAll("hobby")
    userData.religion = form.religion.value;

    console.log("userdata:", userData);

    userList.push(userData);
    localStorage.setItem('userList', JSON.stringify(userList));

    showData();
    document.getElementById('form-data').reset();
    form.name.value = ""
    form.address.value = ""

    // showHidePage()
    // document.body.reset();
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

function getSelectOption(name) {

    let checkedEl = document.querySelector('#religion').value;
    if (checkedEl) return checkedEl.value

    return null
}

// get multi selected
function getSelectedAll(name) {
    let hobbies = ""
    let checkedEl = document.querySelectorAll("input[name='" + name + "']:checked")

    for (let index = 0; index < checkedEl.length; index++) {
        const element = checkedEl[index];

        // console.log("hobbies", hobbies);
        /*
        if(hobbies) hobbies += ", "
        hobbies += element.value
         */

        hobbies += hobbies ? ", " + element.value : element.value
    }

    return hobbies
}

const hapusData = (id) => {
    if (localStorage.userList && localStorage.id_data) {
        userList = JSON.parse(localStorage.getItem('userList'));
        idx_data = 0;
        for (i in userList) {
            if (userList[i].id_data == id) {
                userList.splice(idx_data, 1);
            }
            idx_data++;
        }
        localStorage.setItem('userList', JSON.stringify(userList));
        showData();
    }
}

const editData = (id) => {

    if (localStorage.userList && localStorage.id_data) {
        userList = JSON.parse(localStorage.getItem('userList'));
        let form = document.userInput
        idx_data = 0;
        for (i in userList) {
            if (userList[i].id_data == id) {
                form.name.value = userList[i].name
                form.address.value = userList[i].address
                userList.splice(idx_data, 1);
            }
            idx_data++;
        }
    }
    back();


}

function __init() {
    // pagination()
    // next()
    // prev()
    showData()
}
__init()