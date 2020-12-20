
let dataDB = [
    {
        "name": "Hartono",
        "birth": "08-11-1996",
        "address": "Jl. 20 Desember No.81, Pegadungan, Kalideres, Jakarta Barat.",
        "git": "github.com/cimiko"
    }
]

let i = 0;
console.log(i);

function next(event) {
    event.preventDefault()
    i += 1;

    if (i > 0) {
        // document.getElementById('nama').innerText = dataDB[i].name;
        // document.querySelector('#tanggal').innerHTML = dataDB[i].birth;
        // document.querySelector('#alamat').innerHTML = dataDB[i].address;
        // document.querySelector('#gitAddress').innerHTML = "github.com/" + dataDB[i].git;
        // document.querySelector('#gitAddress').setAttribute('href', "github.com/" + dataDB[i].git);


        document.querySelector("#other").innerHTML = `
    <section>
        <div class="button">
            <input type="button" onclick="prev(event)" value="prev">
            <input type="button" onclick="next(event)" value="next">
        </div>
    
        <head>
            <div id="header">
                <div id="border-header"></div>
                <p id="resume">RESUME</p>
                <div class="row" id="name-profile">
                    <div class="col-3">
                        <div class="profile-img">
                            <img src="../Exam 1/img/profile.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-9">
                        <h1>HARTONO</h1>
                    </div>
                </div>
            </div>
        </head>
    
        <main>
            <div id="main">
                <div class="row">
                    <div class="col-3 personal-information">
                        <div class="profile">
                            <h5>
                                PROFILE
                            </h5>
                            <div class="border-dot"></div>
    
                            <div id="profile-info">
                                <div class="information">
                                    <h6>NAME</h6>
                                    <p id="nama">${dataDB[i].name}</p>
                                </div>
    
                                <div class="information">
                                    <h6>DATE OF BIRTH</h6>
                                    <p id="tanggal">${dataDB[i].birth}</p>
                                </div>
    
                                <div class="information">
                                    <h6>ADDRESS</h6>
                                    <p id="alamat">${dataDB[i].address}</p>
                                </div>
    
                                <div class="information">
                                    <h6>GIT HUB</h6>
                                    <a id="gitAddress" href="https://github.com/${dataDB[i].git}">github.com/${dataDB[i].git}</a>
                                </div>
                            </div>
    
                        </div>
    
                        <div class="profile-information">
                            <h5>
                                AWARDS
                            </h5>
                            <div class="border-dot"></div>
    
                            <div class="information">
                                <h6>JUARA 3 NETWORKING</h6>
                                <a href="http://www.bsi.ac.id/">bsi.ac.id</a>
                            </div>
                        </div>
    
                        <div class="profile-information">
                            <h5>
                                CONTACT
                            </h5>
                            <div class="border-dot"></div>
    
                            <div class="information">
                                <div class="row">
                                    <div class="col-9">
                                        <h6>PHONE NUMBER</h6>
                                        <p>0812-1327-3727</p>
                                    </div>
                                    <div class="col-3">
                                        <i class="fas fa-phone-square-alt"></i>
                                    </div>
    
                                    <div class="col-9">
                                        <h6>EMAIL</h6>
                                        <a href="mailto:private.hartono@gmail.com">private.hartono@gmail.com</a>
                                    </div>
                                    <div class="col-3">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="profile-information">
                            <h5>
                                SOCIAL
                            </h5>
                            <div class="border-dot"></div>
    
                            <div class="information">
                                <div class="row">
                                    <div class="col-9">
                                        <h6>FACEBOOK</h6>
                                        <a href="https://www.facebook.com/hartono.selalu">華黃 (Hartono Wijaya)</a>
                                    </div>
                                    <div class="col-3">
                                        <img src="../Exam 1/img/facebook.svg" alt="">
                                    </div>
    
                                    <div class="col-9 mt-3">
                                        <h6>INSTAGRAM</h6>
                                        <a href="https://www.instagram.com/jishucimiko/">jishucimiko</a>
                                    </div>
                                    <div class="col-3 mt-3">
                                        <img src="../Exam 1/img/instagram.svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-9 experience">
                        <div id="job-title">
                            <h4>ARSITEKTUR DRAFTER</h4>
                        </div>
    
                        <div class="border-list"></div>
    
                        <div class="work-experience">
                            <div class="judul">
                                <h4><span class="icon">
                                        <i class="fas fa-briefcase"></i>
                                    </span>
                                    &nbsp; WORK EXPERIENCE
                                </h4>
                                <div class="border-dot"></div>
                            </div>
                            <div class="row content-experience">
                                <div class="col-4">
                                    <h6 class="judul-exp">CV KOBE PLASTIC</h6>
                                    <p class="content-exp">Mei 2014 - Jan 2015</p>
                                </div>
                                <div class="col-8">
                                    <h6 class="judul-exp">MOLDER DRAFTER</h6>
                                    <p class="content-exp">
                                    <ul id="list">
                                        <li>Membuat design mainan.</li>
                                        <li>Mengimplementasikan design ke molding.</li>
                                        <li>Mengubah design molding ke dalam G-Code.</li>
                                        <li>Membuat molding menggunakan mesin CNC.</li>
                                    </ul>
                                    </p>
                                </div>
    
                                <div class="col-4">
                                    <h6 class="judul-exp">PT JAYASAKTI SUKSES MANDIRI</h6>
                                    <p class="content-exp">Jun 2018 - Ags 2018</p>
                                </div>
                                <div class="col-8">
                                    <h6 class="judul-exp">DRAFTER</h6>
                                    <p class="content-exp">
                                    <ul id="list">
                                        <li>Membuat gambar kerja GreenHouse.</li>
                                        <li>Membuat gambar part-part GreenHouse.</li>
                                        <li>Menggambar Masterplan GreenHouse.</li>
                                        <li>Membuat design detail 2D & 3D.</li>
                                    </ul>
                                    </p>
                                </div>
    
                                <div class="col-4">
                                    <h6 class="judul-exp">PT BALADHIKA KARYA RAHARJA</h6>
                                    <p class="content-exp">Ags 2018 - Nov 2018</p>
                                </div>
                                <div class="col-8">
                                    <h6 class="judul-exp">SALES EXECUTIVE</h6>
                                    <p class="content-exp">
                                    <ul id="list">
                                        <li>Memasarkan dan menawarkan Property.</li>
                                        <li>Mencari Customer dan database baru.</li>
                                        <li>Membantu Customer dalam pengajuan akad kredit.</li>
                                    </ul>
                                    </p>
                                </div>
    
                                <div class="col-4">
                                    <h6 class="judul-exp">PT MAHKOTA SENTOSA UTAMA</h6>
                                    <p class="content-exp">Des 2018 - Sep 2019</p>
                                </div>
                                <div class="col-8">
                                    <h6 class="judul-exp">FIELD COLLECTION</h6>
                                    <p class="content-exp">
                                    <ul id="list">
                                        <li>Melakukan follow-up kepada customer Bank Nobu untuk melakukan akad
                                            kredit.</li>
                                        <li>Membantu dan melengkapi data customer untuk akad kredit Bank Nobu.</li>
                                        <li>Membantu Bank Nobu untuk melakukan akad kredit.</li>
                                    </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
    
                        <div class="education">
                            <div class="judul">
                                <h4><span class="icon">
                                        <i class="fas fa-book"></i>
                                    </span>
                                    &nbsp; EDUCATION
                                </h4>
                                <div class="border-dot"></div>
                            </div>
                            <div class="row content-experience">
                                <div class="col-4">
                                    <h6 class="judul-exp">SD</h6>
                                    <p class="content-exp">2002 - 2008</p>
                                </div>
                                <div class="col-8">
                                    <h6 class="judul-exp">ATISA DIPAMKARA</h6>
                                    <p class="content-exp">
                                        Kabupaten Tangerang, Indonesia
                                    </p>
                                </div>
    
                                <div class="col-4">
                                    <h6 class="judul-exp">SMP</h6>
                                    <p class="content-exp">2008 - 2011</p>
                                </div>
                                <div class="col-8">
                                    <h6 class="judul-exp">PERGURUAN BUDDHI</h6>
                                    <p class="content-exp">
                                        Tangerang, Indonesia
                                    </p>
                                </div>
    
                                <div class="col-4">
                                    <h6 class="judul-exp">SMK</h6>
                                    <p class="content-exp">2011 - 2014</p>
                                </div>
                                <div class="col-8">
                                    <h6 class="judul-exp">YUPPENTEK 1 (Teknik Mesin)</h6>
                                    <p class="content-exp">
                                        Tangerang, Indonesia
                                    </p>
                                </div>
    
                                <div class="col-4">
                                    <h6 class="judul-exp">Bootcamp</h6>
                                    <p class="content-exp">Nov 2019 - Mar 2020</p>
                                </div>
                                <div class="col-8">
                                    <h6 class="judul-exp">EDU-TECH (Fullstack Developer)</h6>
                                    <p class="content-exp">
                                        Tangerang, Indonesia
                                    </p>
                                </div>
    
                                <div class="col-4">
                                    <h6 class="judul-exp">Bootcamp</h6>
                                    <p class="content-exp">Oct 2020 - Present</p>
                                </div>
                                <div class="col-8">
                                    <h6 class="judul-exp">G2 Academy (Fullstack Web & Mobile Development)</h6>
                                    <p class="content-exp">
                                        Jakarta, Indonesia
                                    </p>
                                </div>
                            </div>
                        </div>
    
                        <div class="skills">
                            <div class="judul">
                                <h4><span class="icon">
                                        <i class="fas fa-lightbulb"></i>
                                    </span>
                                    &nbsp; SKILLS
                                </h4>
                                <div class="border-dot"></div>
                            </div>
                            <div class="row content-experience">
                                <h5 class="judul-exp">PROFESSIONAL SKILLS</h5>
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Microsoft Office
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator a">
                                            <input class="circle circle-black" id="lvl-11" type="button" value=""
                                                onclick="on(1,1)">
                                            <input class="circle circle-black" id="lvl-12" type="button" value=""
                                                onclick="on(1,2)">
                                            <input class="circle circle-black" id="lvl-13" type="button" value=""
                                                onclick="on(1,3)">
                                            <input class="circle circle-black" id="lvl-14" type="button" value=""
                                                onclick="on(1,4)">
                                            <input class="circle circle-black" id="lvl-15" type="button" value=""
                                                onclick="on(1,5)">
                                            <input class="circle" id="lvl-16" type="button" value=""
                                                onclick="on(1,6)">
                                            <input class="circle" id="lvl-17" type="button" value=""
                                                onclick="on(1,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Autocad 2D & 3D
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-21" type="button" value=""
                                                onclick="on(2,1)">
                                            <input class="circle circle-black" id="lvl-22" type="button" value=""
                                                onclick="on(2,2)">
                                            <input class="circle circle-black" id="lvl-23" type="button" value=""
                                                onclick="on(2,3)">
                                            <input class="circle circle-black" id="lvl-24" type="button" value=""
                                                onclick="on(2,4)">
                                            <input class="circle circle-black" id="lvl-25" type="button" value=""
                                                onclick="on(2,5)">
                                            <input class="circle circle-black" id="lvl-26" type="button" value=""
                                                onclick="on(2,6)">
                                            <input class="circle circle-black" id="lvl-27" type="button" value=""
                                                onclick="on(2,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Google SketchUp
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-31" type="button" value=""
                                                onclick="on(3,1)">
                                            <input class="circle circle-black" id="lvl-32" type="button" value=""
                                                onclick="on(3,2)">
                                            <input class="circle circle-black" id="lvl-33" type="button" value=""
                                                onclick="on(3,3)">
                                            <input class="circle circle-black" id="lvl-34" type="button" value=""
                                                onclick="on(3,4)">
                                            <input class="circle circle-black" id="lvl-35" type="button" value=""
                                                onclick="on(3,5)">
                                            <input class="circle" id="lvl-36" type="button" value=""
                                                onclick="on(3,6)">
                                            <input class="circle" id="lvl-37" type="button" value=""
                                                onclick="on(3,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                MasterCam
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-41" type="button" value=""
                                                onclick="on(4,1)">
                                            <input class="circle circle-black" id="lvl-42" type="button" value=""
                                                onclick="on(4,2)">
                                            <input class="circle circle-black" id="lvl-43" type="button" value=""
                                                onclick="on(4,3)">
                                            <input class="circle circle-black" id="lvl-44" type="button" value=""
                                                onclick="on(4,4)">
                                            <input class="circle circle-black" id="lvl-45" type="button" value=""
                                                onclick="on(4,5)">
                                            <input class="circle" id="lvl-46" type="button" value=""
                                                onclick="on(4,6)">
                                            <input class="circle" id="lvl-47" type="button" value=""
                                                onclick="on(4,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                FluidSim
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-51" type="button" value=""
                                                onclick="on(5,1)">
                                            <input class="circle circle-black" id="lvl-52" type="button" value=""
                                                onclick="on(5,2)">
                                            <input class="circle circle-black" id="lvl-53" type="button" value=""
                                                onclick="on(5,3)">
                                            <input class="circle circle-black" id="lvl-54" type="button" value=""
                                                onclick="on(5,4)">
                                            <input class="circle circle-black" id="lvl-55" type="button" value=""
                                                onclick="on(5,5)">
                                            <input class="circle circle-black" id="lvl-56" type="button" value=""
                                                onclick="on(5,6)">
                                            <input class="circle circle-black" id="lvl-57" type="button" value=""
                                                onclick="on(5,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                HTML & CSS
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-61" type="button" value=""
                                                onclick="on(6,1)">
                                            <input class="circle circle-black" id="lvl-62" type="button" value=""
                                                onclick="on(6,2)">
                                            <input class="circle circle-black" id="lvl-63" type="button" value=""
                                                onclick="on(6,3)">
                                            <input class="circle circle-black" id="lvl-64" type="button" value=""
                                                onclick="on(6,4)">
                                            <input class="circle circle-black" id="lvl-65" type="button" value=""
                                                onclick="on(6,5)">
                                            <input class="circle" id="lvl-66" type="button" value=""
                                                onclick="on(6,6)">
                                            <input class="circle" id="lvl-67" type="button" value=""
                                                onclick="on(6,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                JavaScript
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-71" type="button" value=""
                                                onclick="on(7,1)">
                                            <input class="circle circle-black" id="lvl-72" type="button" value=""
                                                onclick="on(7,2)">
                                            <input class="circle circle-black" id="lvl-73" type="button" value=""
                                                onclick="on(7,3)">
                                            <input class="circle circle-black" id="lvl-74" type="button" value=""
                                                onclick="on(7,4)">
                                            <input class="circle" id="lvl-75" type="button" value=""
                                                onclick="on(7,5)">
                                            <input class="circle" id="lvl-76" type="button" value=""
                                                onclick="on(7,6)">
                                            <input class="circle" id="lvl-77" type="button" value=""
                                                onclick="on(7,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                JQUERY
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-81" type="button" value=""
                                                onclick="on(8,1)">
                                            <input class="circle circle-black" id="lvl-82" type="button" value=""
                                                onclick="on(8,2)">
                                            <input class="circle circle-black" id="lvl-83" type="button" value=""
                                                onclick="on(8,3)">
                                            <input class="circle circle-black" id="lvl-84" type="button" value=""
                                                onclick="on(8,4)">
                                            <input class="circle" id="lvl-85" type="button" value=""
                                                onclick="on(8,5)">
                                            <input class="circle" id="lvl-86" type="button" value=""
                                                onclick="on(8,6)">
                                            <input class="circle" id="lvl-87" type="button" value=""
                                                onclick="on(8,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                PHP
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-91" type="button" value=""
                                                onclick="on(9,1)">
                                            <input class="circle circle-black" id="lvl-92" type="button" value=""
                                                onclick="on(9,2)">
                                            <input class="circle circle-black" id="lvl-93" type="button" value=""
                                                onclick="on(9,3)">
                                            <input class="circle" id="lvl-94" type="button" value=""
                                                onclick="on(9,4)">
                                            <input class="circle" id="lvl-95" type="button" value=""
                                                onclick="on(9,5)">
                                            <input class="circle" id="lvl-96" type="button" value=""
                                                onclick="on(9,6)">
                                            <input class="circle" id="lvl-97" type="button" value=""
                                                onclick="on(9,7)">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Laravel
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-101" type="button" value=""
                                                onclick="on(10,1)">
                                            <input class="circle circle-black" id="lvl-102" type="button" value=""
                                                onclick="on(10,2)">
                                            <input class="circle circle-black" id="lvl-103" type="button" value=""
                                                onclick="on(10,3)">
                                            <input class="circle circle-black" id="lvl-104" type="button" value=""
                                                onclick="on(10,4)">
                                            <input class="circle circle-black" id="lvl-105" type="button" value=""
                                                onclick="on(10,5)">
                                            <input class="circle" id="lvl-106" type="button" value=""
                                                onclick="on(10,6)">
                                            <input class="circle" id="lvl-107" type="button" value=""
                                                onclick="on(10,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Python
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-111" type="button" value=""
                                                onclick="on(11,1)">
                                            <input class="circle circle-black" id="lvl-112" type="button" value=""
                                                onclick="on(11,2)">
                                            <input class="circle" id="lvl-113" type="button" value=""
                                                onclick="on(11,3)">
                                            <input class="circle" id="lvl-114" type="button" value=""
                                                onclick="on(11,4)">
                                            <input class="circle" id="lvl-115" type="button" value=""
                                                onclick="on(11,5)">
                                            <input class="circle" id="lvl-116" type="button" value=""
                                                onclick="on(11,6)">
                                            <input class="circle" id="lvl-117" type="button" value=""
                                                onclick="on(11,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Express Js
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-121" type="button" value=""
                                                onclick="on(12,1)">
                                            <input class="circle circle-black" id="lvl-122" type="button" value=""
                                                onclick="on(12,2)">
                                            <input class="circle circle-black" id="lvl-123" type="button" value=""
                                                onclick="on(12,3)">
                                            <input class="circle circle-black" id="lvl-124" type="button" value=""
                                                onclick="on(12,4)">
                                            <input class="circle" id="lvl-125" type="button" value=""
                                                onclick="on(12,5)">
                                            <input class="circle" id="lvl-126" type="button" value=""
                                                onclick="on(12,6)">
                                            <input class="circle" id="lvl-127" type="button" value=""
                                                onclick="on(12,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Java
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-131" type="button" value=""
                                                onclick="on(13,1)">
                                            <input class="circle circle-black" id="lvl-132" type="button" value=""
                                                onclick="on(13,2)">
                                            <input class="circle circle-black" id="lvl-133" type="button" value=""
                                                onclick="on(13,3)">
                                            <input class="circle circle-black" id="lvl-134" type="button" value=""
                                                onclick="on(13,4)">
                                            <input class="circle" id="lvl-135" type="button" value=""
                                                onclick="on(13,5)">
                                            <input class="circle" id="lvl-136" type="button" value=""
                                                onclick="on(13,6)">
                                            <input class="circle" id="lvl-137" type="button" value=""
                                                onclick="on(13,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                UI/UX
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-141" type="button" value=""
                                                onclick="on(14,1)">
                                            <input class="circle circle-black" id="lvl-142" type="button" value=""
                                                onclick="on(14,2)">
                                            <input class="circle circle-black" id="lvl-143" type="button" value=""
                                                onclick="on(14,3)">
                                            <input class="circle" id="lvl-144" type="button" value=""
                                                onclick="on(14,4)">
                                            <input class="circle" id="lvl-145" type="button" value=""
                                                onclick="on(14,5)">
                                            <input class="circle" id="lvl-146" type="button" value=""
                                                onclick="on(14,6)">
                                            <input class="circle" id="lvl-147" type="button" value=""
                                                onclick="on(14,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                SEO
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-151" type="button" value=""
                                                onclick="on(15,1)">
                                            <input class="circle circle-black" id="lvl-152" type="button" value=""
                                                onclick="on(15,2)">
                                            <input class="circle" id="lvl-153" type="button" value=""
                                                onclick="on(15,3)">
                                            <input class="circle" id="lvl-154" type="button" value=""
                                                onclick="on(15,4)">
                                            <input class="circle" id="lvl-155" type="button" value=""
                                                onclick="on(15,5)">
                                            <input class="circle" id="lvl-156" type="button" value=""
                                                onclick="on(15,6)">
                                            <input class="circle" id="lvl-157" type="button" value=""
                                                onclick="on(15,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                SAP ERP
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-161" type="button" value=""
                                                onclick="on(16,1)">
                                            <input class="circle circle-black" id="lvl-162" type="button" value=""
                                                onclick="on(16,2)">
                                            <input class="circle circle-black" id="lvl-163" type="button" value=""
                                                onclick="on(16,3)">
                                            <input class="circle circle-black" id="lvl-164" type="button" value=""
                                                onclick="on(16,4)">
                                            <input class="circle" id="lvl-165" type="button" value=""
                                                onclick="on(16,5)">
                                            <input class="circle" id="lvl-166" type="button" value=""
                                                onclick="on(16,6)">
                                            <input class="circle" id="lvl-167" type="button" value=""
                                                onclick="on(16,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Adobe Photoshop
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-171" type="button" value=""
                                                onclick="on(17,1)">
                                            <input class="circle circle-black" id="lvl-172" type="button" value=""
                                                onclick="on(17,2)">
                                            <input class="circle circle-black" id="lvl-173" type="button" value=""
                                                onclick="on(17,3)">
                                            <input class="circle" id="lvl-174" type="button" value=""
                                                onclick="on(17,4)">
                                            <input class="circle" id="lvl-175" type="button" value=""
                                                onclick="on(17,5)">
                                            <input class="circle" id="lvl-176" type="button" value=""
                                                onclick="on(17,6)">
                                            <input class="circle" id="lvl-177" type="button" value=""
                                                onclick="on(17,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Adobe Illustrator
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-181" type="button" value=""
                                                onclick="on(18,1)">
                                            <input class="circle circle-black" id="lvl-182" type="button" value=""
                                                onclick="on(18,2)">
                                            <input class="circle circle-black" id="lvl-183" type="button" value=""
                                                onclick="on(18,3)">
                                            <input class="circle circle-black" id="lvl-184" type="button" value=""
                                                onclick="on(18,4)">
                                            <input class="circle circle-black" id="lvl-185" type="button" value=""
                                                onclick="on(18,5)">
                                            <input class="circle" id="lvl-186" type="button" value=""
                                                onclick="on(18,6)">
                                            <input class="circle" id="lvl-187" type="button" value=""
                                                onclick="on(18,7)">
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="row content-experience">
                                <h5 class="judul-exp">PERSONAL SKILLS</h5>
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Organisation
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-191" type="button" value=""
                                                onclick="on(19,1)">
                                            <input class="circle circle-black" id="lvl-192" type="button" value=""
                                                onclick="on(19,2)">
                                            <input class="circle circle-black" id="lvl-193" type="button" value=""
                                                onclick="on(19,3)">
                                            <input class="circle circle-black" id="lvl-194" type="button" value=""
                                                onclick="on(19,4)">
                                            <input class="circle circle-black" id="lvl-195" type="button" value=""
                                                onclick="on(19,5)">
                                            <input class="circle circle-black" id="lvl-196" type="button" value=""
                                                onclick="on(19,6)">
                                            <input class="circle" id="lvl-197" type="button" value=""
                                                onclick="on(19,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Communication
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-201" type="button" value=""
                                                onclick="on(20,1)">
                                            <input class="circle circle-black" id="lvl-202" type="button" value=""
                                                onclick="on(20,2)">
                                            <input class="circle circle-black" id="lvl-203" type="button" value=""
                                                onclick="on(20,3)">
                                            <input class="circle circle-black" id="lvl-204" type="button" value=""
                                                onclick="on(20,4)">
                                            <input class="circle circle-black" id="lvl-205" type="button" value=""
                                                onclick="on(20,5)">
                                            <input class="circle circle-black" id="lvl-206" type="button" value=""
                                                onclick="on(20,6)">
                                            <input class="circle" id="lvl-207" type="button" value=""
                                                onclick="on(20,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Interpersonal Skills
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-211" type="button" value=""
                                                onclick="on(21,1)">
                                            <input class="circle circle-black" id="lvl-212" type="button" value=""
                                                onclick="on(21,2)">
                                            <input class="circle circle-black" id="lvl-213" type="button" value=""
                                                onclick="on(21,3)">
                                            <input class="circle circle-black" id="lvl-214" type="button" value=""
                                                onclick="on(21,4)">
                                            <input class="circle circle-black" id="lvl-215" type="button" value=""
                                                onclick="on(21,5)">
                                            <input class="circle circle-black" id="lvl-216" type="button" value=""
                                                onclick="on(21,6)">
                                            <input class="circle" id="lvl-217" type="button" value=""
                                                onclick="on(21,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Multitasking
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-221" type="button" value=""
                                                onclick="on(22,1)">
                                            <input class="circle circle-black" id="lvl-222" type="button" value=""
                                                onclick="on(22,2)">
                                            <input class="circle circle-black" id="lvl-223" type="button" value=""
                                                onclick="on(22,3)">
                                            <input class="circle circle-black" id="lvl-224" type="button" value=""
                                                onclick="on(22,4)">
                                            <input class="circle circle-black" id="lvl-225" type="button" value=""
                                                onclick="on(22,5)">
                                            <input class="circle" id="lvl-226" type="button" value=""
                                                onclick="on(22,6)">
                                            <input class="circle" id="lvl-227" type="button" value=""
                                                onclick="on(22,7)">
                                        </div>
    
    
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Transferable Skills
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-231" type="button" value=""
                                                onclick="on(23,1)">
                                            <input class="circle circle-black" id="lvl-232" type="button" value=""
                                                onclick="on(23,2)">
                                            <input class="circle circle-black" id="lvl-233" type="button" value=""
                                                onclick="on(23,3)">
                                            <input class="circle circle-black" id="lvl-234" type="button" value=""
                                                onclick="on(23,4)">
                                            <input class="circle" id="lvl-235" type="button" value=""
                                                onclick="on(23,5)">
                                            <input class="circle" id="lvl-236" type="button" value=""
                                                onclick="on(23,6)">
                                            <input class="circle" id="lvl-237" type="button" value=""
                                                onclick="on(23,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Computer Skills
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-241" type="button" value=""
                                                onclick="on(24,1)">
                                            <input class="circle circle-black" id="lvl-242" type="button" value=""
                                                onclick="on(24,2)">
                                            <input class="circle circle-black" id="lvl-243" type="button" value=""
                                                onclick="on(24,3)">
                                            <input class="circle circle-black" id="lvl-244" type="button" value=""
                                                onclick="on(24,4)">
                                            <input class="circle" id="lvl-245" type="button" value=""
                                                onclick="on(24,5)">
                                            <input class="circle" id="lvl-246" type="button" value=""
                                                onclick="on(24,6)">
                                            <input class="circle" id="lvl-247" type="button" value=""
                                                onclick="on(24,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Problem-solving
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-251" type="button" value=""
                                                onclick="on(25,1)">
                                            <input class="circle circle-black" id="lvl-252" type="button" value=""
                                                onclick="on(25,2)">
                                            <input class="circle circle-black" id="lvl-253" type="button" value=""
                                                onclick="on(25,3)">
                                            <input class="circle circle-black" id="lvl-254" type="button" value=""
                                                onclick="on(25,4)">
                                            <input class="circle circle-black" id="lvl-255" type="button" value=""
                                                onclick="on(25,5)">
                                            <input class="circle" id="lvl-256" type="button" value=""
                                                onclick="on(25,6)">
                                            <input class="circle" id="lvl-257" type="button" value=""
                                                onclick="on(25,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Management Skills
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-261" type="button" value=""
                                                onclick="on(26,1)">
                                            <input class="circle circle-black" id="lvl-262" type="button" value=""
                                                onclick="on(26,2)">
                                            <input class="circle circle-black" id="lvl-263" type="button" value=""
                                                onclick="on(26,3)">
                                            <input class="circle circle-black" id="lvl-264" type="button" value=""
                                                onclick="on(26,4)">
                                            <input class="circle" id="lvl-265" type="button" value=""
                                                onclick="on(26,5)">
                                            <input class="circle" id="lvl-266" type="button" value=""
                                                onclick="on(26,6)">
                                            <input class="circle" id="lvl-267" type="button" value=""
                                                onclick="on(26,7)">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    
        <footer>
            <div class="footer"></div>
        </footer>
    </section>
    `
    }
    document.querySelector('.cv').classList.add('hidden');

}

