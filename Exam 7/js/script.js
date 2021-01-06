let dataPerson = [];
let no = 1;

console.log(no);

function btnClik(event) {
    event.preventDefault();

    let nama = document.querySelector('#name').value;
    let address = document.querySelector('#address').value;
    let gender = document.querySelector('#gender').value;
    let hobby = document.querySelector('#hobby').value;
    let religion = document.querySelector('#religion').value;

    let newPerson = {
        "id":no,
        "name": nama,
        "address": address,
        "gender": gender,
        "hobby": hobby,
        "religion": religion
    }
    dataPerson.push(newPerson)
    showData()
    console.log(dataPerson);

    document.querySelector('#form').reset();

    // var table = document.getElementsByTagName('tbody')[0];
    // var newRow = table.insertRow(table.rows.length / 1);

    // var cell1 = newRow.insertCell(0);
    // var cell2 = newRow.insertCell(1);
    // var cell3 = newRow.insertCell(2);
    // var cell4 = newRow.insertCell(3);
    // var cell5 = newRow.insertCell(4);
    // var cell6 = newRow.insertCell(5);
    
    // cell1.innerHTML = no;
    // cell2.innerHTML = nama;
    // cell3.innerHTML = address;
    // cell4.innerHTML = gender;
    // cell5.innerHTML = hobby;
    // cell6.innerHTML = religion;


    // document.querySelector('#table').innerHTML = `
    // <tr>
    //     <th scope="row">${no}</th>
    //     <td>${nama}</td>
    //     <td>${address}</td>
    //     <td>${gender}</td>
    //     <td>${hobby}</td>
    //     <td>${religion}</td>
    // </tr>
    // `

    // no += 1;
    // dataPerson.forEach(no => {
    //     console.log("Nama: ", no.name);
    //     document.querySelector('#table').innerHTML = `
    //     <tr>
    //         <th scope="row">${no}</th>
    //         <td>${no.name}</td>
    //         <td>${no.address}</td>
    //         <td>${no.gender}</td>
    //         <td>${no.hobby}</td>
    //         <td>${no.religion}</td>
    //     </tr>
    //     `
    // })

    // for (let index = 0; index < dataPerson.length; index++) {
    //     const element = dataPerson[index];
    //     console.log("Nama:", element.name);


    //     // document.querySelector('#table').innerHTML = `
    //     // <tr>
    //     //     <th scope="row">${no}</th>
    //     //     <td>${dataPerson[index].name}</td>
    //     //     <td>${dataPerson[index].address}</td>
    //     //     <td>${dataPerson[index].gender}</td>
    //     //     <td>${dataPerson[index].hobby}</td>
    //     //     <td>${dataPerson[index].religion}</td>
    //     // </tr>
    //     // `

    // }
}



// dataPerson.forEach(no => {
//     console.log("Nama: ", no.name);
//     document.querySelector('#table').innerHTML = `
//         <tr>
//             <th scope="row">${no}</th>
//             <td>${no.name}</td>
//             <td>${no.address}</td>
//             <td>${no.gender}</td>
//             <td>${no.hobby}</td>
//             <td>${no.religion}</td>
//         </tr>
//         `
// })

// for (let index = 0; index < dataPerson.length; index++) {
//         const element = dataPerson[index];
//         console.log("Nama:", element.name);


//         document.querySelector('#table').innerHTML = `
//         <tr>
//             <th scope="row">${no}</th>
//             <td>${dataPerson[index].name}</td>
//             <td>${dataPerson[index].address}</td>
//             <td>${dataPerson[index].gender}</td>
//             <td>${dataPerson[index].hobby}</td>
//             <td>${dataPerson[index].religion}</td>
//         </tr>
//         `

//     }
