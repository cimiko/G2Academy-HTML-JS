
const showBanner = () => {
    document.querySelector('.banner').classList.remove('hidden');
    document.querySelector('.showDataMahasiswa').classList.add('hidden');
    document.querySelector('.inputMahasiswa').classList.add('hidden');
}

const showDataMahasiswa = () => {
    document.querySelector('.banner').classList.add('hidden');
    document.querySelector('.showDataMahasiswa').classList.remove('hidden');
    document.querySelector('.inputMahasiswa').classList.add('hidden');
}

const showInputMahasiswa = () => {
    document.querySelector('.banner').classList.add('hidden');
    document.querySelector('.showDataMahasiswa').classList.add('hidden');
    document.querySelector('.inputMahasiswa').classList.remove('hidden');
}

const showHideLogin = () => {
    document.querySelector('.login-warp').classList.toggle('hidden');
    // document.querySelector('.register').classList.add('hidden');
}

const showHideRegister = () => {
    document.querySelector('.register').classList.toggle('hidden');
    document.querySelector('.login-warp').classList.toggle('hidden');
}