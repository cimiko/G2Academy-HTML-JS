parkingOut = []
let rowPerPage = 5;
let maxButtonPage = 3;

function showData(page = 1) {
    let dataShow = JSON.parse(localStorage.getItem('parkingOut'));

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
                <td>${user.dateIn}</td>
                <td>${user.timeIn}</td>
                <td>${user.dateOut}</td>
                <td>${user.timeOut}</td>
                <td>${user.price}</td>
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

const getDate = () => {
    let date = new Date();
    let hari = String(date.getDate()).padStart(2, '0');
    let bulan = String(date.getMonth() + 1).padStart(2, '0');
    let tahun = date.getFullYear();
    let form = document.gateOutForm

    // return `
    //     ${tahun}-${bulan}-${hari}
    // `

    return form.dateOut.setAttribute("value", `${tahun}-${bulan}-${hari}`);

}

const getTime = () => {
    let date = new Date();
    let hours = String(date.getHours()).padStart(2, '0');
    let minute = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    // let miliSec = date.getMilliseconds()
    let form = document.gateOutForm
    display_c();

    return form.timeOut.setAttribute("value", `${hours}:${minute}:${seconds}`);
}

function display_c() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout('getTime()', refresh)
}


const find = (self) => {
    park = JSON.parse(localStorage.getItem('parkingList'));
    let form = document.gateOutForm
    let totalPrice;
    let dateOut = new Date();
    let h = dateOut.getDate();
    let m = dateOut.getMonth() + 1;
    let y = dateOut.getFullYear();
    let hh = dateOut.getHours();
    let mm = dateOut.getMinutes();
    let ss = dateOut.getSeconds();

    const valueSearch = self.value.toLowerCase()
    console.log(valueSearch);


    const findArr = park.find(value => value.code == valueSearch)
    console.log(findArr);

    form.kendaraan.setAttribute("value", findArr.vehicle)
    form.dateIn.setAttribute("value", findArr.date)
    form.timeIn.setAttribute("value", findArr.time)
    

    let kendaraan = findArr.vehicle
    let date = findArr.date
    let time = findArr.time
    let yearOut = y-parseInt(date.substring(0, 4));
    let monthOut = m-parseInt(date.substring(5, 7));
    let dayOut = h-parseInt(date.substring(8, 10));
    let hoursOut = hh-parseInt(time.substring(0, 2));
    let minuteOut = mm-parseInt(time.substring(3, 5));
    let dateToOut = yearOut + monthOut + dayOut
    let timeToOut = hoursOut + minuteOut

    console.log(dateToOut);
    console.log(timeToOut);

    if ((kendaraan == "mobil") && timeToOut > 1) {
        let jamLanjut = timeToOut - 1;

        totalPrice = (jamLanjut * 1500) + 3000
    } else if ((kendaraan == "mobil") && timeToOut <= 1) {
        totalPrice = 3000
    }else if ((kendaraan == "motor") && timeToOut <= 1) {
        totalPrice = 2000
    }else{
        let jamLanjut = timeToOut - 1;

        totalPrice = (jamLanjut * 1000) + 2000        
    }

    console.log(totalPrice);
    form.price.setAttribute("value", `Rp.${totalPrice}`)

    document.querySelector("#priceTotal").innerHTML = `Rp.${totalPrice}`

}

const gateOutSave = () => {
    event.preventDefault()

    let form = document.gateOutForm
    let parkOut = {}

    parkOut.code = form.code.value
    parkOut.vehicle = form.kendaraan.value,
    parkOut.dateIn = form.dateIn.value,
    parkOut.timeIn = form.timeIn.value,
    parkOut.dateOut = form.dateOut.value,
    parkOut.timeOut = form.timeOut.value,
    parkOut.price = form.price.value

    console.log("parkOut:", parkOut);

    parkingOut.push(parkOut);
    localStorage.setItem('parkingOut', JSON.stringify(parkingOut));

    hapusData(parkOut.code);

    showData();
    modal();
    form.reset();
}

const hapusData = (code) => {
    if (localStorage.parkingOut) {
        park = JSON.parse(localStorage.getItem('parkingList'));
        // parkList = JSON.parse(localStorage.getItem('parkingOut'));
        idx_data = 0;
        for (i in park) {
            if (park[i].code == code) {
                park.splice(idx_data, 1);
            }
            idx_data++;
        }
        localStorage.setItem('parkingList', JSON.stringify(park));
        // showData();
    }
}

function showHidePage() {
    document.querySelector(".gateOutPage").classList.toggle("hidden")
    document.querySelector(".showData").classList.toggle("hidden")
}

function back() {
    showHidePage()
    // document.getElementById('form-data').reset();
}

const modal = () =>{
    let modal = document.querySelector("#myModal")
    let form = document.gateOutForm

    document.querySelector("td[type='code']").innerHTML = form.code.value
    document.querySelector("td[type='vehicle']").innerHTML =  form.kendaraan.value
    document.querySelector("td[type='dateIn']").innerHTML = form.dateIn.value
    document.querySelector("td[type='timeIn']").innerHTML = form.timeIn.value
    document.querySelector("td[type='dateOut']").innerHTML = form.dateOut.value
    document.querySelector("td[type='timeOut']").innerHTML = form.timeOut.value
    document.querySelector("td[type='price']").innerHTML = form.price.value

    modal.style.display = "block";
}

const closeModal = () => {
    let modal = document.querySelector("#myModal")
    // let span = document.getElementsByClassName("close")[0];

    modal.style.display = "none";
}
