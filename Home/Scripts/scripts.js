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