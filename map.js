let people = [
    {
        id: 1,
        name: 'Obi Wan',
        status: 'Jedi'
    },
    {
        id: 2,
        name: 'Luke Skywalker',
        status: 'Padawan'
    },
    {
        id: 3,
        name: 'Qui Gon',
        status: 'Jedi Master'
    }
]

let my_people = people.map((x,i) => {
return {
...x,
id: i + 1,
go: i + 5,
namel : x.name
}
})

console.log(my_people)


// Simple Variable
let name = 'G2_Academy'
let age = 30
let is_bootcamp = true

// Create Object
let object = { name, age, is_bootcamp }

console.log(object)


// Destructuring
const { name: nama, ...goObject} = object
console.log(goObject)