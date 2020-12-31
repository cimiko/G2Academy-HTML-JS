let userList = [{
    name: "Administrator",
    gender: "Laki-Laki",
    hobby: "Berenang, Badminton",
    "place-dob": "Jakarta, 2001-01-01",
    address: "Jakarta"
}];
// let userData = {};
let currentPage = 0;

// userData.name = "Administrator";
// userData.gender = "Laki-Laki";
// userData["place-dob"] = "Jakarta, 01 Januari 2001";
// userData.hobby = ["Nonton Film", "Membaca", "Tidur"];
// userData.alamat = "Jakarta"

console.log(userList);

// for (let i = 0; i < 5; i++) {
//     // add data to array at the end
//     // userList.push(i * 2);
//     userList.push(`Variable ke-${i}`)

//     let test = "asdf"   //Local Variable
//     var test2 = "Admin" //Global Variable
// }

console.log(userList);

// Delete data from the end
// userList.pop();

console.log(userList);

// console.log(test);
// console.log(test2);

const pagination = () => {
    // console.log("params:", params);
    console.log("pagination");
    console.info("currentPage:", currentPage);
    console.warn("Value:", userList[currentPage]);
}

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
    // id = #
    // class = .
    // tag = nama_tag
    // attribute = [nam_attribute]
    // tag + type = input[type="date"]

    // let nama = "nama: " + name
    // let nama2 = `nama2: ${name}`

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
        // let userData = userList[currentPage]
        // document.querySelector("td[type='name']").innerHTML = userData.name
        // document.querySelector("td[type='gender']").innerHTML = userData.gender
        // document.querySelector("td[type='place-dob']").innerHTML = userData["place-dob"]
        // document.querySelector("td[type='hobby']").innerHTML = userData.hobby
        // document.querySelector("td[type='address']").innerHTML = userData.address
    }
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(json => console.log("json:", json))
}

// add prev index
const prev = async () => {
    console.log("prev");
    if (currentPage == 0) {
        alert("Data Pertama!!");
        return;
    }

    // currentPage -= 1;
    currentPage = await - 1;
    console.info("currentPage", currentPage);
    console.warn("Value:", userList[currentPage]);
}

const showData = () => {
    let userData = userList[currentPage]
    document.querySelector("td[type='name']").innerHTML = userData.name
    document.querySelector("td[type='gender']").innerHTML =  userData.gender
    document.querySelector("td[type='place-dob]").innerHTML = userData["place-dob"]
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