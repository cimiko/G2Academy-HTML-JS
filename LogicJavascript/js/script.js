

// for (let i = 0; i < 5; i++) {
//     document.querySelector('.logic').innerHTML += "test "
//     for (let j = 0; j < 5; j++) {
//         document.querySelector('.logic').innerHTML += "test "
//     }
//     document.querySelector('.logic').innerHTML += "<br>"
// }

// const generateDot = _ =>{
//     const dot = document.querySelector("div.dot")

//     let dt = "";
//     for (let i = 0; i < 5; i++) {
//         document.querySelector("div.boxDots").innerHTML += dot.outerHTML;
//         for (let j = 0; j < 4; j++) {
//             dt += dot.outerHTML
//             document.querySelector("div.boxDots").innerHTML += dot.outerHTML;
//         }
//         document.querySelector("div.boxDots").innerHTML += "<br>"
//     }
// }
// generateDot()

// const generateDot2 = _ =>{
//     const dot = `<div class="dot"></div>`

//     for (let i = 0; i < 5; i++) {
//         document.querySelector("div.boxDots").innerHTML += dot;
//         for (let j = 0; j < 4; j++) {
//             document.querySelector("div.boxDots").innerHTML += dot;
//         }
//         document.querySelector("div.boxDots").innerHTML += "<br>"
//     }
// }
// generateDot2()

// const generateDot4 = _ =>{
//     const dot = `<div class="dot"></div>`
//     const box = document.querySelector(".boxDots")

//     let dt = "";
//     for (let i = 0; i < 5; i++) {
//         for (let j = 0; j < 5; j++) {
//             dt += dot
//         }
//         dt += "<br>"
//     }
//     box.innerHTML = dt
// }
// generateDot4()

const submitForm = (self) => {
    event.preventDefault()
    let data = document.querySelector('div.boxDots')
    let data3 = document.querySelector('div.data')
    data.remove()
    let form = self.value
    let test = ""
    data3.innerHTML = `<div class="boxDots"></div>`
    return test = generateDot3(form);
}

const submitForm1 = () => {
    event.preventDefault()
    let data = document.querySelector('div.boxDots')
    let data1 = document.querySelector('.dot')
    let data2 = document.querySelectorAll('.dotWht')
    let data3 = document.querySelector('div.data')
    
    data.remove()

    let form = document.inputData.data.value
    let test = ""
    data3.innerHTML = `<div class="boxDots"></div>`
    return test = generateDot3(form);
}

const removeData = () =>{
    let data = document.querySelector('div.boxDots')
    let data1 = document.querySelector('.dot')
    let data2 = document.querySelectorAll('.dotWht')
    let data3 = document.querySelector('div.data')
    data.remove()
    data3.innerHTML = `<div class="boxDots"></div>`

}

