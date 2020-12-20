var arrayObject = [];

function btnClik(event) {
    event.preventDefault();
    var nameSubmit = document.getElementById("name").value;
    var addressSubmit = document.getElementById("address").value;
    var genderSubmit = document.getElementById("gender").value;
    var hobbySubmit = document.getElementById("hobby").value;

    console.log(nameSubmit);
    console.log(addressSubmit);
    console.log(genderSubmit);
    console.log(hobbySubmit);

    var table = document.getElementById("table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = nameSubmit;
    cell2.innerHTML = addressSubmit;
    cell3.innerHTML = genderSubmit;
    cell4.innerHTML = hobbySubmit;

    var objectData = {};
    objectData.name = nameSubmit,
    objectData.address = addressSubmit,
    objectData.gender = genderSubmit,
    objectData.hobby = hobbySubmit
    
    arrayObject.push(objectData);

}

function search(event) {
    event.preventDefault();
    var searchSubmit = document.getElementById("search").value;
    var trQuantity = document.querySelectorAll("tr");

    console.log(searchSubmit);
    console.log(trQuantity);

    for (let index = 1; index < trQuantity.length; index++) {
        trQuantity[index].remove();
    }

    for (let index = 0; index < arrayObject.length; index++) {
      if(
          arrayObject[index].name == searchSubmit ||
          arrayObject[index].address == searchSubmit
          ) {
            console.log( arrayObject[index].name);
            var table = document.getElementById("table");
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);

            cell1.innerHTML = arrayObject[index].name;
            cell2.innerHTML = arrayObject[index].address;
            cell3.innerHTML = arrayObject[index].gender;
            cell4.innerHTML = arrayObject[index].hobby;
          }
    }

}

function findAll(event) {
    event.preventDefault();
    var trQuantity = document.querySelectorAll("tr");

    for (let index = 1; index < trQuantity.length; index++) {
        trQuantity[index].remove();
    }

    for (let index = 0; index < arrayObject.length; index++) {
        
        console.log( arrayObject[index].name);
        var table = document.getElementById("table");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = arrayObject[index].name;
        cell2.innerHTML = arrayObject[index].address;
        cell3.innerHTML = arrayObject[index].gender;
        cell4.innerHTML = arrayObject[index].hobby;
            
      }

}