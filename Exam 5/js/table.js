function table() {
    // for(i = 0; i <= dataPerson.length; i++){

    var table = document.getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length / 1);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    // }
    dataPerson.forEach(value => {
        cell1.innerHTML = value.id;
        cell2.innerHTML = value.name;
        cell3.innerHTML = value.address;
        cell4.innerHTML = value.gender;
        cell5.innerHTML = value.hobby;
        cell6.innerHTML = value.religion;
    })
}