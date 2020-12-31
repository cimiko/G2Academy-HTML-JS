let userList = [];
let userData = {};
let currentPage = 0;

userData.name = "Administrator";
userData.gender = "Laki-Laki";
userData["place-dob"] = "Jakarta, 01 Januari 2001";
userData.hobby = ["Nonton Film", "Membaca", "Tidur"];
userData.alamat = "Jakarta"

console.log(userList);

for (let i = 0; i < 5; i++) {
    // add data to array at the end
    // userList.push(i * 2);
    userList.push(`Variable ke-${i}`)

    let test = "asdf"   //Local Variable
    var test2 = "Admin" //Global Variable
}

console.log(userList);

// Delete data from the end
// userList.pop();

console.log(userList);

// console.log(test);
// console.log(test2);

const pagination = () => {
    console.log("pagination");
    console.info("currentPage:", currentPage);
    console.warn("Value:", userList[currentPage]);
}

// add next index
const next = () => {
    if(currentPage == (userList.length - 1)){
        //currentPage = -1
        alert("Data Terakhir!!");
        //return;
    }else{
        currentPage += 1
        console.info("currentPage:", currentPage);
        console.warn("value:", userList[currentPage]);
    }
}

// add prev index
const prev = () => {
    if(currentPage == 0){
        alert("Data Pertama!!");
        return;
    }

    currentPage -= 1;
    console.info("currentPage", currentPage);
    console.warn("Value:", userList[currentPage]);
}

// function dijalankan duluan
const __init = () => {
    pagination()
    next()
    prev()
}
__init()