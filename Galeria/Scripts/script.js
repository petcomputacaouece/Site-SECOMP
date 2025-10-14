const pasta = "img/galeria/";
const qtdImagensPagina = 9;
let imgAtual = 1;
let qtdImagens = 30;

const containerGaleria = document.getElementById("div-ContainerGaleria");
const paginacao = document.getElementById("div-BotoesPaginacao");
const containerPopUp = document.getElementById("div-ContainerPopUp");

function exibirImagens() {
    containerGaleria.innerHTML = "";

    const inicio = (imgAtual - 1) * qtdImagensPagina;

    for (let i = 0; i < qtdImagens; i++) {
        const nomeImagem = `foto${i + 1}.png`;
        containerGaleria.innerHTML += `
            <div class="div-CardGaleria">
                <img 
                    src="${pasta + nomeImagem}" 
                    class="img-Galeria" 
                    alt="Imagem ${i + 1}" 
                    onclick="zoomImagem(${i})">
            </div>
        `;
    }

    paginacao.innerHTML = "";
    const totalPaginas = Math.ceil(qtdImagens / qtdImagensPagina)
    for (let i = 0; i < totalPaginas; i++) {
        paginacao.innerHTML += `<button onclick="mudarPagina(${i})">${i + 1}</button> `;
    }

}

exibirImagens();

function mudarPagina(pagina) {
    atual = pagina + 1;
    exibirImagens();
}

function zoomImagem(indice) {
    imgAtual = indice;
    document.getElementById("headerPrincipal").style.zIndex = "100";
    containerPopUp.style.display = "block";
    containerPopUp.classList.add("open");

    containerPopUp.innerHTML = `
        <img src="img/botao-fechar.png" style="height: 35px; float: right; cursor: pointer; margin: 50px auto;" id="bttFechar">
        <img src="${pasta}foto${(imgAtual + 1)}.png" class="img-Ampliada" style="width: 90%; max-height: 400px; object-fit: contain; border-radius: 10px; display: block; margin: 250px auto;">
        <img src="img/imgAnterior.png" style="height: 35px; float: left; cursor: pointer; margin: -500px auto;" id="bttAnterior">
        <img src="img/imgProximo.png" style="height: 35px; float: right; cursor: pointer; margin: -500px auto;" id="bttProximo">
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


containerGaleria.addEventListener("click", function (e) {
    if (e.target.classList.contains("img-Galeria")) {
        zoomImagem(imgAtual);
    }
});

window.addEventListener("DOMContentLoaded", () => {
    exibirImagens();
});

