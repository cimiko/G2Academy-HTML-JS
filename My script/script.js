let dataPerson = [];
let id_data = 0;

const saveData = () => {
    event.preventDefault();

    nama = document.querySelector('#name').value;
    alamat = document.querySelector('#address').value;
    kelamin = document.querySelector('#gender').value;
    hobby = document.querySelector('.hobby').value;
    agama = document.querySelector('#religion').value;

    id_data++;
    dataPerson.push({ 
        'id_data': id_data, 
        'nama': nama, 
        'alamat': alamat, 
        'kelamin': kelamin,
        'hobby': hobby,
        'agama': agama });
    localStorage.setItem('dataPerson', JSON.stringify(dataPerson));
    localStorage.setItem('id_data', id_data);
    document.getElementById('inputForm').reset();
    // gantiMenu('list-data');

    return false;
}

function daftarData(){
    if (localStorage.dataPerson && localStorage.id_data){
    
        dataPerson = JSON.parse(localStorage.getItem('dataPerson'));
       
        var data_app = "";
        
        if (dataPerson.length > 0){
            data_app = '<table class="table">';
            data_app += '<thead>'+
                                '<th>ID</th>'+
                                '<th>Nama</th>'+
                                '<th>Alamat</th>'+
                                '<th>Jenis Kelamin</th>'+
                                '<th>Hobby</th>'+
                                '<th>Agama</th>'+
                                '<th>aksi</th>'+
                                '<th>aksi 2</th>'+
                              '</thead><tbody>';
                              
            for (i in dataPerson){
                data_app += '<tr>';
                data_app += '<td>'+ dataPerson[i].id_data + ' </td>'+
                                  '<td>'+ dataPerson[i].nama + ' </td>'+
                                  '<td>'+ dataPerson[i].alamat + ' </td>'+
                                  '<td>'+ dataPerson[i].kelamin + ' </td>'+
                                  '<td>'+ dataPerson[i].hobby + ' </td>'+
                                  '<td>'+ dataPerson[i].agama + ' </td>'+
                                  '<td><button class="btn btn-danger btn-small" onclick="hapusData(\''+dataPerson[i].id_data+'\')">Hapus</button></td>'+
                                  '<td><button class="btn btn-warning btn-small" onclick="editData(\''+dataPerson[i].id_data+'\')">Edit</button></td>';
                data_app += '</tr>';
                
            }
           data_app += '</tbody></table>';
       
        }
        else {
            data_app = "Tidak ada data...";
        }
       
        
       document.querySelector('#list-data').innerHTML = data_app;
       console.log(data_app);
    //    document.querySelector('#list-data').hide();
    //    document.querySelector('#list-data').fadeIn(100);
    }
}

function editData(id){
		
    if (localStorage.dataPerson && localStorage.id_data){
        dataPerson = JSON.parse(localStorage.getItem('dataPerson'));			
        idx_data = 0;
        for (i in dataPerson){
            if (dataPerson[i].id_data == id){
                // document.querySelector('#editId').value(dataPerson[i].id_data);
                // document.querySelector('#editNama').value = dataPerson[i].nama;
                // document.querySelector('#editAlamat').value = dataPerson[i].alamat;
                // document.querySelector('#editKelamin').value = dataPerson[i].kelamin;
                // document.querySelector('.editHobby').value = dataPerson[i].hobby;
                // document.querySelector('#editAgama').value = dataPerson[i].agama;
                // dataPerson.splice(idx_data, 1);

                document.querySelector('#editNama').setAttribute = `value="${dataPerson[i].nama};"`
                document.querySelector('#editAlamat').setAttribute = `value="${dataPerson[i].alamat};"`
                document.querySelector('#editKelamin').setAttribute = `value="${dataPerson[i].kelamin};"`
                document.querySelector('.editHobby').setAttribute = `value="${dataPerson[i].hobby};"`
                document.querySelector('#editAgama').setAttribute = `value="${dataPerson[i].agama};"`
                dataPerson.splice(idx_data, 1);
            }
            idx_data ++;
        }
        
        let save = document.querySelector('.formSave').classList
        let edit = document.querySelector('.formEdit').classList

        save.add('.hidden')
        edit.remove('.hidden')
        
    }
    
}

function simpanEditData(){
    id_data = $('#eid_data').val();
    nama = $('#enama').val();
    alamat = $('#ealamat').val();
    ket = $('#eket').val();
    
    daftar_data.push({'id_data':id_data, 'nama':nama, 'alamat':alamat, 'ket':ket});
    localStorage.setItem('daftar_data', JSON.stringify(daftar_data));
    document.getElementById('eform-data').reset();
    gantiMenu('list-data');
    
    return false;
}