function Personaje(nombre, edad, raza, clase, sexo, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.raza = raza;
    this.clase = clase;
    this.sexo = sexo;
    this.altura = altura;
}
  
let newPersonaje = [];

function personajeCrear(nombre, edad, raza, clase, sexo, altura) {
    let personaje = new Personaje(nombre, edad, raza, clase, sexo, altura);
    console.log(personaje);

    let arrayPersonaje = [
        {
        nombre: personaje.nombre,
        edad: personaje.edad,
        raza: personaje.raza,
        clase: personaje.clase,
        sexo: personaje.sexo,
        altura: personaje.altura,
        },
    ];

    const pjJson = JSON.stringify(arrayPersonaje);

    console.log(pjJson);
    newPersonaje.push(pjJson);
    localStorage.setItem("Pj", pjJson);

    let capturarPersonaje = localStorage.getItem("Pj");

    pjCapturado = typeof capturarPersonaje;

    console.log(pjJson);

    let resultado = document.getElementById("answer");
    let personajes = JSON.parse(capturarPersonaje)[0];

    

    resultado.textContent = `Personaje: ${personajes.nombre} || Edad: ${personajes.edad} || Raza: ${personajes.raza} || Clase: ${personajes.clase} || Sexo: ${personajes.sexo} || Altura: ${personajes.altura}`;

}

const formulario = document.querySelector("#form");

formulario.addEventListener("submit", validateForm);

function validateForm(e) {
    e.preventDefault();

    let nombre = document.getElementById("name").value;
    let edad = document.getElementById("edad").value;
    let raza = document.getElementById("raza").value;
    let clase = document.getElementById("clase").value;
    let sexo = document.getElementById("sexo").value;
    let altura = document.getElementById("altura").value;

    fetch('https://www.dnd5eapi.co/api/races/human')
    .then(response => response.json())
    .then((dataHuman) => {
        console.log(dataHuman)
        let infoApi = document.getElementById("info")
        if(raza === "Humano"){
            infoApi.innerHTML =`
                <p>${dataHuman.name}</p>
                <p>Velocidad: ${dataHuman.speed}</p>
                <p>Edad: ${dataHuman.age}</p>
                <p>Alineamiento: ${dataHuman.alignment}</p>
            `
            
        }
        
    })
    fetch('https://www.dnd5eapi.co/api/races/half-elf')
    .then(response => response.json())
    .then(dataHE => {
        console.log(dataHE)
        let infoApi = document.getElementById("info")
        if(raza === "Semi Elfo"){
            infoApi.innerHTML =`
                <p>${dataHE.name}</p>
                <p>Velocidad: ${dataHE.speed}</p>
                <p>Edad: ${dataHE.age}</p>
                <p>Alineamiento: ${dataHE.alignment}</p>
            `
            
        }
    })

    fetch('https://www.dnd5eapi.co/api/races/elf')
    .then(response => response.json())
    .then(dataElf => {
        console.log(dataElf)
        let infoApi = document.getElementById("info")
        if(raza === "Elfo"){
            infoApi.innerHTML =`
                <p>${dataElf.name}</p>
                <p>Velocidad: ${dataElf.speed}</p>
                <p>Edad: ${dataElf.age}</p>
                <p>Alineamiento: ${dataElf.alignment}</p>
            `
            
        }
    })

    fetch('https://www.dnd5eapi.co/api/races/half-orc')
    .then(response => response.json())
    .then(dataHO => {
        console.log(dataHO)
        let infoApi = document.getElementById("info")
        if(raza === "Semi Orco"){
            infoApi.innerHTML =`
                <p>${dataHO.name}</p>
                <p>Velocidad: ${dataHO.speed}</p>
                <p>Edad: ${dataHO.age}</p>
                <p>Alineamiento: ${dataHO.alignment}</p>
            `
            
        }
    })

    fetch('https://www.dnd5eapi.co/api/races/dwarf')
    .then(response => response.json())
    .then(dataDwarf => {
        console.log(dataDwarf)
        let infoApi = document.getElementById("info")
        if(raza === "Enano"){
            infoApi.innerHTML =`
                <p>${dataDwarf.name}</p>
                <p>Velocidad: ${dataDwarf.speed}</p>
                <p>Edad: ${dataDwarf.age}</p>
                <p>Alineamiento: ${dataDwarf.alignment}</p>
            `
            
        }
    })

    fetch('https://www.dnd5eapi.co/api/races/tiefling')
    .then(response => response.json())
    .then(dataTiefling => {
        console.log(dataTiefling)
        let infoApi = document.getElementById("info")
        if(raza === "Tiefling"){
            infoApi.innerHTML =`
                <p>${dataTiefling.name}</p>
                <p>Velocidad: ${dataTiefling.speed}</p>
                <p>Edad: ${dataTiefling.age}</p>
                <p>Alineamiento: ${dataTiefling.alignment}</p>
            `
            
        }
    })

    fetch('https://www.dnd5eapi.co/api/races/dragonborn')
    .then(response => response.json())
    .then(dataDragonborn => {
        console.log(dataDragonborn)
        let infoApi = document.getElementById("info")
        if(raza === "Draconiano"){
            infoApi.innerHTML =`
                <p>${dataDragonborn.name}</p>
                <p>Velocidad: ${dataDragonborn.speed}</p>
                <p>Edad: ${dataDragonborn.age}</p>
                <p>Alineamiento: ${dataDragonborn.alignment}</p>
            `
            
        }
    })

    fetch('https://www.dnd5eapi.co/api/races/gnome')
    .then(response => response.json())
    .then(dataGnome => {
        console.log(dataGnome)
        let infoApi = document.getElementById("info")
        if(raza === "Gnomo"){
            infoApi.innerHTML =`
                <p>${dataGnome.name}</p>
                <p>Velocidad: ${dataGnome.speed}</p>
                <p>Edad: ${dataGnome.age}</p>
                <p>Alineamiento: ${dataGnome.alignment}</p>
            `
            
        }
    })

    fetch('https://www.dnd5eapi.co/api/races/halfling')
    .then(response => response.json())
    .then(dataHalfling => {
        console.log(dataHalfling)
        let infoApi = document.getElementById("info")
        if(raza === "Mediano"){
            infoApi.innerHTML =`
                <p>${dataHalfling.name}</p>
                <p>Velocidad: ${dataHalfling.speed}</p>
                <p>Edad: ${dataHalfling.age}</p>
                <p>Alineamiento: ${dataHalfling.alignment}</p>
            `
            
        }
    })
    

    if (altura > 250) {
        let resultado = document.getElementById("answer");
        resultado.textContent = "No podes medir más de 250cm";
    } else if (altura < 50) {
        let resultado = document.getElementById("answer");
        resultado.textContent = "No podes medir menos de 50cm";
    } else if (edad < 5 || edad > 300) {
        let resultado = document.getElementById("answer");
        resultado.textContent = "Pone una edad realista para una aventura";
    } else {
        personajeCrear(nombre, edad, raza, clase, sexo, altura);
    }
}

