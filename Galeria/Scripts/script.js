const pasta = "img/galeria/";
const qtdImagensPagina = 8;
let imgAtual = 1;
let qtdImagens = 30;
let paginaAtual = 0;

const containerGaleria = document.getElementById("div-ContainerGaleria");
const paginacao = document.getElementById("div-BotoesPaginacao");
const containerPopUp = document.getElementById("div-ContainerPopUp");

function exibirImagens() {
    containerGaleria.innerHTML = "";

    const inicio = paginaAtual * qtdImagensPagina;
    const fim = inicio + qtdImagensPagina;

    for (let i = inicio; i < fim && i < qtdImagens; i++) {
        const nomeImagem = `foto${i + 1}.jpg`;
        containerGaleria.innerHTML += `
        <div class="div-CardGaleria">
            <img 
                src="${pasta + nomeImagem}" 
                class="img-Galeria" 
                alt="Imagem ${i + 1}" 
                onclick="zoomImagem(${i})" >
        </div>
    `;
    }

    paginacao.innerHTML = "";
    const totalPaginas = Math.ceil(qtdImagens / qtdImagensPagina)
    for (let i = 0; i < totalPaginas; i++) {
        paginacao.innerHTML += `
            <button onclick="mudarPagina(${i})" ${i === paginaAtual ? 'style="font-weight:bold;"' : ''} class="bttMudarPagina">
                ${i + 1}
            </button>
        `;
    }

}

exibirImagens();

function mudarPagina(novaPagina) {
    paginaAtual = novaPagina;
    exibirImagens();
}

function zoomImagem(indice) {
    imgAtual = indice;
    document.getElementById("headerPrincipal").style.zIndex = "100";
    containerPopUp.style.display = "block";
    containerPopUp.classList.add("open");

    containerPopUp.innerHTML = `
        <img src="img/botao-fechar.png" style="height: 35px; float: right; cursor: pointer; margin: 30px auto;" id="bttFechar">
        <img src="${pasta}foto${(imgAtual + 1)}.jpg" class="img-Ampliada" style="width: 90%; max-height: 700px; object-fit: contain; border-radius: 10px; display: block; margin: 50px auto;">
        <img src="img/imgAnterior.png" style="height: 35px; float: left; cursor: pointer; margin: -400px auto;" id="bttAnterior">
        <img src="img/imgProximo.png" style="height: 35px; float: right; cursor: pointer; margin: -400px auto;" id="bttProximo">
        <img src="img/imgBttDownload.png" style="height: 50px; display: block; cursor: pointer; margin: auto;" id="bttDownload" onclick="baixarImagem()">
    `;

    const bttFechar = document.getElementById("bttFechar");
    bttFechar.addEventListener("click", function () {
        containerPopUp.style.display = "none";
        containerPopUp.classList.remove("open");
    });

    const bttAnterior = document.getElementById("bttAnterior");
    bttAnterior.addEventListener("click", function () {
        if (imgAtual > 0) {
            zoomImagem(imgAtual - 1);
        }
    })

    const bttProximo = document.getElementById("bttProximo");
    bttProximo.addEventListener("click", function () {
        if (imgAtual < qtdImagens - 1) {
            zoomImagem(imgAtual + 1);
        }
    })
}

function baixarImagem(indice) {
    const img = containerPopUp.querySelector(".img-Ampliada"); // pega a imagem do modal
    if (!img || !img.src) return;
    const link = document.createElement("a");
    link.href = img.src;
    link.download = img.src.split("/").pop();
    link.click();
}


containerGaleria.addEventListener("click", function (e) {
    if (e.target.classList.contains("img-Galeria")) {
        zoomImagem(imgAtual);
    }
});

window.addEventListener("DOMContentLoaded", () => {
    exibirImagens();
});
