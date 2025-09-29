const diasMinicurso = {
    1: [
        { img: "img/minicursos/laura.png", ministrante: "LAURA", titulo: "Caçando o Wumpus", local: "Labcomp - Bloco P", horario: "", sobre: "O minicurso tem como objetivo introduzir o conceito de agentes inteligentes através de um ambiente de simulação baseado no clássico jogo 'Hunt the Wumpus'. Durante o curso, serão explorados alguns tópicos essenciais de Inteligência Artificial, como a modelagem de agentes autônomos, estratégias para tomada de decisão em ambientes incertos e algoritmos de busca e otimização, proporcionando uma experiência prática no desenvolvimento de um modelo de aprendizado por reforço" },
        { img: "img/minicursos/gemp.png", ministrante: "GEMP", titulo: "Algoritmos de Busca em Strings", local: "PPGCC", horario: "", sobre: "Explorar técnicas eficientes para a busca e manipulação de substrings com foco em aplicações voltadas para programação competitiva e maratonas de programação." },
        { img: "img/minicursos/bruno.png", ministrante: "Bruno Ribeiro", titulo: "Experiência do Usuário (UX)", local: "Online", horario: "", sobre: "Quer criar produtos que realmente façam sentido para as pessoas? Que resolvam problemas de verdade e ofereçam experiências inesquecíveis? Então vamos nessa! Neste minicurso, você vai mergulhar no universo do UX Design de forma prática e acessível, mesmo que esteja começando do zero. Vamos explorar os princípios fundamentais do design centrado no usuário, entender o que está por trás de uma boa experiência e descobrir como aplicar isso no dia a dia de projetos digitais" }
    ],
    2: [
        { img: "img/minicursos/laura.png", ministrante: "LAURA", titulo: "Caçando o Wumpus", local: "Labcomp - Bloco P", horario: "", sobre: "O minicurso tem como objetivo introduzir o conceito de agentes inteligentes através de um ambiente de simulação baseado no clássico jogo 'Hunt the Wumpus'. Durante o curso, serão explorados alguns tópicos essenciais de Inteligência Artificial, como a modelagem de agentes autônomos, estratégias para tomada de decisão em ambientes incertos e algoritmos de busca e otimização, proporcionando uma experiência prática no desenvolvimento de um modelo de aprendizado por reforço" },
        { img: "img/minicursos/larces.png", ministrante: "LARCES", titulo: "Introdução ao Linux: Uma Abordagem Prática", local: "Labcomp - Bloco P", horario: "", sobre: "Este minicurso foi criado para desmistificar o Linux, mostrando que, apesar de sua curva de aprendizado, ele é um conhecimento fundamental para nós, alunos de Computação. Com uma abordagem prática, iremos explorar os principais comandos, a estrutura de diretórios do sistema, permissões de arquivos e outros conceitos essenciais, fornecendo a base necessária para explorar e utilizar o Linux de forma eficiente." },
        { img: "img/minicursos/bruno.png", ministrante: "Bruno Ribeiro", titulo: "Experiência do Usuário (UX)", local: "Online", horario: "", sobre: "Quer criar produtos que realmente façam sentido para as pessoas? Que resolvam problemas de verdade e ofereçam experiências inesquecíveis? Então vamos nessa! Neste minicurso, você vai mergulhar no universo do UX Design de forma prática e acessível, mesmo que esteja começando do zero. Vamos explorar os princípios fundamentais do design centrado no usuário, entender o que está por trás de uma boa experiência e descobrir como aplicar isso no dia a dia de projetos digitais" }
    ],
    3: [
        { img: "img/minicursos/gabrielwilis.png", ministrante: "Gabriel Willis", titulo: "Aplicações de Python - Crawler, Chatbot, Integração e até Criação de Sites", local: "Online", horario: "", sobre: "Gabriel Willis Pinheiro Guerra é formado em Ciência da Computação pela PUC-SP, e também atua como consultor de Engenharia de Dados e professor de programação e desenvolvimento de jogos." },
        { img: "img/minicursos/gabrielnovaes.png", ministrante: "Gabriel Novais", titulo: " Front-end do Zero: Dê os Primeiros Passos Para Sua Carreira como Dev", local: "Online", horario: "", sobre: "Neste minicurso serão introduzidos os fundamentos necessários para iniciar sua carreira como desenvolvedor web. O curso focará nos conceitos essenciais de HTML, CSS e JavaScript.No primeiro dia, será apresentado o GitHub para versionamento de código, além das tecnologias principais do curso: HTML5 e CSS3. Você aprenderá na prática como essas tecnologias funcionam em conjunto e se preparará para o mercado de trabalho." }
    ],
    4: [
        { img: "img/minicursos/gabrielwilis.png", ministrante: "Gabriel Willis", titulo: "Aplicações de Python - Crawler, Chatbot, Integração e até Criação de Sites", local: "Online", horario: "", sobre: "Gabriel Willis Pinheiro Guerra é formado em Ciência da Computação pela PUC-SP, e também atua como consultor de Engenharia de Dados e professor de programação e desenvolvimento de jogos." }
    ]
};


const containerMinicursos = document.getElementById("div-InfoMinicurso");
const containerPopUp = document.getElementById("div-popUpInfo");

function mostrarMinicurso(dia) {

    containerMinicursos.innerHTML = "";

    const minicursos = diasMinicurso[dia];
    for (let i = 0; i < minicursos.length; i++) {
        containerMinicursos.innerHTML += `
            <div class="div-CardMinicurso">
                <img src="${minicursos[i].img}" alt="" class="img-InfoMinicurso">
                <h3 style="color: #037DC3;">${minicursos[i].ministrante}</h3>
                <img src="img/simbolo-de-informacao.png" alt="" class="img-bttInfoMinicurso" data-index="${i}">
                <h3 style="margin-top: 10px;">${minicursos[i].titulo}</h3>
            </div>
        `;
    }

    const bttsInfo = document.getElementsByClassName("img-bttInfoMinicurso");
    for (let i = 0; i < bttsInfo.length; i++) {
        bttsInfo[i].addEventListener("click", function () {
            abrirInfos(minicursos[i]);
        });
    }
}


const dia = 1;
const minicursosDoDia = diasMinicurso[dia];

function abrirInfos(minicurso) {
    containerPopUp.style.display = "block";
    containerPopUp.classList.add("open");
    containerPopUp.innerHTML = `
        <img src="img/x.png" style="height: 20px; float: right; cursor: pointer;" id="bttFechar">
        <h2>Sobre</h2>
        <p>${minicurso.sobre}</p>
        <h3>Local</h3>
        <p>${minicurso.local}</p>
        <h3>Horário</h3>
        <p>${minicurso.horario}</p>
    `;

    document.getElementById("bttFechar").addEventListener("click", fecharInfo);
}


function fecharInfo() {
    containerPopUp.style.display = "none";
}

const botoesDia = document.getElementsByClassName("bttDiaMinicurso");

for (let i = 0; i < botoesDia.length; i++) {
    botoesDia[i].addEventListener("click", function () {
        for (let j = 0; j < botoesDia.length; j++) {
            botoesDia[j].classList.remove("ativo");
        }

        this.classList.add("ativo");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarMinicurso(1);
});






