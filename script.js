document.addEventListener("DOMContentLoaded", function () {
  /* ===== 🎭 ACORDEÃO (abre/fecha texto) ===== */
  const botoes = document.querySelectorAll(".titulo-creepy");
  const textos = document.querySelectorAll(".conteudo-creepy");

  botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
      const conteudo = textos[index];
      conteudo.classList.toggle("ativo");
    });
  });

  /* ===== 📊 QUIZ INTERATIVO DE GRÁFICOS ===== */
  const caixaPrincipal = document.querySelector(".caixa-principal");
  const caixaPerguntas = document.querySelector(".caixa-perguntas");
  const caixaAlternativas = document.querySelector(".caixa-alternativas");
  const textoResultado = document.querySelector(".texto-resultado");

  const perguntas = [
    {
      enunciado:
        "Aqui você poderá visualizar os resultados do nosso trabalho apresentados em dois tipos de gráficos, permitindo uma análise clara e comparativa dos dados coletados.",
      alternativas: [
        {
          texto: "Visualizar",
          afirmacao: "",
        },
      ],
      imagem:
        "https://i.pinimg.com/736x/47/de/c9/47dec970dcd3f83b3159640d4b8eca6a.jpg",
    },
    {
      enunciado:
        "Tabela 1 - Massa seca total da muda de 5 substratos diferentes (representados por letras) em gramas. Cada tratamento foi aplicado uma única vez em cada linha e em cada coluna, formando um arranjo 5x5 balanceado.",
      alternativas: [
        {
          texto: "Próximo",
          afirmacao: "",
        },
      ],
      imagem:
        "https://i.pinimg.com/736x/d0/d9/f0/d0d9f0084acb57d5047cdbdd668a3e90.jpg",
    },
    {
      enunciado:
        "Com base na interpretação dos gráficos, foi possível identificar padrões e tendências importantes, o que contribui para uma melhor compreensão dos resultados e embasa decisões mais assertivas para etapas futuras do projeto.",
      alternativas: [
        {
          texto: "Finalizar",
          afirmacao: "",
        },
      ],
      imagem:
        "https://i.pinimg.com/736x/03/5c/ea/035cea018aebdb2de6cdc31cbbf7b8de.jpg",
    },
  ];

  let atual = 0;
  let perguntaAtual;

  function mostraPergunta() {
    if (atual >= perguntas.length) {
      mostraResultado();
      return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.innerHTML = ""; // limpa conteúdo anterior

    const enunciado = document.createElement("p");
    enunciado.textContent = perguntaAtual.enunciado;
    caixaPerguntas.appendChild(enunciado);

    // Adiciona imagem, se houver
    if (perguntaAtual.imagem) {
      const img = document.createElement("img");
      img.src = perguntaAtual.imagem;
      img.alt = "Imagem relacionada";
      img.style.width = "280px";
      img.style.height = "auto";
      img.style.borderRadius = "8px";
      img.style.marginTop = "10px";
      caixaPerguntas.appendChild(img);
    }

    caixaAlternativas.innerHTML = "";
    mostraAlternativas();
  }

  function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
      const botao = document.createElement("button");
      botao.textContent = alternativa.texto;
      botao.addEventListener("click", () => respostaSelecionada());
      caixaAlternativas.appendChild(botao);
    }
  }

  function respostaSelecionada() {
    atual++;
    mostraPergunta();
  }

  function mostraResultado() {
    caixaPerguntas.innerHTML =
      "<p>🎉 Fim da visualização! Esperamos que os gráficos tenham ajudado a compreender os resultados de forma mais clara.</p>";
    caixaAlternativas.innerHTML = "";
    textoResultado.textContent = "";
  }

  mostraPergunta();
});
