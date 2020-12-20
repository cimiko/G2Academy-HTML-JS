let dataStudent = [{
    "name": "Admin",
    "age": 20
},{
    "name": "Operator",
    "age": 22
},{
    "name": "User",
    "age": 21
},{
    "name": "Opera",
    "age": 22
}
]

const sliceArr = dataStudent.slice(1,3);
const someArr = dataStudent.some(value => value.age >= 21);
const findArr = dataStudent.find(value => value.age >= 21);
const filterArr = dataStudent.filter(value => value.age >= 21)

console.log("slice", sliceArr);
console.log("some", someArr);
console.log("find", findArr);
console.log("filter", filterArr);
console.log("filter", filterArr[1].name);


for (let index = 0; index < 5; index++) {
    console.log("index ke:", index);
    
}

let x = 0
while (true) {
    x++

    if (x <= 2) continue
    if (x >= 5) break

    console.log("x ke:", x);
}

let totalUmurFor = 0
let totalUmurForEach = 0

console.log("=== start forEach ===");
dataStudent.forEach(value => {
    // setTimeout(()=>{}, 2000);
    console.log("Nama:", value.name);
    totalUmurForEach += value.age;
})
console.log("=== end forEach ===");

console.log("=== start for ===");
for (let index = 0; index < dataStudent.length; index++) {
    const element = dataStudent[index];

    console.log("Nama:", element.name);
    totalUmurFor += value.age

}