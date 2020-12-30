let globalData = [];

const saveData = () => {
    event.preventDefault()

    const form = document.inputData;

    globalData.push({
        name: form.name.value,
        address: form.address.value

    })

    showData()

    form.reset()
}

const showData = (dataShow = globalData) => {
    const table = getEl("table[type=listData] tbody")

    const listData = dataShow.map((value, index) => {
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${value.name}</td>
                <td>${value.address}</td>
            <tr>
        `
    })
    table.innerHTML = listData.join("");
}

const searchData = self => {
    const valueSearch = self.value

    const filteredData = globalData.filter(value => {
        return value.name.includes(valueSearch) || value.address.includes(valueSearch);

    })

    showData(filteredData);
}

const getEl = el => {
    return document.querySelector(el);
}