function prev(event) {
    i--;
        event.preventDefault()
        // document.getElementById('nama').innerText = dataDB[i].name;
        // document.querySelector('#tanggal').innerHTML = dataDB[i].birth;
        // document.querySelector('#alamat').innerHTML = dataDB[i].address;
        // document.querySelector('#gitAddress').innerHTML = "github.com/" + dataDB[i].git;
        // document.querySelector('#gitAddress').setAttribute('href', "github.com/" + dataDB[i].git);

        document.querySelector("#other").innerHTML = `
    <div class="cv">
    <section>
        <div class="button">
            <input type="button" onclick="prev(event)" value="prev">
            <input type="button" onclick="next(event)" value="next">
        </div>
        <head>
            <div id="header">
                <div id="border-header"></div>
                <p id="resume">RESUME</p>
                <div class="row" id="name-profile">
                    <div class="col-3">
                        <div class="profile-img">
                            <img src="../Exam 1/img/profile.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-9">
                        <h1>HARTONO</h1>
                    </div>
                </div>
            </div>
        </head>
    
        <main>
            <div id="main">
                <div class="row">
                    <div class="col-3 personal-information">
                        <div class="profile">
                            <h5>
                                PROFILE
                            </h5>
                            <div class="border-dot"></div>
    
                            <div id="profile-info">
                                <div class="information">
                                    <h6>NAME</h6>
                                    <p id="nama">${dataDB[i].name}</p>
                                </div>
    
                                <div class="information">
                                    <h6>DATE OF BIRTH</h6>
                                    <p id="tanggal">${dataDB[i].birth}</p>
                                </div>
    
                                <div class="information">
                                    <h6>ADDRESS</h6>
                                    <p id="alamat">${dataDB[i].address}</p>
                                </div>
    
                                <div class="information">
                                    <h6>GIT HUB</h6>
                                    <a id="gitAddress" href="https://github.com/${dataDB[i].git}">github.com/${dataDB[i].git}</a>
                                </div>
                            </div>
    
                        </div>
    
                        <div class="profile-information">
                            <h5>
                                AWARDS
                            </h5>
                            <div class="border-dot"></div>
    
                            <div class="information">
                                <h6>JUARA 3 NETWORKING</h6>
                                <a href="http://www.bsi.ac.id/">bsi.ac.id</a>
                            </div>
                        </div>
    
                        <div class="profile-information">
                            <h5>
                                CONTACT
                            </h5>
                            <div class="border-dot"></div>
    
                            <div class="information">
                                <div class="row">
                                    <div class="col-9">
                                        <h6>PHONE NUMBER</h6>
                                        <p>0812-1327-3727</p>
                                    </div>
                                    <div class="col-3">
                                        <i class="fas fa-phone-square-alt"></i>
                                    </div>
    
                                    <div class="col-9">
                                        <h6>EMAIL</h6>
                                        <a href="mailto:private.hartono@gmail.com">private.hartono@gmail.com</a>
                                    </div>
                                    <div class="col-3">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="profile-information">
                            <h5>
                                SOCIAL
                            </h5>
                            <div class="border-dot"></div>
    
                            <div class="information">
                                <div class="row">
                                    <div class="col-9">
                                        <h6>FACEBOOK</h6>
                                        <a href="https://www.facebook.com/hartono.selalu">華黃 (Hartono Wijaya)</a>
                                    </div>
                                    <div class="col-3">
                                        <img src="../Exam 1/img/facebook.svg" alt="">
                                    </div>
    
                                    <div class="col-9 mt-3">
                                        <h6>INSTAGRAM</h6>
                                        <a href="https://www.instagram.com/jishucimiko/">jishucimiko</a>
                                    </div>
                                    <div class="col-3 mt-3">
                                        <img src="../Exam 1/img/instagram.svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-9 experience">
                        <div id="job-title">
                            <h4>ARSITEKTUR DRAFTER</h4>
                        </div>
    
                        <div class="border-list"></div>
    
                        <div class="work-experience">
                            <div class="judul">
                                <h4><span class="icon">
                                        <i class="fas fa-briefcase"></i>
                                    </span>
                                    &nbsp; WORK EXPERIENCE
                                </h4>
                                <div class="border-dot"></div>
                            </div>
                            <div class="row content-experience">
                                <div class="col-4">
                                    <h6 class="judul-exp">CV KOBE PLASTIC</h6>
                                    <p class="content-exp">Mei 2014 - Jan 2015</p>
                                </div>
                                <div class="col-8">
                                    <h6 class="judul-exp">MOLDER DRAFTER</h6>
                                    <p class="content-exp">
                                    <ul id="list">
                                        <li>Membuat design mainan.</li>
                                        <li>Mengimplementasikan design ke molding.</li>
                                        <li>Mengubah design molding ke dalam G-Code.</li>
                                        <li>Membuat molding menggunakan mesin CNC.</li>
                                    </ul>
                                    </p>
                                </div>
    
                                <div class="col-4">
                                    <h6 class="judul-exp">PT JAYASAKTI SUKSES MANDIRI</h6>
                                    <p class="content-exp">Jun 2018 - Ags 2018</p>
                                </div>
                                <div class="col-8">
                                    <h6 class="judul-exp">DRAFTER</h6>
                                    <p class="content-exp">
                                    <ul id="list">
                                        <li>Membuat gambar kerja GreenHouse.</li>
                                        <li>Membuat gambar part-part GreenHouse.</li>
                                        <li>Menggambar Masterplan GreenHouse.</li>
                                        <li>Membuat design detail 2D & 3D.</li>
                                    </ul>
                                    </p>
                                </div>
    
                                <div class="col-4">
                                    <h6 class="judul-exp">PT BALADHIKA KARYA RAHARJA</h6>
                                    <p class="content-exp">Ags 2018 - Nov 2018</p>
                                </div>
                                <div class="col-8">
                                    <h6 class="judul-exp">SALES EXECUTIVE</h6>
                                    <p class="content-exp">
                                    <ul id="list">
                                        <li>Memasarkan dan menawarkan Property.</li>
                                        <li>Mencari Customer dan database baru.</li>
                                        <li>Membantu Customer dalam pengajuan akad kredit.</li>
                                    </ul>
                                    </p>
                                </div>
    
                                <div class="col-4">
                                    <h6 class="judul-exp">PT MAHKOTA SENTOSA UTAMA</h6>
                                    <p class="content-exp">Des 2018 - Sep 2019</p>
                                </div>
                                <div class="col-8">
                                    <h6 class="judul-exp">FIELD COLLECTION</h6>
                                    <p class="content-exp">
                                    <ul id="list">
                                        <li>Melakukan follow-up kepada customer Bank Nobu untuk melakukan akad
                                            kredit.</li>
                                        <li>Membantu dan melengkapi data customer untuk akad kredit Bank Nobu.</li>
                                        <li>Membantu Bank Nobu untuk melakukan akad kredit.</li>
                                    </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
    
                        <div class="education">
                            <div class="judul">
                                <h4><span class="icon">
                                        <i class="fas fa-book"></i>
                                    </span>
                                    &nbsp; EDUCATION
                                </h4>
                                <div class="border-dot"></div>
                            </div>
                            <div class="row content-experience">
                                <div class="col-4">
                                    <h6 class="judul-exp">SD</h6>
                                    <p class="content-exp">2002 - 2008</p>
                                </div>
                                <div class="col-8">
                                    <h6 class="judul-exp">ATISA DIPAMKARA</h6>
                                    <p class="content-exp">
                                        Kabupaten Tangerang, Indonesia
                                    </p>
                                </div>
    
                                <div class="col-4">
                                    <h6 class="judul-exp">SMP</h6>
                                    <p class="content-exp">2008 - 2011</p>
                                </div>
                                <div class="col-8">
                                    <h6 class="judul-exp">PERGURUAN BUDDHI</h6>
                                    <p class="content-exp">
                                        Tangerang, Indonesia
                                    </p>
                                </div>
    
                                <div class="col-4">
                                    <h6 class="judul-exp">SMK</h6>
                                    <p class="content-exp">2011 - 2014</p>
                                </div>
                                <div class="col-8">
                                    <h6 class="judul-exp">YUPPENTEK 1 (Teknik Mesin)</h6>
                                    <p class="content-exp">
                                        Tangerang, Indonesia
                                    </p>
                                </div>
    
                                <div class="col-4">
                                    <h6 class="judul-exp">Bootcamp</h6>
                                    <p class="content-exp">Nov 2019 - Mar 2020</p>
                                </div>
                                <div class="col-8">
                                    <h6 class="judul-exp">EDU-TECH (Fullstack Developer)</h6>
                                    <p class="content-exp">
                                        Tangerang, Indonesia
                                    </p>
                                </div>
    
                                <div class="col-4">
                                    <h6 class="judul-exp">Bootcamp</h6>
                                    <p class="content-exp">Oct 2020 - Present</p>
                                </div>
                                <div class="col-8">
                                    <h6 class="judul-exp">G2 Academy (Fullstack Web & Mobile Development)</h6>
                                    <p class="content-exp">
                                        Jakarta, Indonesia
                                    </p>
                                </div>
                            </div>
                        </div>
    
                        <div class="skills">
                            <div class="judul">
                                <h4><span class="icon">
                                        <i class="fas fa-lightbulb"></i>
                                    </span>
                                    &nbsp; SKILLS
                                </h4>
                                <div class="border-dot"></div>
                            </div>
                            <div class="row content-experience">
                                <h5 class="judul-exp">PROFESSIONAL SKILLS</h5>
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Microsoft Office
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator a">
                                            <input class="circle circle-black" id="lvl-11" type="button" value=""
                                                onclick="on(1,1)">
                                            <input class="circle circle-black" id="lvl-12" type="button" value=""
                                                onclick="on(1,2)">
                                            <input class="circle circle-black" id="lvl-13" type="button" value=""
                                                onclick="on(1,3)">
                                            <input class="circle circle-black" id="lvl-14" type="button" value=""
                                                onclick="on(1,4)">
                                            <input class="circle circle-black" id="lvl-15" type="button" value=""
                                                onclick="on(1,5)">
                                            <input class="circle" id="lvl-16" type="button" value=""
                                                onclick="on(1,6)">
                                            <input class="circle" id="lvl-17" type="button" value=""
                                                onclick="on(1,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Autocad 2D & 3D
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-21" type="button" value=""
                                                onclick="on(2,1)">
                                            <input class="circle circle-black" id="lvl-22" type="button" value=""
                                                onclick="on(2,2)">
                                            <input class="circle circle-black" id="lvl-23" type="button" value=""
                                                onclick="on(2,3)">
                                            <input class="circle circle-black" id="lvl-24" type="button" value=""
                                                onclick="on(2,4)">
                                            <input class="circle circle-black" id="lvl-25" type="button" value=""
                                                onclick="on(2,5)">
                                            <input class="circle circle-black" id="lvl-26" type="button" value=""
                                                onclick="on(2,6)">
                                            <input class="circle circle-black" id="lvl-27" type="button" value=""
                                                onclick="on(2,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Google SketchUp
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-31" type="button" value=""
                                                onclick="on(3,1)">
                                            <input class="circle circle-black" id="lvl-32" type="button" value=""
                                                onclick="on(3,2)">
                                            <input class="circle circle-black" id="lvl-33" type="button" value=""
                                                onclick="on(3,3)">
                                            <input class="circle circle-black" id="lvl-34" type="button" value=""
                                                onclick="on(3,4)">
                                            <input class="circle circle-black" id="lvl-35" type="button" value=""
                                                onclick="on(3,5)">
                                            <input class="circle" id="lvl-36" type="button" value=""
                                                onclick="on(3,6)">
                                            <input class="circle" id="lvl-37" type="button" value=""
                                                onclick="on(3,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                MasterCam
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-41" type="button" value=""
                                                onclick="on(4,1)">
                                            <input class="circle circle-black" id="lvl-42" type="button" value=""
                                                onclick="on(4,2)">
                                            <input class="circle circle-black" id="lvl-43" type="button" value=""
                                                onclick="on(4,3)">
                                            <input class="circle circle-black" id="lvl-44" type="button" value=""
                                                onclick="on(4,4)">
                                            <input class="circle circle-black" id="lvl-45" type="button" value=""
                                                onclick="on(4,5)">
                                            <input class="circle" id="lvl-46" type="button" value=""
                                                onclick="on(4,6)">
                                            <input class="circle" id="lvl-47" type="button" value=""
                                                onclick="on(4,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                FluidSim
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-51" type="button" value=""
                                                onclick="on(5,1)">
                                            <input class="circle circle-black" id="lvl-52" type="button" value=""
                                                onclick="on(5,2)">
                                            <input class="circle circle-black" id="lvl-53" type="button" value=""
                                                onclick="on(5,3)">
                                            <input class="circle circle-black" id="lvl-54" type="button" value=""
                                                onclick="on(5,4)">
                                            <input class="circle circle-black" id="lvl-55" type="button" value=""
                                                onclick="on(5,5)">
                                            <input class="circle circle-black" id="lvl-56" type="button" value=""
                                                onclick="on(5,6)">
                                            <input class="circle circle-black" id="lvl-57" type="button" value=""
                                                onclick="on(5,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                HTML & CSS
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-61" type="button" value=""
                                                onclick="on(6,1)">
                                            <input class="circle circle-black" id="lvl-62" type="button" value=""
                                                onclick="on(6,2)">
                                            <input class="circle circle-black" id="lvl-63" type="button" value=""
                                                onclick="on(6,3)">
                                            <input class="circle circle-black" id="lvl-64" type="button" value=""
                                                onclick="on(6,4)">
                                            <input class="circle circle-black" id="lvl-65" type="button" value=""
                                                onclick="on(6,5)">
                                            <input class="circle" id="lvl-66" type="button" value=""
                                                onclick="on(6,6)">
                                            <input class="circle" id="lvl-67" type="button" value=""
                                                onclick="on(6,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                JavaScript
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-71" type="button" value=""
                                                onclick="on(7,1)">
                                            <input class="circle circle-black" id="lvl-72" type="button" value=""
                                                onclick="on(7,2)">
                                            <input class="circle circle-black" id="lvl-73" type="button" value=""
                                                onclick="on(7,3)">
                                            <input class="circle circle-black" id="lvl-74" type="button" value=""
                                                onclick="on(7,4)">
                                            <input class="circle" id="lvl-75" type="button" value=""
                                                onclick="on(7,5)">
                                            <input class="circle" id="lvl-76" type="button" value=""
                                                onclick="on(7,6)">
                                            <input class="circle" id="lvl-77" type="button" value=""
                                                onclick="on(7,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                JQUERY
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-81" type="button" value=""
                                                onclick="on(8,1)">
                                            <input class="circle circle-black" id="lvl-82" type="button" value=""
                                                onclick="on(8,2)">
                                            <input class="circle circle-black" id="lvl-83" type="button" value=""
                                                onclick="on(8,3)">
                                            <input class="circle circle-black" id="lvl-84" type="button" value=""
                                                onclick="on(8,4)">
                                            <input class="circle" id="lvl-85" type="button" value=""
                                                onclick="on(8,5)">
                                            <input class="circle" id="lvl-86" type="button" value=""
                                                onclick="on(8,6)">
                                            <input class="circle" id="lvl-87" type="button" value=""
                                                onclick="on(8,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                PHP
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-91" type="button" value=""
                                                onclick="on(9,1)">
                                            <input class="circle circle-black" id="lvl-92" type="button" value=""
                                                onclick="on(9,2)">
                                            <input class="circle circle-black" id="lvl-93" type="button" value=""
                                                onclick="on(9,3)">
                                            <input class="circle" id="lvl-94" type="button" value=""
                                                onclick="on(9,4)">
                                            <input class="circle" id="lvl-95" type="button" value=""
                                                onclick="on(9,5)">
                                            <input class="circle" id="lvl-96" type="button" value=""
                                                onclick="on(9,6)">
                                            <input class="circle" id="lvl-97" type="button" value=""
                                                onclick="on(9,7)">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Laravel
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-101" type="button" value=""
                                                onclick="on(10,1)">
                                            <input class="circle circle-black" id="lvl-102" type="button" value=""
                                                onclick="on(10,2)">
                                            <input class="circle circle-black" id="lvl-103" type="button" value=""
                                                onclick="on(10,3)">
                                            <input class="circle circle-black" id="lvl-104" type="button" value=""
                                                onclick="on(10,4)">
                                            <input class="circle circle-black" id="lvl-105" type="button" value=""
                                                onclick="on(10,5)">
                                            <input class="circle" id="lvl-106" type="button" value=""
                                                onclick="on(10,6)">
                                            <input class="circle" id="lvl-107" type="button" value=""
                                                onclick="on(10,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Python
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-111" type="button" value=""
                                                onclick="on(11,1)">
                                            <input class="circle circle-black" id="lvl-112" type="button" value=""
                                                onclick="on(11,2)">
                                            <input class="circle" id="lvl-113" type="button" value=""
                                                onclick="on(11,3)">
                                            <input class="circle" id="lvl-114" type="button" value=""
                                                onclick="on(11,4)">
                                            <input class="circle" id="lvl-115" type="button" value=""
                                                onclick="on(11,5)">
                                            <input class="circle" id="lvl-116" type="button" value=""
                                                onclick="on(11,6)">
                                            <input class="circle" id="lvl-117" type="button" value=""
                                                onclick="on(11,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Express Js
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-121" type="button" value=""
                                                onclick="on(12,1)">
                                            <input class="circle circle-black" id="lvl-122" type="button" value=""
                                                onclick="on(12,2)">
                                            <input class="circle circle-black" id="lvl-123" type="button" value=""
                                                onclick="on(12,3)">
                                            <input class="circle circle-black" id="lvl-124" type="button" value=""
                                                onclick="on(12,4)">
                                            <input class="circle" id="lvl-125" type="button" value=""
                                                onclick="on(12,5)">
                                            <input class="circle" id="lvl-126" type="button" value=""
                                                onclick="on(12,6)">
                                            <input class="circle" id="lvl-127" type="button" value=""
                                                onclick="on(12,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Java
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-131" type="button" value=""
                                                onclick="on(13,1)">
                                            <input class="circle circle-black" id="lvl-132" type="button" value=""
                                                onclick="on(13,2)">
                                            <input class="circle circle-black" id="lvl-133" type="button" value=""
                                                onclick="on(13,3)">
                                            <input class="circle circle-black" id="lvl-134" type="button" value=""
                                                onclick="on(13,4)">
                                            <input class="circle" id="lvl-135" type="button" value=""
                                                onclick="on(13,5)">
                                            <input class="circle" id="lvl-136" type="button" value=""
                                                onclick="on(13,6)">
                                            <input class="circle" id="lvl-137" type="button" value=""
                                                onclick="on(13,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                UI/UX
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-141" type="button" value=""
                                                onclick="on(14,1)">
                                            <input class="circle circle-black" id="lvl-142" type="button" value=""
                                                onclick="on(14,2)">
                                            <input class="circle circle-black" id="lvl-143" type="button" value=""
                                                onclick="on(14,3)">
                                            <input class="circle" id="lvl-144" type="button" value=""
                                                onclick="on(14,4)">
                                            <input class="circle" id="lvl-145" type="button" value=""
                                                onclick="on(14,5)">
                                            <input class="circle" id="lvl-146" type="button" value=""
                                                onclick="on(14,6)">
                                            <input class="circle" id="lvl-147" type="button" value=""
                                                onclick="on(14,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                SEO
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-151" type="button" value=""
                                                onclick="on(15,1)">
                                            <input class="circle circle-black" id="lvl-152" type="button" value=""
                                                onclick="on(15,2)">
                                            <input class="circle" id="lvl-153" type="button" value=""
                                                onclick="on(15,3)">
                                            <input class="circle" id="lvl-154" type="button" value=""
                                                onclick="on(15,4)">
                                            <input class="circle" id="lvl-155" type="button" value=""
                                                onclick="on(15,5)">
                                            <input class="circle" id="lvl-156" type="button" value=""
                                                onclick="on(15,6)">
                                            <input class="circle" id="lvl-157" type="button" value=""
                                                onclick="on(15,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                SAP ERP
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-161" type="button" value=""
                                                onclick="on(16,1)">
                                            <input class="circle circle-black" id="lvl-162" type="button" value=""
                                                onclick="on(16,2)">
                                            <input class="circle circle-black" id="lvl-163" type="button" value=""
                                                onclick="on(16,3)">
                                            <input class="circle circle-black" id="lvl-164" type="button" value=""
                                                onclick="on(16,4)">
                                            <input class="circle" id="lvl-165" type="button" value=""
                                                onclick="on(16,5)">
                                            <input class="circle" id="lvl-166" type="button" value=""
                                                onclick="on(16,6)">
                                            <input class="circle" id="lvl-167" type="button" value=""
                                                onclick="on(16,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Adobe Photoshop
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-171" type="button" value=""
                                                onclick="on(17,1)">
                                            <input class="circle circle-black" id="lvl-172" type="button" value=""
                                                onclick="on(17,2)">
                                            <input class="circle circle-black" id="lvl-173" type="button" value=""
                                                onclick="on(17,3)">
                                            <input class="circle" id="lvl-174" type="button" value=""
                                                onclick="on(17,4)">
                                            <input class="circle" id="lvl-175" type="button" value=""
                                                onclick="on(17,5)">
                                            <input class="circle" id="lvl-176" type="button" value=""
                                                onclick="on(17,6)">
                                            <input class="circle" id="lvl-177" type="button" value=""
                                                onclick="on(17,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Adobe Illustrator
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-181" type="button" value=""
                                                onclick="on(18,1)">
                                            <input class="circle circle-black" id="lvl-182" type="button" value=""
                                                onclick="on(18,2)">
                                            <input class="circle circle-black" id="lvl-183" type="button" value=""
                                                onclick="on(18,3)">
                                            <input class="circle circle-black" id="lvl-184" type="button" value=""
                                                onclick="on(18,4)">
                                            <input class="circle circle-black" id="lvl-185" type="button" value=""
                                                onclick="on(18,5)">
                                            <input class="circle" id="lvl-186" type="button" value=""
                                                onclick="on(18,6)">
                                            <input class="circle" id="lvl-187" type="button" value=""
                                                onclick="on(18,7)">
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="row content-experience">
                                <h5 class="judul-exp">PERSONAL SKILLS</h5>
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Organisation
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-191" type="button" value=""
                                                onclick="on(19,1)">
                                            <input class="circle circle-black" id="lvl-192" type="button" value=""
                                                onclick="on(19,2)">
                                            <input class="circle circle-black" id="lvl-193" type="button" value=""
                                                onclick="on(19,3)">
                                            <input class="circle circle-black" id="lvl-194" type="button" value=""
                                                onclick="on(19,4)">
                                            <input class="circle circle-black" id="lvl-195" type="button" value=""
                                                onclick="on(19,5)">
                                            <input class="circle circle-black" id="lvl-196" type="button" value=""
                                                onclick="on(19,6)">
                                            <input class="circle" id="lvl-197" type="button" value=""
                                                onclick="on(19,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Communication
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-201" type="button" value=""
                                                onclick="on(20,1)">
                                            <input class="circle circle-black" id="lvl-202" type="button" value=""
                                                onclick="on(20,2)">
                                            <input class="circle circle-black" id="lvl-203" type="button" value=""
                                                onclick="on(20,3)">
                                            <input class="circle circle-black" id="lvl-204" type="button" value=""
                                                onclick="on(20,4)">
                                            <input class="circle circle-black" id="lvl-205" type="button" value=""
                                                onclick="on(20,5)">
                                            <input class="circle circle-black" id="lvl-206" type="button" value=""
                                                onclick="on(20,6)">
                                            <input class="circle" id="lvl-207" type="button" value=""
                                                onclick="on(20,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Interpersonal Skills
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-211" type="button" value=""
                                                onclick="on(21,1)">
                                            <input class="circle circle-black" id="lvl-212" type="button" value=""
                                                onclick="on(21,2)">
                                            <input class="circle circle-black" id="lvl-213" type="button" value=""
                                                onclick="on(21,3)">
                                            <input class="circle circle-black" id="lvl-214" type="button" value=""
                                                onclick="on(21,4)">
                                            <input class="circle circle-black" id="lvl-215" type="button" value=""
                                                onclick="on(21,5)">
                                            <input class="circle circle-black" id="lvl-216" type="button" value=""
                                                onclick="on(21,6)">
                                            <input class="circle" id="lvl-217" type="button" value=""
                                                onclick="on(21,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Multitasking
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-221" type="button" value=""
                                                onclick="on(22,1)">
                                            <input class="circle circle-black" id="lvl-222" type="button" value=""
                                                onclick="on(22,2)">
                                            <input class="circle circle-black" id="lvl-223" type="button" value=""
                                                onclick="on(22,3)">
                                            <input class="circle circle-black" id="lvl-224" type="button" value=""
                                                onclick="on(22,4)">
                                            <input class="circle circle-black" id="lvl-225" type="button" value=""
                                                onclick="on(22,5)">
                                            <input class="circle" id="lvl-226" type="button" value=""
                                                onclick="on(22,6)">
                                            <input class="circle" id="lvl-227" type="button" value=""
                                                onclick="on(22,7)">
                                        </div>
    
    
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Transferable Skills
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-231" type="button" value=""
                                                onclick="on(23,1)">
                                            <input class="circle circle-black" id="lvl-232" type="button" value=""
                                                onclick="on(23,2)">
                                            <input class="circle circle-black" id="lvl-233" type="button" value=""
                                                onclick="on(23,3)">
                                            <input class="circle circle-black" id="lvl-234" type="button" value=""
                                                onclick="on(23,4)">
                                            <input class="circle" id="lvl-235" type="button" value=""
                                                onclick="on(23,5)">
                                            <input class="circle" id="lvl-236" type="button" value=""
                                                onclick="on(23,6)">
                                            <input class="circle" id="lvl-237" type="button" value=""
                                                onclick="on(23,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Computer Skills
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-241" type="button" value=""
                                                onclick="on(24,1)">
                                            <input class="circle circle-black" id="lvl-242" type="button" value=""
                                                onclick="on(24,2)">
                                            <input class="circle circle-black" id="lvl-243" type="button" value=""
                                                onclick="on(24,3)">
                                            <input class="circle circle-black" id="lvl-244" type="button" value=""
                                                onclick="on(24,4)">
                                            <input class="circle" id="lvl-245" type="button" value=""
                                                onclick="on(24,5)">
                                            <input class="circle" id="lvl-246" type="button" value=""
                                                onclick="on(24,6)">
                                            <input class="circle" id="lvl-247" type="button" value=""
                                                onclick="on(24,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Problem-solving
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-251" type="button" value=""
                                                onclick="on(25,1)">
                                            <input class="circle circle-black" id="lvl-252" type="button" value=""
                                                onclick="on(25,2)">
                                            <input class="circle circle-black" id="lvl-253" type="button" value=""
                                                onclick="on(25,3)">
                                            <input class="circle circle-black" id="lvl-254" type="button" value=""
                                                onclick="on(25,4)">
                                            <input class="circle circle-black" id="lvl-255" type="button" value=""
                                                onclick="on(25,5)">
                                            <input class="circle" id="lvl-256" type="button" value=""
                                                onclick="on(25,6)">
                                            <input class="circle" id="lvl-257" type="button" value=""
                                                onclick="on(25,7)">
                                        </div>
    
                                        <div class="col-6">
                                            <p class="content-skill">
                                                Management Skills
                                            </p>
                                        </div>
                                        <div class="col-6 skill-indicator">
                                            <input class="circle circle-black" id="lvl-261" type="button" value=""
                                                onclick="on(26,1)">
                                            <input class="circle circle-black" id="lvl-262" type="button" value=""
                                                onclick="on(26,2)">
                                            <input class="circle circle-black" id="lvl-263" type="button" value=""
                                                onclick="on(26,3)">
                                            <input class="circle circle-black" id="lvl-264" type="button" value=""
                                                onclick="on(26,4)">
                                            <input class="circle" id="lvl-265" type="button" value=""
                                                onclick="on(26,5)">
                                            <input class="circle" id="lvl-266" type="button" value=""
                                                onclick="on(26,6)">
                                            <input class="circle" id="lvl-267" type="button" value=""
                                                onclick="on(26,7)">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    
        <footer>
            <div class="footer"></div>
        </footer>
    </section>
    </div>
    `
}






function btnClick(event) {
    event.preventDefault();

    let nama = document.querySelector('#name').value;
    let date = document.querySelector('#date').value;
    let address = document.querySelector('#address').value;
    let git = document.querySelector('#git').value;

    let newPerson = {
        "name": nama,
        "birth": date,
        "address": address,
        "git": git
    }
    dataDB.push(newPerson)

    // document.getElementById('nama').innerText = nama;
    // document.querySelector('#tanggal').innerHTML = date;
    // document.querySelector('#alamat').innerHTML = address;
    // document.querySelector('#gitAddress').innerHTML = "github.com/" + git;
    // document.querySelector('#gitAddress').setAttribute('href', "github.com/" + git);

}
