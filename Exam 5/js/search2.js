const searchData = self => {
    const valueSearch = self.value


    const filteredData = dataPerson.filter(value => {
        return value.name.includes(valueSearch) || value.address.includes(valueSearch);

    })

    showData(filteredData);
}

const showData = (dataShow = dataPerson) => {
    const table = getEl("table[type=listData] tbody")

    const listData = dataShow.map((value, index) => {
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${value.name}</td>
                <td>${value.address}</td>
                <td>${value.gender}</td>
                <td>${value.hobby}</td>
                <td>${value.religion}</td>
            <tr>
        `
    })
    table.innerHTML = listData.join("");
}

const getEl = el => {
    return document.querySelector(el);
}