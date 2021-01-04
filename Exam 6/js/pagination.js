
const dummy = () => {
    const alamat = ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi", "Serang"]
    const gender = ["Laki-Laki", "Perempuan"]
    const hobby = ["Membaca", "Berenang", "Badminton", "Mendengarkan Music"]
    const agama = ["Buddha", "Hindu", "Islam", "Kristen", "Khatolik"]

    for (let i = 1; i <= 15; i++) {
        currentPage += 1;
        if (i % 2 == 0) {
            let userData = {}

            userData.id_data = currentPage
            userData.name = `Person ${i}`
            userData.address = alamat[Math.floor(Math.random() * alamat.length)]
            userData.gender = gender[Math.floor(Math.random() * gender.length)]
            userData.hobby = `${hobby[Math.floor(Math.random() * hobby.length)]}, ${hobby[Math.floor(Math.random() * hobby.length)]}`
            userData.religion = agama[Math.floor(Math.random() * agama.length)];
            userList.push(userData);
            localStorage.setItem('userList', JSON.stringify(userList));
        } else {
            let userData = {}
            userData.id_data = currentPage
            userData.name = `Person ${i}`
            userData.address = alamat[Math.floor(Math.random() * alamat.length)]
            userData.gender = gender[Math.floor(Math.random() * gender.length)]
            userData.hobby = `${hobby[Math.floor(Math.random() * hobby.length)]}, ${hobby[Math.floor(Math.random() * hobby.length)]}`
            userData.religion = agama[Math.floor(Math.random() * agama.length)];;
            userList.push(userData);
            localStorage.setItem('userList', JSON.stringify(userList));
        }
        showData();
    }
}
dummy()

const pagination = () => {
    for (let i = 0; i < userList.length; i++) {
        if (i % 5 == 0) {
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
                <td><button class="btn btn-danger btn-small" onclick="hapusData(${value.id_data})">Hapus</button></td>
                <td><button class="btn btn-warning btn-small" onclick="editData(${value.id_data})">Edit</button></td>
            <tr>
        `
            })
            table.innerHTML = listData.join("");
        } else {

        }
    }
}