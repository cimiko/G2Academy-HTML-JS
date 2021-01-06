let parkingList = []; 
let gen = ["a","b","c","d","e","f","g","h"]
let date = new Date();
let form = document.gateInForm


const getDate = () => {
    let hari = String(date.getDate()).padStart(2, '0');
    let bulan = String(date.getMonth()+1).padStart(2, '0');
    let tahun = date.getFullYear();

    // return `
    //     ${tahun}-${bulan}-${hari}
    // `

    return form.date.setAttribute("value", `${tahun}-${bulan}-${hari}`);

}

const getTime = () => {
    let hours = String(date.getHours()).padStart(2, '0');
    let minute = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    // let miliSec = date.getMilliseconds()

    return form.time.setAttribute("value", `${hours}:${minute}:${seconds}`);
}

const gateInSave = () => {
    // event.preventDefault()
    

    let hours = String(date.getHours()).padStart(2, '0');
    let minute = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    let miliSec = date.getMilliseconds()
    let parkData = {}

    parkData.code = `${miliSec}${gen[Math.floor(Math.random() * gen.length)]}${gen[Math.floor(Math.random() * gen.length)]}${minute}${gen[Math.floor(Math.random() * gen.length)]}${gen[Math.floor(Math.random() * gen.length)]}${seconds}${gen[Math.floor(Math.random() * gen.length)]}${gen[Math.floor(Math.random() * gen.length)]}${hours}`
    parkData.vehicle = form.vehicle.value,
    parkData.date = form.date.value,
    parkData.time = form.time.value

    console.log("parkData:", parkData);

    parkingList.push(parkData);
    localStorage.setItem('parkingList', JSON.stringify(parkingList));

    // showData();
    form.reset();
}

console.log(getDate());
console.log(getTime());

const test = () => {
    event.preventDefault();
    let date =  form.date.value
    let time = form.time.value
    let car = form.vehicle.value
    
    console.log(date);
    console.log(time);
    console.log(car);
}
