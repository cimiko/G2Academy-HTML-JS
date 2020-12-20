
function btnClick(event) {
    event.preventDefault();

    let nama = document.querySelector('#name').value;
    let date = document.querySelector('#date').value;
    let address = document.querySelector('#address').value;
    let git = document.querySelector('#git').value;

    document.getElementById('nama').innerText = nama;
    document.querySelector('#tanggal').innerHTML = date;
    document.querySelector('#alamat').innerHTML = address;
    document.querySelector('#gitAddress').innerHTML = "github.com/" + git;
    document.querySelector('#gitAddress').setAttribute('href', "github.com/" + git);
}

// function on(e) {
//     let circle = document.querySelector(e).classList
//     let tes = document.querySelector(e).value

//     circle.toggle('circle-black')

//     console.log(tes);
// }

function on(id, row) {

    
    for ( let i = 1; i <= row; i++ ) {

        if ( i <= row ) {
            let setDotClass = document.getElementById("lvl-" + id + i);
            setDotClass.classList.toggle("circle-black");
        }
        

    }

    
}

// function on(e) {
//     let circle = document.querySelector(e).classList
//     let tes = document.querySelector(e).value
//     let te = document.querySelectorAll('.a')
//     let test = document.querySelector('.a input').classList

//     circle.toggle('circle-black')

//     console.log(tes);

//     for (let i = 0; i < te.length; i++) {
//         if(tes > i){
//             test.remove('circle-black')
//         }
//         test.add('circle-black')
        
//     }
// }

// function on(event) {
//     event.preventDefault();

//     let fas = document.querySelector('.skill-indicator .fas').classList;
//     let far = document.querySelector('.skill-indicator .far').classList;  

//     fas.add('far');
//     far.remove('fas');

// }

// if(document.getElementById('t').click == true){
//     console.log("success");
// }

// function off(event) {
//     event.preventDefault();

//     let fas = document.querySelector('.skill-indicator .fas').classList;
//     let far = document.querySelector('.skill-indicator .far').classList;

//     // far.add('hidden');
//     // fas.remove('hidden');
//     far.toggle('hidden');
//     fas.remove('hidden');
// }





// function on(e) {

//     let on = document.querySelector(e).classList;

//     // on.toggle('circle-black');
//     on.add('circle-black')
//     document.querySelector(e).removeAttribute('onclick', 'on()')
//     document.querySelector(e).setAttribute('onclick', 'off()')

// }

// function off(e) {

//     let on = document.querySelector(e).classList;

//     // on.toggle('circle-black');
//     on.remove('circle-black')
//     document.querySelector(e).removeAttribute('onclick', 'off()')
//     document.querySelector(e).setAttribute('onclick', 'on()')

// }