const switchBtn = document.getElementById("switch")

    
switchBtn.addEventListener("click", () => {
    document.body.classList.remove("light");
    document.body.classList.toggle("dark");

    switchBtn.classList.toggle("active");

    // Local Storage

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark-mode", "true");
    }else{
        localStorage.setItem("dark-mode", "false");
    }
} );

if(localStorage.getItem("dark-mode") === "true"){

    document.body.classList.remove("light");
    document.body.classList.toggle("dark");

    switchBtn.classList.toggle("active");

}else{
    body.classList.remove("dark");
    body.classList.toggle("light");
}
    
// Api



    

fetch('https://www.dnd5eapi.co/api/races/half-elf')
    .then(response => response.json())
    .then(dataHE => {
        console.log(dataHE)
    })

fetch('https://www.dnd5eapi.co/api/races/elf')
    .then(response => response.json())
    .then(dataElf => {
        console.log(dataElf)
    })

fetch('https://www.dnd5eapi.co/api/races/half-orc')
    .then(response => response.json())
    .then(dataHO => {
        console.log(dataHO)
    })

fetch('https://www.dnd5eapi.co/api/races/dwarf')
    .then(response => response.json())
    .then(dataDwarf => {
        console.log(dataDwarf)
    })

fetch('https://www.dnd5eapi.co/api/races/tiefling')
    .then(response => response.json())
    .then(dataTiefling => {
        console.log(dataTiefling)
    })

fetch('https://www.dnd5eapi.co/api/races/dragonborn')
    .then(response => response.json())
    .then(dataDragonborn => {
        console.log(dataDragonborn)
    })

fetch('https://www.dnd5eapi.co/api/races/gnome')
    .then(response => response.json())
    .then(dataGnome => {
        console.log(dataGnome)
    })

fetch('https://www.dnd5eapi.co/api/races/halfling')
    .then(response => response.json())
    .then(dataHalfling => {
        console.log(dataHalfling)
    })

