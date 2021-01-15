let dataNilaiMhs = []
let nilaiData = JSON.parse(localStorage.getItem('dataNilaiMhs'));
let rowPerPage = 5;
let maxButtonPage = 3;

let data;

for (let i = 0; i < nilaiData.length; i++) {
    data = {
    nim : nilaiData[i].nim,
        name : nilaiData[i].name,
        faculty : nilaiData[i].faculty,
        majors : nilaiData[i].majors,
        praktek : nilaiData[i].praktek,
        uts : nilaiData[i].uts,
        uas : nilaiData[i].uas,
        seminar : nilaiData[i].seminar,
        skripsi : nilaiData[i].skripsi,
        sidang : nilaiData[i].sidang
    }
        dataNilaiMhs.push(data)
}

function showNilai(page = 1) {
    let mhsData = JSON.parse(localStorage.getItem('dataMhs'));
    let nilaiMhs = JSON.parse(localStorage.getItem('dataNilaiMhs'));
    let dataShow = nilaiMhs
    console.log(nilaiMhs);

    const tbody = document.querySelector("table[type='listNilai'] tbody")
    const startLoop = (page - 1) * rowPerPage
    const totalData = startLoop + rowPerPage
    const endLoop = totalData > dataShow.length ? dataShow.length : totalData


    let tr = ""
    for (let index = startLoop; index < endLoop; index++) {
        const mhs = dataShow[index];

        tr += `
            <tr>
                <td>${index + 1}</td>
                <td>${mhs.nim}</td>
                <td>${mhs.name}</td>
                <td>${mhs.faculty}</td>
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

    // renderPagination(page)
}

async function showDataMhs(page = 1) {
    let mhsData = JSON.parse(localStorage.getItem('dataMhs'));
    let nilaiMhs = JSON.parse(localStorage.getItem('dataNilaiMhs'));
    let dataShow = mhsData

    const tbody = document.querySelector("table[type='listMhs'] tbody")
    const startLoop = (page - 1) * rowPerPage
    const totalData = startLoop + rowPerPage
    const endLoop = totalData > dataShow.length ? dataShow.length : totalData


    // console.log(dataShow);
    let tr = ""
    for (let index = startLoop; index < endLoop; index++) {
        const mhs = dataShow[index];
        // console.log(mhs);
        let findGrade = await nilaiMhs.find(value => value.nim == mhs.nim)
        // console.log("test",findGrade);
        // console.log(findGrade.praktek);

        // tr += `
        //     <tr>
        //         <td>${index + 1}</td>
        //         <td>${mhs.nim}</td>
        //         <td>${mhs.name}</td>
        //         <td>${mhs.faculty}</td>
        //         <td>${mhs.majors}</td>
        //         <td>${findGrade.praktek}</td>
        //         <td>${findGrade.uts}</td>
        //         <td>${findGrade.uas}</td>
        //         <td>${findGrade.seminar}</td>
        //         <td>${findGrade.skripsi}</td>
        //         <td>${findGrade.sidang}</td>
        //     </tr>
        // `

        tr += `
            <tr>
                <td>${index + 1}</td>
                <td>${mhs.nim}</td>
                <td>${mhs.name}</td>
                <td>${mhs.faculty}</td>
                <td>${mhs.majors}</td>
            </tr>
        `
    }
    tbody.innerHTML = tr

    // renderPagination(page)
}

const find = (self) => {
    let mhs = JSON.parse(localStorage.getItem('dataMhs'));
    let form = document.nilaiForm
    console.log(mhs);

    const valueSearch = self.value;
    console.log(valueSearch);

    const findArr = mhs.find(value => value.nim == valueSearch)
    console.log(findArr);

    form.name.setAttribute("value", findArr.name)
    form.faculty.setAttribute("value", findArr.faculty)
    form.majors.setAttribute("value", findArr.majors)
}

const saveNilai = () => {
    event.preventDefault()

    let form = document.nilaiForm

    dataNilai = {}

    dataNilai.nim = form.nim.value
    dataNilai.name = form.name.value
    dataNilai.faculty = form.faculty.value
    dataNilai.majors = form.majors.value
    dataNilai.praktek = form.praktek.value
    dataNilai.uts = form.uts.value
    dataNilai.uas = form.uas.value
    dataNilai.seminar = form.seminar.value
    dataNilai.skripsi = form.skripsi.value
    dataNilai.sidang = form.sidang.value

    dataNilaiMhs.push(dataNilai)
    localStorage.setItem("dataNilaiMhs", JSON.stringify(dataNilaiMhs));

    showNilai();
    form.reset()
}

const editData = (id) => {

    if (localStorage.userList) {
        userList = JSON.parse(localStorage.getItem('userList'));
        let form = document.userInput
        idx_data = 0;
        for (i in userList) {
            if (userList[i].id_data == id) {
                form.name.value = userList[i].name
                form.address.value = userList[i].address
                userList.splice(idx_data, 1);
            }
            idx_data++;
        }
    }
    edit();


}