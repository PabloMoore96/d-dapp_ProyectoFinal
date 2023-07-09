
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
    
const dados = document.getElementById("dados");
const personaje = document.getElementById("personaje")

dados.addEventListener(onclick="location.href='./dados.html';")