let dataMhs = []

const saveMhs = () => {
    event.preventDefault();
    let form = document.mhsForm
    const year = new Date().getFullYear()

    let idFaculty = [
        {faculty: "Agriculture"},
        {faculty: "Veterinary Medicine"},
        {faculty: "Fisheries and Marine Science"},
        {faculty: "Animal Science"},
        {faculty: "Forestry and Environment"},
        {faculty: "Agricultural Technology"},
        {faculty: "Mathematics and Natural Sciences"},
        {faculty: "Economics and Management"},
        {faculty: "Human Ecology"}
    ]
    let dataSiswa = {}
    let idFac = 0

    for (let i = 0; i < idFaculty.length; i++) {
        if (form.faculty.value == idFaculty[i].faculty) {
            idFac = `0${i + 1}`;
            break;
        }else{
            idFac = 0;
        }
    }
    
    dataSiswa.nim = `${year}-${idFac}`
    dataSiswa.name = form.name.value,
    dataSiswa.gender = form.gender.value,
    dataSiswa.religion = form.religion.value,
    dataSiswa.birthPlace = form.birthPlace.value,
    dataSiswa.birthDate = form.birthDate.value,
    dataSiswa.faculty = form.faculty.value,
    dataSiswa.majors = form.majors.value

    dataMhs.push(dataSiswa)
    localStorage.setItem("dataMhs", JSON.stringify(dataMhs));

    console.log(idFac);
    console.log(dataSiswa);

}

const optionMajors = () => {
    let form = document.mhsForm

    if(form.faculty.value == "Agriculture"){
        form.majors.innerHTML = `
        <option value="Land Resources Management">Land Resources Management</option>
        <option value="Agronomy and Horticulture">Agronomy and Horticulture</option>
        <option value="Plant Protection">Plant Protection</option>
        <option value="Landscape Architecture">Landscape Architecture</option>
        `
    }else if(form.faculty.value == "Veterinary Medicine"){
        form.majors.innerHTML = `
        <option value="Veterinary Medicine">Veterinary Medicine</option>
        `
    }else if(form.faculty.value == "Fisheries and Marine Science"){
        form.majors.innerHTML = `
        <option value="Technology and Management of Aquaculture">Technology and Management of Aquaculture</option>
        <option value="Aquatic Resource Management">Aquatic Resource Management</option>
        <option value="Aquatic Products Technology">Aquatic Products Technology</option>
        <option value="Fishing Management and Technology">Fishing Management and Technology</option>
        <option value="Marine Science and Technology">Marine Science and Technology</option>
        `
    }else if(form.faculty.value == "Animal Science"){
        form.majors.innerHTML = `
        <option value="Animal Production Technology">Animal Production Technology</option>
        <option value="Nutrition and Feed Technology">Nutrition and Feed Technology</option>
        <option value="Technology of Cattle Products">Technology of Cattle Products</option>
        `
    }else if(form.faculty.value == "Forestry and Environment"){
        form.majors.innerHTML = `
        <option value="Forest Management">Forest Management</option>
        <option value="Forest Products">Forest Products</option>
        <option value="Conservation of Forest Resources and Ecotourism">Conservation of Forest Resources and Ecotourism</option>
        <option value="Silviculture">Silviculture</option>
        `
    }else if(form.faculty.value == "Agricultural Technology"){
        form.majors.innerHTML = `
        <option value="Agricultural and Bio-system Engineering">Agricultural and Bio-system Engineering</option>
        <option value="Food Science and Technology">Food Science and Technology</option>
        <option value="Agro-Industrial Engineering">Agro-Industrial Engineering</option>
        <option value="Civil and Environmental Engineering">Civil and Environmental Engineering</option>
        `
    }else if(form.faculty.value == "Mathematics and Natural Sciences"){
        form.majors.innerHTML = `
        <option value="Statistics and Data Science">Statistics and Data Science</option>
        <option value="Geophysics and Meteorology">Geophysics and Meteorology</option>
        <option value="Biology">Biology</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Mathematics">Mathematics</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Physics">Physics</option>
        <option value="Bio-Chemistry">Bio-Chemistry</option>
        <option value="Actuaria">Actuaria</option>
        `
    }else if(form.faculty.value == "Economics and Management"){
        form.majors.innerHTML = `
        <option value="Economics and Development Studies">Economics and Development Studies</option>
        <option value="Management">Management</option>
        <option value="Agribusiness">Agribusiness</option>
        <option value="Resources and Environmental Economics">Resources and Environmental Economics</option>
        <option value="Islamic Economics">Islamic Economics</option>
        `
    }else if(form.faculty.value == "Human Ecology"){
        form.majors.innerHTML = `
        <option value="Nutrition Science">Nutrition Science</option>
        <option value="Family and Consumer Sciences">Family and Consumer Sciences</option>
        <option value="Communication and Community Development">Communication and Community Development</option>
        `
    }else {
        form.majors.innerHTML = `
        <option selected>Choose your faculty first!!</option>
        `
    }

}