let parkingList = []; 
let gen = ["a","b","c","d","e","f","g","h"]
let rowPerPage = 5;
let maxButtonPage = 3;
// let date = new Date();
let park = JSON.parse(localStorage.getItem('parkingList'));
let generate = "";


const getDate = () => {
    let date = new Date();
    let hari = String(date.getDate()).padStart(2, '0');
    let bulan = String(date.getMonth()+1).padStart(2, '0');
    let tahun = date.getFullYear();
    let form = document.gateInForm

    // return `
    //     ${tahun}-${bulan}-${hari}
    // `

    return form.date.setAttribute("value", `${tahun}-${bulan}-${hari}`);

}

const getTime = () => {
    let date = new Date();
    let hours = String(date.getHours()).padStart(2, '0');
    let minute = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    // let miliSec = date.getMilliseconds()
    let form = document.gateInForm
    display_c();

    return form.time.setAttribute("value", `${hours}:${minute}:${seconds}`);
}

function display_c() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout('getTime()', refresh)
}

const gateInSave = () => {
    event.preventDefault()
    
    let date = new Date();
    let hours = String(date.getHours()).padStart(2, '0');
    let minute = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    let miliSec = date.getMilliseconds()

    let form = document.gateInForm
    let parkData = {}

    parkData.code = `${miliSec}${gen[Math.floor(Math.random() * gen.length)]}${gen[Math.floor(Math.random() * gen.length)]}${minute}${gen[Math.floor(Math.random() * gen.length)]}${gen[Math.floor(Math.random() * gen.length)]}${seconds}${gen[Math.floor(Math.random() * gen.length)]}${gen[Math.floor(Math.random() * gen.length)]}${hours}`
    parkData.vehicle = form.vehicle.value,
    parkData.date = form.date.value,
    parkData.time = form.time.value

    generate = parkData.code

    console.log("parkData:", parkData);

    parkingList.push(parkData);
    localStorage.setItem('parkingList', JSON.stringify(parkingList));


    showData();
    modal();
    form.reset();
}

function showHidePage() {
    document.querySelector(".gate-in").classList.toggle("hidden")
    document.querySelector(".showData").classList.toggle("hidden")
}

function back() {
    showHidePage()
    // document.getElementById('form-data').reset();
}
console.log(parkingList);
// const showData = () =>{

// }

// console.log(getDate());
// console.log(getTime());

// const test = () => {
//     event.preventDefault();
//     let date =  form.date.value
//     let time = form.time.value
//     let car = form.vehicle.value
    
//     console.log(date);
//     console.log(time);
//     console.log(car);
// }

function showData(page = 1) {
    let dataShow = parkingList

    const tbody = document.querySelector("table[type='listData'] tbody")
    const startLoop = (page - 1) * rowPerPage
    const totalData = startLoop + rowPerPage
    const endLoop = totalData > dataShow.length ? dataShow.length : totalData

    /**
     * 1 = 1[0] - 2[1] = (page - 1) * rowPerPage
     * 2 = 3[2] - 4[3] = 
     * 3 = 5[4] - 6[5]
     */

    console.log(dataShow);
    let tr = ""
    for (let index = startLoop; index < endLoop; index++) {
        const user = dataShow[index];
        console.log(user);

        tr += `
            <tr>
                <td>${index + 1}</td>
                <td>${user.code}</td>
                <td>${user.vehicle}</td>
                <td>${user.date}</td>
                <td>${user.time}</td>
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
    let totalButtonPage = Math.ceil(park.length / rowPerPage)

    if (page == 1 || page - devided < 1) {
        if (endButtonPage > totalButtonPage) {
            endButtonPage = totalButtonPage
        }

    } else if (page + devided > totalButtonPage) {
        startButtonPage = totalButtonPage + 1 - maxButtonPage
        endButtonPage = totalButtonPage
    } else {
        if (maxButtonPage % 2 == 0) {
            startButtonPage = page - devided
            endButtonPage = page + devided - 1
        } else {
            startButtonPage = page - devided
            endButtonPage = page + devided
        }
    }


    /**
     * 1 = 1, 2, 3 (1)
     * 2 = 1, 2, 3 (1 , )
     * 3 = 2, 3, 4
     * 4 = 3, 4, 5
     * 5 = 4, 5, 6
     * 6 = 4, 5, 6
     */

    console.log(endButtonPage);
    console.log(totalButtonPage);
    let divButtonPage = ""
    for (let start = startButtonPage; start <= endButtonPage; start++) {
        divButtonPage += `
            <div class="pagination-button" onclick="showData(${start})">${start}</div>
        `
    }
    divPagination.innerHTML = divButtonPage
}

const modal = () =>{
    let modal = document.querySelector("#myModal")
    let form = document.gateInForm

    document.querySelector("td[type='code']").innerHTML = generate
    document.querySelector("td[type='vehicle']").innerHTML =  form.vehicle.value
    document.querySelector("td[type='date']").innerHTML = form.date.value
    document.querySelector("td[type='time']").innerHTML = form.time.value

    modal.style.display = "block";
}

const closeModal = () => {
    let modal = document.querySelector("#myModal")
    // let span = document.getElementsByClassName("close")[0];

    modal.style.display = "none";
}