const generateDot3 = (el) => {
    const dot = `<div class="dot"></div>`
    const dotWht = `<div class="dotWht"></div>`

    console.time()
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (el.toLowerCase() == "a") {
                if (j == 2 && ((i % 2 == 0) && i != 4)) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else if (((j % 2 == 0) && (i >= 1)) || (i == 0)) {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dot;
                }
            } else if (el.toLowerCase() == "b") {
                if ((i % 2 == 0) || (j % 4 == 0)) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            } else if (el.toLowerCase() == "c") {
                if ((i % 4 == 0) || j == 0) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            } else if (el.toLowerCase() == "d") {
                if (((i % 4 == 0) && j < 3) || ((j % 3 == 0) && (i % 4))) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            } else if (el.toLowerCase() == "e") {
                if ((j == 0) || i % 2 == 0) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            } else if (el.toLowerCase() == "f") {
                if ((j == 0) || ((i % 2 == 0) && (i % 3 != 1))) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            } else if (el.toLowerCase() == "g") {
                if ((j % 5 == 0) || i % 2 == 0 || ((j % 4 == 0) && i > 1)) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            } else if (el.toLowerCase() == "h") {
                if ((j % 4 == 0) || i == 2) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            } else if (el.toLowerCase() == "i") {
                if ((i % 4 == 0) || j == 2) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            } else if (el.toLowerCase() == "j") {
                if (((i % 5 == 0) && j < 3) || ((j == 2) && i < 4) || ((i > 3) && (j <= 1))) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            } else if (el.toLowerCase() == "k") {
                if ((j == 1) || ((j == 2) && (i % 2 == 1)) || ((j == 3) && (i % 4 == 0))) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            } else if (el.toLowerCase() == "l") {
                if ((j == 1) || ((i > 3) && j > 0)) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            } else if (el.toLowerCase() == "m") {
                if (i == 0 || (j % 2 == 0)) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            } else if (el.toLowerCase() == "n") {
                if (i == 0 || (j % 4 == 0)) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            } else if (el.toLowerCase() == "o") {
                if ((i % 4 == 0) || (j % 4 == 0)) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            } else if (el.toLowerCase() == "p") {
                if ((j == 0) || ((i % 2 == 0) && i < 3) || ((j == 4) && i < 3)) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            } else if (el.toLowerCase() == "q") {
                if ((j == 4) || ((i % 2 == 0) && i < 3) || ((j == 0) && i < 3)) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            } else if (el.toLowerCase() == "r") {
                if ((j == 0) || ((i % 2 == 0) && i < 3) || ((j == 4) && i < 3)) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else if (((i % 3 == 0) && (j == 2)) || ((i > 3) && (j == 3))) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            } else if (el.toLowerCase() == "s") {
                if (i % 2 == 0 || ((j == 0) && i < 3) || ((j == 4) && i > 2)) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            } else if (el.toLowerCase() == "t") {
                if ((i % 5 == 0) || j == 2) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            } else if (el.toLowerCase() == "u") {
                if ((j % 4 == 0) || i == 4) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            } else if (el.toLowerCase() == "v") {
                if (((j % 4 == 0) && i == 1) || ((j % 2 == 1) && i == 2) || ((j == 2) && i == 3)) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            } else if (el.toLowerCase() == "w") {
                if ((i == 2 && (j % 2 == 0)) || (i == 3 && (j % 2 == 1))) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            }else if (el.toLowerCase() == "x") {
                if (((j % 4 == 0) && i == 0) || ((j % 2 == 1) && i == 1) || ((j == 2) && i == 2)) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else if (((j % 4 == 0) && i == 4) || ((j % 2 == 1) && i == 3)) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else{
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            }else if (el.toLowerCase() == "y") {
                if (((j % 4 == 0) && i == 0) || ((j % 2 == 1) && i == 1) || ((j == 2) && i == 2)) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                }else if ((j == 2) && i > 2) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            }else if (el.toLowerCase() == "z") {
                if (i % 4 == 0 || (j == 3 && i == 1) || (j == 2 && i == 2) || (j == 1 && i == 3)) {
                    document.querySelector("div.boxDots").innerHTML += dot;
                } else {
                    document.querySelector("div.boxDots").innerHTML += dotWht;
                }
            }
        }
        document.querySelector("div.boxDots").innerHTML += "<br>"
    }
    console.timeEnd()
}

let i = 0, Tulisan;
// Tulisan = `Halo Nama Saya Hartono, Git Hub: https://github.com/cimiko jangan lupa follow yah!!`
Tulisan = `Halo Nama Saya Hartono, Salam Kenal Semuanya!!!`

const typing = () => {
    if (i < Tulisan.length) {
        document.querySelector("#Tulisan").innerHTML += Tulisan.charAt(i);
        i++;
        setTimeout( typing, 100);
    }else if( i >= Tulisan.length){
        // setTimeout( typing, 1000)
        i = 0;
        document.querySelector("#Tulisan").innerHTML = "";
        typing()
    }
}
// typing();





