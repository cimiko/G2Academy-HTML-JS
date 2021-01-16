
for (let i = 0; i < 5; i++) {
    document.querySelector('.logic').innerHTML += "test "
    for (let j = 0; j < 5; j++) {
        document.querySelector('.logic').innerHTML += "test " 
    }
    document.querySelector('.logic').innerHTML += "<br>"
}

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

const generateDot2 = _ =>{
    const dot = `<div class="dot"></div>`

    for (let i = 0; i < 5; i++) {
        document.querySelector("div.boxDots").innerHTML += dot;
        for (let j = 0; j < 4; j++) {
            document.querySelector("div.boxDots").innerHTML += dot;
        }
        document.querySelector("div.boxDots").innerHTML += "<br>"
    }
}
generateDot2()

// const generateDot3 = _ =>{
//     const dot = `<div class="dot"></div>`

//     let dt = "";
//     for (let i = 0; i < 5; i++) {
//         document.querySelector("div.boxDots").innerHTML += dot;
//         for (let j = 0; j < 4; j++) {
//             dt += dot.outerHTML
//             document.querySelector("div.boxDots").innerHTML += dot;
//         }
//         document.querySelector("div.boxDots").innerHTML += "<br>"
//     }
// }
// generateDot3()

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