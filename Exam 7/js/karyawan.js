let rowPerPage = 5;
let maxButtonPage = 3;
let userList = JSON.parse(localStorage.getItem('userList'));

function showData(page = 1) {
    const tbody = document.querySelector("table[type='listData'] tbody")
    const startLoop = (page - 1) * rowPerPage;
    const totalData = startLoop + rowPerPage;
    const endLoop = totalData > userList.length ? userList.length : totalData
    console.log(rowPerPage);

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
                <td>${user.address}</td>
                <td>${user.gender}</td>
                <td>${user.hobby}</td>
                <td>${user.religion}</td>
            </tr>
        `
    }
    tbody.innerHTML = tr

    renderPagination(page)
}

function renderPagination(page) {

    const divPagination = document.querySelector("ul.pagination")
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
            <li class="page-item"><a class="page-link" onclick="showData(${start})">${start}</a></li>
        `
    }
    divPagination.innerHTML = divButtonPage
}