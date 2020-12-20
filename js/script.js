console.log("ini file js");

// var a ;
// let b;
// const c;

let var1 = 1;
let var2 = "2";
const var3 = var1 + var2;

console.log(var1 + var2);
console.log(var3);

let inputNama = document.getElementById("inputNama")
let inputNama2 = document.querySelector("input")
let inputNama3 = document.querySelectorAll("input")
let inputNama4 = document.querySelector("#inputNama")
let inputNama5 = document.querySelector(".input-form")
let inputNama6 = document.querySelector("div#div3")
let inputNama7 = document.querySelector("input[name = age]")

console.log(inputNama);
console.log(inputNama2);
console.log(inputNama3);
console.log(inputNama3[3]);
console.log(inputNama4);
console.log(inputNama5);
console.log(inputNama6);
console.log(inputNama7);

inputNama7.value = 12
console.log(inputNama7.value);

function btnClick() {
    inputNama7.value = 11;

    let classes = getEl('.input-form').classList;
    console.log(classes);

    classes.add('input-tambahan')
    classes.remove('input-form');

    let div1 = document.querySelector('#div1', 'asdf').classList
    let div2 = document.querySelector('#div2').classList
    div1.add('hidden')
    div2.remove('hidden')
}

function getEl(selector) {
    return document.querySelector(selector);
}

