let userList = [{
    name: "Administrator",
    gender: "Laki-Laki",
    hobby: "Berenang, Badminton",
    "place-dob": "Jakarta, 2001-01-01",
    address: "Jakarta"
}];
let currentPage = 0;

console.log(userList);

const pagination = () => {
    console.log("pagination");
    console.info("currentPage:", currentPage);
    console.warn("Value:", userList[currentPage]);
}

// save form
const save = () => {
    event.preventDefault();

    let form = document.userInput
    let userData = {}

    console.log(form.gender.children);
    userData.name = form.name.value
    userData.gender = getSelected("gender")
    userData.hobby = getSelectedAll("hobby")
    userData["place-dob"] = form.place.value + "," + form.dob.value;
    userData.address = form.address.value

    console.log("userData:", userData);

    userList.push(userData)

    showHidePage()
}

const showHidePage = () => {
    document.querySelector(".inputData").classList.toggle("hidden")
    document.querySelector(".showData").classList.toggle("hidden")
}

function back() {
    showHidePage()
}

// get single selected
const getSelected = (name) => {

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
const next = () => {
    console.log("next");
    if (currentPage == (userList.length - 1)) {
        //currentPage = -1
        alert("Data Terakhir!!");
        //return;
    } else {
        currentPage += 1
        console.info("currentPage:", currentPage);
        console.warn("value:", userList[currentPage]);

        showData()
    }
}

// add prev index
const prev = () => {
    console.log("prev");
    if (currentPage == 0) {
        alert("Data Pertama!!");
        return;
    }

    currentPage -= 1;
    console.info("currentPage", currentPage);
    console.warn("Value:", userList[currentPage]);

    showData();
}

const showData = () => {
    let userData = userList[currentPage]
    document.querySelector("td[type='name']").innerHTML = userData.name
    document.querySelector("td[type='gender']").innerHTML =  userData.gender
    document.querySelector("td[type='place-dob']").innerHTML = userData["place-dob"]
    document.querySelector("td[type='hobby']").innerHTML = userData.hobby
    document.querySelector("td[type='address']").innerHTML = userData.address
}

// function dijalankan duluan
const __init = () => {
    // pagination()
    // next()
    // prev()
    showData()
}
__init()