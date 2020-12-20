function search(event) {
    event.preventDefault()
    let find = document.querySelector('#search').value
    var tr = document.querySelectorAll("tr");
    console.log(tr);

    for (var i = 1; i < tr.length; i++) {
        tr[i].remove();
    }

    // const findArr = dataPerson.find(value => value.name == find)
    // const findArr1 = dataPerson.find(value => value.address == find)
    const findArr = dataPerson.filter(value => value.name == find.toLowerCase())
    const findArr1 = dataPerson.filter(value => value.address == find.toLowerCase())

    console.log(findArr);
    for (i = 0; i < dataPerson.length; i++) {
        if (findArr[i] == null) {
            var table = document.getElementsByTagName('tbody')[0];
            var newRow = table.insertRow(table.rows.length / 1);

            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);
            var cell6 = newRow.insertCell(5);

            // table();
            cell1.innerHTML = i + 1;
            cell2.innerHTML = findArr1[i].name;
            cell3.innerHTML = findArr1[i].address;
            cell4.innerHTML = findArr1[i].gender;
            cell5.innerHTML = findArr1[i].hobby;
            cell6.innerHTML = findArr1[i].religion;
        } else if (findArr1[i] == null) {
            var table = document.getElementsByTagName('tbody')[0];
            var newRow = table.insertRow(table.rows.length / 1);

            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);
            var cell6 = newRow.insertCell(5);

            // table();
            cell1.innerHTML = i + 1;
            cell2.innerHTML = findArr[i].name;
            cell3.innerHTML = findArr[i].address;
            cell4.innerHTML = findArr[i].gender;
            cell5.innerHTML = findArr[i].hobby;
            cell6.innerHTML = findArr[i].religion;
        }
        console.log(dataPerson);
    }
}

function findAll(event) {
    event.preventDefault();
    var tr = document.querySelectorAll("tr");
    console.log(tr);

    for (var i = 1; i < tr.length; i++) {
        tr[i].remove();
    }

    for (let index = 0; index < dataPerson.length; index++) {

        console.log(dataPerson[index].name);
        var table = document.getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.rows.length / 1);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);

        // table();
        cell1.innerHTML = i + 1;
        cell2.innerHTML = dataPerson[i].name;
        cell3.innerHTML = dataPerson[i].address;
        cell4.innerHTML = dataPerson[i].gender;
        cell5.innerHTML = dataPerson[i].hobby;
        cell6.innerHTML = dataPerson[i].religion;

    }

}