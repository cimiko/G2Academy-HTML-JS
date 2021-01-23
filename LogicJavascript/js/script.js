

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

const removeData = () => {
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
            if ((j % 4 == 0) || i == 2) {
                document.querySelector("div.boxDots").innerHTML += dot;
            } else {
                document.querySelector("div.boxDots").innerHTML += dotWht;
            }
        }
        document.querySelector("div.boxDots").innerHTML += "<br>"
    }
    console.timeEnd()
}
generateDot3();

let i = 0, Tulisan;
// Tulisan = `Halo Nama Saya Hartono, Git Hub: https://github.com/cimiko jangan lupa follow yah!!`
Tulisan = `Halo Nama Saya Hartono, Salam Kenal Semuanya!!!`

const typing = () => {
    if (i < Tulisan.length) {
        document.querySelector("#Tulisan").innerHTML += Tulisan.charAt(i);
        i++;
        setTimeout(typing, 100);
    } else if (i >= Tulisan.length) {
        // setTimeout( typing, 1000)
        i = 0;
        document.querySelector("#Tulisan").innerHTML = "";
        typing()
    }
}
typing()
