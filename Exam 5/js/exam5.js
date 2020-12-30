dataPerson = [];
id_data = 0;

const saveData = () => {
    event.preventDefault()
    nama = document.querySelector('#name').value;
    alamat = document.querySelector('#address').value;
    kelamin = document.querySelector(".form-check input[name='gender']:checked").value;
    hobi = document.querySelector("input[name='hobby']:checked").value;
    agama = document.querySelector('#religion').value;

    console.log(hobi);

    id_data += 1;
    dataPerson.push({
        'id_data': id_data,
        'nama': nama,
        'alamat': alamat,
        'kelamin': kelamin,
        'hobi': hobi,
        'agama': agama
    })

    localStorage.setItem('dataPerson', JSON.stringify(dataPerson));
    localStorage.setItem('id_data', id_data);
    document.getElementById('form-data').reset();

    document.body.reset
    return false;
}

const daftarData = () => {
    if (localStorage.dataPerson && localStorage.id_data) {

        dataPerson = JSON.parse(localStorage.getItem('dataPerson'));

        var data_app = "";

        if (dataPerson.length > 0) {
            data_app = '<table class="table">';
            data_app += '<thead>' +
                '<th>ID</th>' +
                '<th>Nama</th>' +
                '<th>Alamat</th>' +
                '<th>Jenis Kelamin</th>' +
                '<th>Hobby</th>' +
                '<th>Agama</th>' +
                '<th colspan="2">aksi</th>' +
                '</thead><tbody>';

            for (i in dataPerson) {
                data_app += '<tr>';
                data_app += '<td>' + dataPerson[i].id_data + ' </td>' +
                    '<td>' + dataPerson[i].nama + ' </td>' +
                    '<td>' + dataPerson[i].alamat + ' </td>' +
                    '<td>' + dataPerson[i].kelamin + ' </td>' +
                    '<td>' + dataPerson[i].hobi + ' </td>' +
                    '<td>' + dataPerson[i].agama + ' </td>' +
                    '<td><button class="btn btn-danger btn-small" onclick="hapusData(' + dataPerson[i].id_data + ')">Hapus</button></td>' +
                    '<td><button class="btn btn-warning btn-small" onclick="editData(' + dataPerson[i].id_data + ')">Edit</button></td>';
                // '<td><a class="btn btn-danger btn-small" href="javascript:void(0)" onclick="hapusData(\'' + dataPerson[i].id_data + '\')">Hapus</a></td>' +
                // '<td><a class="btn btn-warning btn-small" href="javascript:void(0)" onclick="editData(\'' + dataPerson[i].id_data + '\')">Edit</a></td>';
                data_app += '</tr>';

            }
            data_app += '</tbody></table>';

        } else {
            data_app = "Tidak ada data...";
        }


        document.querySelector('#list-data').innerHTML = data_app;
        console.log(data_app);
        //    document.querySelector('#list-data').hide();
        //    document.querySelector('#list-data').fadeIn(100);
    }
}

const editData = (id) => {
    let save = document.querySelector('.formSave').classList
    let edit = document.querySelector('.formEdit').classList
    save.add('hidden')
    edit.remove('hidden')

    if (localStorage.dataPerson && localStorage.id_data) {
        dataPerson = JSON.parse(localStorage.getItem('dataPerson'));
        idx_data = 0;
        for (i in dataPerson) {
            if (dataPerson[i].id_data == id) {
                // document.querySelector('#editId').value(dataPerson[i].id_data);
                // document.querySelector('#editNama').value(dataPerson[i].nama);
                // document.querySelector('#editAlamat').value(dataPerson[i].alamat);
                // document.querySelector('#editKelamin').value(dataPerson[i].kelamin);
                // document.querySelector('.editHobby').value(dataPerson[i].hobby);
                // document.querySelector('#editAgama').value(dataPerson[i].agama);
                // dataPerson.splice(idx_data, 1);
                document.querySelector('#editId').setAttribute("value", dataPerson[i].id_data)
                document.querySelector('#editNama').setAttribute("value", dataPerson[i].nama)
                document.querySelector('#editAlamat').setAttribute("value", dataPerson[i].alamat)
                document.querySelector('.editKelamin').setAttribute("value", dataPerson[i].kelamin)
                document.querySelector('.editHobby').setAttribute("value", dataPerson[i].hobby)
                document.querySelector('#editAgama').setAttribute("value", dataPerson[i].agama)
                dataPerson.splice(idx_data, 1);

                // $("#editId").val(dataPerson[i].id_data);
                // $("#editNama").val(dataPerson[i].nama);
                // $("#editAlamat").val(dataPerson[i].alamat);
                // $(".editKelamin").val(dataPerson[i].kelamin);
                // $(".editHobby").val(dataPerson[i].hobby);
                // $("#editAgama").val(dataPerson[i].agama);
                // dataPerson.splice(idx_data, 1);
            }
            idx_data++;
        }

        // let save = document.querySelector('.formSave').classList
        // let edit = document.querySelector('.formEdit').classList



    }

}

const simpanEditData = () => {
    event.preventDefault()

    id_data = document.querySelector('#editId').value;
    nama = document.querySelector('#editNama').value;
    alamat = document.querySelector('#editAlamat').value;
    kelamin = document.querySelector(".form-check input[name='editKelamin']:checked").value;
    hobi = document.querySelector(".form-check input[name='editHobby']:checked").value;
    agama = document.querySelector('#editAgama').value;

    dataPerson.push({
        'id_data': id_data,
        'nama': nama,
        'alamat': alamat,
        'kelamin': kelamin,
        'hobi': hobi,
        'agama': agama
    })
    localStorage.setItem('dataPerson', JSON.stringify(dataPerson));
    document.getElementById('eform-data').reset();

    let save = document.querySelector('.formSave').classList
    let edit = document.querySelector('.formEdit').classList
    edit.add('hidden')
    save.remove('hidden')

    return false;
}

const hapusData = (id) => {
    if (localStorage.dataPerson && localStorage.id_data) {
        dataPerson = JSON.parse(localStorage.getItem('dataPerson'));
        idx_data = 0;
        for (i in dataPerson) {
            if (dataPerson[i].id_data == id) {
                dataPerson.splice(idx_data, 1);
            }
            idx_data++;
        }
        localStorage.setItem('dataPerson', JSON.stringify(dataPerson));
        daftarData();
    }
}

const hobby = () => {
    let checkbox = document.querySelectorAll("input.hobby:checked");
    let hobi = [];
    for (i = 0; i < checkbox.length; i++) {
        hobi = hobi + checkbox[i].value + ", ";
    }
}

let checkbox = document.querySelectorAll("input.hobby");

console.log(hobby());
console.log(checkbox);