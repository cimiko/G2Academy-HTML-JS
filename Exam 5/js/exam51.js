let userList = [{
    name: "Administrator",
    gender: "Laki-laki",
    hobby: "Berenang, Badminton",
    "place-birth": "Jakarta, 2001-01-01",
    address: "Jakarta"
}]
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

    console.log(form.gender.children);
    userData.name = form.name.value
    userData.gender = getSelected("gender")
    userData.hobby = getSelectedAll("hobby")
    userData["place-birth"] = form.place.value + ", " + form.dob.value
    userData.address = form.address.value

    console.log("userdata:", userData);

    userList.push(userData)
    localStorage.setItem('userList', JSON.stringify(userList));

    // showHidePage()
    document.getElementById('form-data').reset();
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

function showData() {
    let userData = userList[currentPage]
    document.querySelector("td[type='name']").innerHTML = userData.name
    document.querySelector("td[type='gender']").innerHTML = userData.gender
    document.querySelector("td[type='place-birth']").innerHTML = userData["place-birth"]
    document.querySelector("td[type='hobby']").innerHTML = userData.hobby
    document.querySelector("td[type='address']").innerHTML = userData.address
}

function __init() {
    // pagination()
    // next()
    // prev()
    // showData()
}
__init()