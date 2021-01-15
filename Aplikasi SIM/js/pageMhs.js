let dataNilai = JSON.parse(localStorage.getItem('dataNilaiMhs'));
// let idUser = JSON.parse(localStorage.getItem('idUser'));

const searchData = self => {
    const valueSearch = self.value.toLowerCase()
    console.log(valueSearch);


    const filteredData = userList.filter(value => {
        return value.name.toLowerCase().includes(valueSearch) || value.address.toLowerCase().includes(valueSearch);

    })

    showData(filteredData);
}

async function showNilai() {
    let nilaiMhs = JSON.parse(localStorage.getItem('dataNilaiMhs'));
    let idUser = JSON.parse(localStorage.getItem('idUser'));
    let dataShow = nilaiMhs
    console.log(nilaiMhs);

    const filteredData = await dataShow.filter(value => {
        return value.nim.includes(idUser)})
        console.log(filteredData);
        console.log(filteredData.length);
        console.log(filteredData[0].majors);


    const tbody = document.querySelector("table[type='listNilai'] tbody")


    let tr = ""
    for (let index = 0; index < filteredData.length; index++) {
        const mhs = filteredData[index];

        tr += `
            <tr>
                <td>${index + 1}</td>
                <td>${mhs.majors}</td>
                <td>${mhs.praktek}</td>
                <td>${mhs.uts}</td>
                <td>${mhs.uas}</td>
                <td>${mhs.seminar}</td>
                <td>${mhs.skripsi}</td>
                <td>${mhs.sidang}</td>
            </tr>
        `
    }
    tbody.innerHTML = tr
}