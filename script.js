document.addEventListener("DOMContentLoaded", function () {
  const botoes = document.querySelectorAll(".titulo-creepy");
  const textos = document.querySelectorAll(".conteudo-creepy");

  botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
      const conteudo = textos[index];
      conteudo.classList.toggle("ativo");
    });
  });

  const caixaPrincipal = document.querySelector(".caixa-principal");
  const caixaPerguntas = document.querySelector(".caixa-perguntas");
  const caixaAlternativas = document.querySelector(".caixa-alternativas");
  const textoResultado = document.querySelector(".texto-resultado");

  const perguntas = [
    {
      enunciado:
        "Aqui você poderá visualizar os resultados do nosso trabalho apresentado em tabelas e definições, permitindo uma análise clara e comparativa dos dados coletados.",
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
        "Tabela 2 - tabela auxiliar para o cálculo da estatística do teste de Bartlett.",
      alternativas: [
        {
          texto: "Próximo",
          afirmacao: "",
        },
      ],
      imagem:
        "https://i.pinimg.com/736x/83/c7/bc/83c7bcd507c91d89242739a738461152.jpg",
    },
    {
      enunciado:
        "O teste de Bartlett verificou se as variâncias entre os tratamentos eram homogêneas. Como χ² calculado = 3,35 < χ² tabelado = 9,48, a hipótese de homogeneidade (H₀) foi aceita, indicando que as variâncias são homogêneas. Assim, foi possível prosseguir com a ANOVA.",
      alternativas: [
        {
          texto: "Próximo",
          afirmacao: "",
        },
      ],
    },
    {
      enunciado:
        "Tabela 3 - ANOVA. O valor de F calculado para tratamentos (149,75) foi muito maior que o F crítico (3,26), indicando diferenças significativas entre os tratamentos ao nível de 5%. Já os efeitos de linhas e colunas não foram significativos (F < 3,26).",
      alternativas: [
        {
          texto: "Próximo",
          afirmacao: "",
        },
      ],
      imagem:
        "https://i.pinimg.com/736x/dc/c7/0b/dcc70b7c16b7a79862d9832c1055d6c5.jpg",
    },
    {
      enunciado:
        "CONCLUSÃO: A hipótese nula (H₀) de igualdade entre as médias dos tratamentos foi rejeitada. Portanto, há evidências de que pelo menos um tratamento apresentou média diferente das demais. O delineamento em quadrado latino, porém, não se mostrou o mais eficiente nas condições estudadas, possivelmente devido à baixa variação entre linhas e colunas.",
      alternativas: [
        {
          texto: "Finalizar",
          afirmacao: "",
        },
      ],
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
    caixaPerguntas.innerHTML = ""; 

    const enunciado = document.createElement("p");
    enunciado.textContent = perguntaAtual.enunciado;
    caixaPerguntas.appendChild(enunciado);

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
      "<p>Fim da visualização! Esperamos que as tabelas e definições tenham ajudado a compreender os resultados de forma mais clara e eficiente.</p>";
    caixaAlternativas.innerHTML = "";
    textoResultado.textContent = "";
  }

  mostraPergunta();
});
