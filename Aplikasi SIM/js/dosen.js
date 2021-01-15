let dataDsn = []
let dsnData = JSON.parse(localStorage.getItem('dataDsn'));
console.log(dsnData);
let dataD;

for (let i = 0; i < dsnData.length; i++) {
    dataD = {
    nid : dsnData[i].nid,
        name : dsnData[i].name,
        gender : dsnData[i].gender,
        religion : dsnData[i].religion,
        birthPlace : dsnData[i].birthPlace,
        birthDate : dsnData[i].birthDate,
        faculty : dsnData[i].faculty,
        majors : dsnData[i].majors}
        dataDsn.push(dataD)
}


let idxDsn = 0;

const saveDsn = () => {
    event.preventDefault();
    let dsnData = JSON.parse(localStorage.getItem('dataDsn'));
    let form = document.dsnForm
    const year = new Date().getFullYear()

    let idFaculty = [
        { faculty: "Agriculture" },
        { faculty: "Veterinary Medicine" },
        { faculty: "Fisheries and Marine Science" },
        { faculty: "Animal Science" },
        { faculty: "Forestry and Environment" },
        { faculty: "Agricultural Technology" },
        { faculty: "Mathematics and Natural Sciences" },
        { faculty: "Economics and Management" },
        { faculty: "Human Ecology" }
    ]

    let idFac = 0

    for (let i = 0; i < idFaculty.length; i++) {
        if (form.facultyDsn.value == idFaculty[i].faculty) {
            idFac = `700${i + 1}`;
            break;
        } else {
            idFac = 0;
        }
    }

    let dataDosen = {};

    dataDosen.nid = `${year}-${idFac}-${ 1}`,
    dataDosen.name = form.nameDsn.value,
    dataDosen.gender = form.genderDsn.value,
    dataDosen.religion = form.religionDsn.value,
    dataDosen.birthPlace = form.birthPlaceDsn.value,
    dataDosen.birthDate = form.birthDateDsn.value,
    dataDosen.faculty = form.facultyDsn.value,
    dataDosen.majors = form.majorsDsn.value

    dataDsn.push(dataDosen)
    localStorage.setItem("dataDsn", JSON.stringify(dataDsn));

    showDsn();

    console.log(idFac);
    console.log(dataDosen);
    form.reset();
}

// const showMhs = (dataShow = mhsData) => {
//     let form = document.querySelector('table[type=listData] tbody')

//     const listData = dataShow.map((value, index) => {
//         return `
//         <tr>
//             <td>${index + 1}</td>
//             <td>${value.nim}</td>
//             <td>${value.name}</td>
//             <td>${value.gender}</td>
//             <td>${value.faculty}</td>
//             <td>${value.majors}</td>
//         <tr>
//         `
//     })
//     form.innerHTML = listData.join("");
// }

function showDsn(page = 1) {
    let dsnData = JSON.parse(localStorage.getItem('dataDsn'));
    let dataShow = dsnData

    const tbody = document.querySelector("table[type='listDsn'] tbody")
    const startLoop = (page - 1) * rowPerPage
    const totalData = startLoop + rowPerPage
    const endLoop = totalData > dataShow.length ? dataShow.length : totalData

    /**
     * 1 = 1[0] - 2[1] = (page - 1) * rowPerPage
     * 2 = 3[2] - 4[3] = 
     * 3 = 5[4] - 6[5]
     */

    // console.log(dataShow);
    let tr = ""
    for (let index = startLoop; index < endLoop; index++) {
        const mhs = dataShow[index];
        // console.log(mhs);

        tr += `
            <tr>
                <td>${index + 1}</td>
                <td>${mhs.nid}</td>
                <td>${mhs.name}</td>
                <td>${mhs.gender}</td>
                <td>${mhs.faculty}</td>
                <td>${mhs.majors}</td>
                <td><button class="btn btn-danger btn-small" onclick="hapusDataDsn('${mhs.nid}')">Hapus</button></td>
                <td><button class="btn btn-warning btn-small" onclick="editDataDsn('${mhs.nid}')">Edit</button></td>
            </tr>
        `
    }
    tbody.innerHTML = tr

    // renderPagination(page)
}

const hapusDataDsn = (id) => {
    if (localStorage.dataDsn) {
        dsnList = JSON.parse(localStorage.getItem('dataDsn'));
        idx_data = 0;
        for (i in dsnList) {
            if (dsnList[i].nid == id) {
                dsnList.splice(idx_data, 1);
                break;
            }
            idx_data++;
        }
        localStorage.setItem('dataDsn', JSON.stringify(dsnList));
        showDsn();
    }
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