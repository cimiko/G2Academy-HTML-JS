let park = JSON.parse(localStorage.getItem('parkingList'));
const searchData = self => {
    const valueSearch = self.value.toLowerCase()
    console.log(valueSearch);


    const filteredData = park.filter(value => {
        return value.name.toLowerCase().includes(valueSearch) || value.address.toLowerCase().includes(valueSearch);

    })

    showData(filteredData);
}

// const showData = (dataShow = park) => {
//     const table = getEl("table[type=listData] tbody")

//     const listData = dataShow.map((value, index) => {
//         return `
//             <tr>
//                 <td>${index + 1}</td>
//                 <td>${value.code}</td>
//                 <td>${value.vehicle}</td>
//                 <td>${value.date}</td>
//                 <td>${value.time}</td>
//             <tr>
//         `
//     })
//     table.innerHTML = listData.join("");
// }

// const showData = () => {
//     const table = getEl("table[type=listData] tbody")
//     let data = "";

//     for (let i = 0; i < park.length; i++) {
//         data+= `
//             <tr>
//                 <td>${i + 1}</td>
//                 <td>${park[i].code}</td>
//                 <td>${park[i].vehicle}</td>
//                 <td>${park[i].date}</td>
//                 <td>${park[i].time}</td>
//             <tr>
//         `
//     }
// }

console.log(park);

const getEl = el => {
    return document.querySelector(el);
}