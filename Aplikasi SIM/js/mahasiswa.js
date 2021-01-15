let dataMhs = []
let mhsData = JSON.parse(localStorage.getItem('dataMhs'));
console.log(mhsData);
let data;

for (let i = 0; i < mhsData.length; i++) {
    data = {
    nim : mhsData[i].nim,
        name : mhsData[i].name,
        gender : mhsData[i].gender,
        religion : mhsData[i].religion,
        birthPlace : mhsData[i].birthPlace,
        birthDate : mhsData[i].birthDate,
        faculty : mhsData[i].faculty,
        majors : mhsData[i].majors}
        dataMhs.push(data)
}


let idxMhs = 0;
let rowPerPage = 5;
let maxButtonPage = 3;

const saveMhs = () => {
    event.preventDefault();
    let mhsData = JSON.parse(localStorage.getItem('dataMhs'));
    let form = document.mhsForm
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
        if (form.faculty.value == idFaculty[i].faculty) {
            idFac = `0${i + 1}`;
            break;
        } else {
            idFac = 0;
        }
    }

    console.log(data);

    let dataSiswa = {};

    dataSiswa.nim = `${year}-${idFac}-${mhsData.length += 1}`,
        dataSiswa.name = form.name.value,
        dataSiswa.gender = form.gender.value,
        dataSiswa.religion = form.religion.value,
        dataSiswa.birthPlace = form.birthPlace.value,
        dataSiswa.birthDate = form.birthDate.value,
        dataSiswa.faculty = form.faculty.value,
        dataSiswa.majors = form.majors.value

    let allData = dataSiswa
    console.log(allData);
    dataMhs.push(allData)
    localStorage.setItem("dataMhs", JSON.stringify(dataMhs));

    showMhs();
    form.reset();

    console.log(idFac);
    console.log(dataSiswa);
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

function showMhs(page = 1) {
    let mhsData = JSON.parse(localStorage.getItem('dataMhs'));
    let dataShow = mhsData

    const tbody = document.querySelector("table[type='listData'] tbody")
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
                <td>${mhs.nim}</td>
                <td>${mhs.name}</td>
                <td>${mhs.gender}</td>
                <td>${mhs.faculty}</td>
                <td>${mhs.majors}</td>
            </tr>
        `
    }
    tbody.innerHTML = tr

    // renderPagination(page)
}