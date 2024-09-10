const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como o desmatamento afeta a biodiversidade?",
        alternativas: [
            {
                texto: "O desmatamento destrói habitats naturais, levando à extinção de espécies que dependem dessas áreas para sobreviver.",
                afirmacao: "Você entende que o desmatamento tem um impacto devastador na biodiversidade, ameaçando a sobrevivência de muitas espécies."
            },
            {
                texto: "A perda de biodiversidade é uma consequência direta da destruição dos ecossistemas naturais.",
                afirmacao: "Você reconhece que a destruição de ecossistemas naturais leva à perda irreparável de biodiversidade."
            }
        ]
    },
    {
        enunciado: "Quais são as principais causas do desmatamento na Amazônia?",
        alternativas: [
            {
                texto: "A expansão agrícola é uma das principais causas, com áreas sendo desmatadas para o cultivo de soja e criação de gado.",
                afirmacao: "Você acredita que a expansão agrícola é um dos principais fatores que impulsionam o desmatamento na Amazônia."
            },
            {
                texto: "A pressão econômica pela expansão agrícola está acelerando o desmatamento na Amazônia.",
                afirmacao: "Você identifica a pressão econômica como um fator chave que contribui para o desmatamento na Amazônia."
            }
        ]
    },
    {
        enunciado: "Quais são as possíveis soluções para combater o desmatamento?",
        alternativas: [
            {
                texto: "A implementação de políticas de conservação, como a criação de reservas naturais, pode ajudar a proteger áreas críticas.",
                afirmacao: "Você acredita que políticas de conservação são essenciais para proteger áreas críticas e combater o desmatamento."
            },
            {
                texto: "Políticas de conservação eficazes são essenciais para preservar o que resta das florestas.",
                afirmacao: "Você considera que políticas de conservação bem implementadas são vitais para a preservação das florestas remanescentes."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Suas ações mudam o mundo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent  = "";
}

mostraPergunta();

