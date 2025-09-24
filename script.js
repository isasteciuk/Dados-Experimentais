document.addEventListener("DOMContentLoaded", function() {
    const botoes = document.querySelectorAll(".titulo-creepy"); 
    const textos = document.querySelectorAll(".conteudo-creepy"); 
  
    
    botoes.forEach((botao, index) => {
      botao.addEventListener("click", () => {
        const conteudo = textos[index];
  
        
        if (conteudo.classList.contains("ativo")) {
          conteudo.classList.remove("ativo");
        } else {
         
          conteudo.classList.add("ativo");
        }
      });
    });
  });








const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Aqui você poderá visualizar os resultados do nosso trabalho apresentados em dois tipos de gráficos, permitindo uma análise clara e comparativa dos dados coletados.",
        alternativas: [
            {
                texto: "Visualizar",
                afirmacao: "",
            }
        ],
        imagem: "https://i.pinimg.com/736x/47/de/c9/47dec970dcd3f83b3159640d4b8eca6a.jpg"
    },
    {
        enunciado: "enunciado",
        alternativas: [
            {
                texto: "próximo",
                afirmacao: "",
            },
           
        ],
        imagem: "https://i.pinimg.com/736x/07/e2/e3/07e2e30f5dfd1831b91b02f1ce8a9cfe.jpg" 
    },
    {
        enunciado: "enunciado",
        alternativas: [
            {
                texto: "resultado",
                afirmacao: "",
            },
        ],
        imagem: "https://i.pinimg.com/736x/03/5c/ea/035cea018aebdb2de6cdc31cbbf7b8de.jpg"
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = ""; 
   
    const enunciado = document.createElement("p");
    enunciado.textContent = perguntaAtual.enunciado;
    caixaPerguntas.appendChild(enunciado);
    
   
    if (perguntaAtual.imagem) {
        const img = document.createElement("img");
        img.src = perguntaAtual.imagem;
        img.alt = "Imagem relacionada";
        caixaPerguntas.appendChild(img);
    }
    
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Com base na interpretação dos gráficos, foi possível identificar padrões e tendências importantes, o que contribui para uma melhor compreensão dos resultados e embasa decisões mais assertivas para etapas futuras do projeto.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = ""; 

   
    const enunciado = document.createElement("p");
    enunciado.textContent = perguntaAtual.enunciado;
    caixaPerguntas.appendChild(enunciado);
    
  
    if (perguntaAtual.imagem) {
        const img = document.createElement("img");
        img.src = perguntaAtual.imagem;
        img.alt = "Imagem relacionada";
        img.style.width = "280px"; 
        img.style.height = "auto"; 
        caixaPerguntas.appendChild(img);
    }
    
    caixaAlternativas.textContent = ""; 
    mostraAlternativas();
}
