const searchData = self => {
    const valueSearch = self.value.toLowerCase()
    console.log(valueSearch);


    const filteredData = userList.filter(value => {
        return value.name.toLowerCase().includes(valueSearch) || value.address.toLowerCase().includes(valueSearch);

    })

    showData(filteredData);
}

// const showData = (dataShow = userList) => {
//     const table = getEl("table[type=listData] tbody")

//     const listData = dataShow.map((value, index) => {
//         return `
//             <tr>
//                 <td>${index + 1}</td>
//                 <td>${value.name}</td>
//                 <td>${value.address}</td>
//                 <td>${value.gender}</td>
//                 <td>${value.hobby}</td>
//                 <td>${value.religion}</td>
//                 <td><button class="btn btn-danger btn-small" onclick="hapusData(${value.id_data})">Hapus</button></td>
//                 <td><button class="btn btn-warning btn-small" onclick="editData(${value.id_data})">Edit</button></td>
//             <tr>
//         `
//     })
//     table.innerHTML = listData.join("");
// }

const getEl = el => {
    return document.querySelector(el);
}