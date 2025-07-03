function mostrarTexto(index){
    const titulos = document.querySelectorAll(".btnCronograma");
    const textos = document.querySelectorAll(".texto");

    titulos.forEach((titulo, i) =>{
        if(i == index){
            titulo.classList.add("ativo");
            textos[i].style.display = "block";
        }
        else{
            titulo.classList.remove("ativo");
            textos[i].style.display = "none";
        }
    });
}

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 150) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}