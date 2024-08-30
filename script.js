const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está começando uma startup e encontra uma nova ferramenta de IA que promete otimizar o atendimento ao cliente. Qual é sua primeira reação?",
        alternativas: [
            {
                texto: "Isso pode ser um grande avanço para nosso atendimento!",
                afirmacao: "Você vê a IA como uma forma de escalar seu atendimento e melhorar a experiência do cliente."
            },
            {
                texto: "Não confio totalmente em uma máquina para lidar com nossos clientes.",
                afirmacao: "Você prefere manter o atendimento mais pessoal e vê a IA como uma ferramenta complementar."
            }
        ]
    },
    {
        enunciado: "Você está apresentando sua startup a investidores e decide incluir uma demonstração da IA em ação. Como você faz isso?",
        alternativas: [
            {
                texto: "Mostra uma simulação de como a IA pode responder perguntas comuns de clientes.",
                afirmacao: "Você acredita que demonstrar a eficiência da IA em situações práticas ajuda a conquistar investidores."
            },
            {
                texto: "Apresenta dados e estudos sobre a eficácia da IA no mercado.",
                afirmacao: "Você se foca mais em dados e evidências para convencer investidores da viabilidade da tecnologia."
            }
        ]
    },
    {
        enunciado: "Seu startup acaba de lançar uma nova funcionalidade baseada em IA. Qual é a sua abordagem para a comunicação com os clientes sobre essa novidade?",
        alternativas: [
            {
                texto: "Cria uma campanha de marketing destacando os benefícios e inovações que a IA traz.",
                afirmacao: "Você quer que os clientes vejam a IA como uma vantagem competitiva e um diferencial de mercado."
            },
            {
                texto: "Oferece uma série de webinars e tutoriais para mostrar como usar a nova funcionalidade.",
                afirmacao: "Você acredita que a educação e o suporte são fundamentais para a aceitação da nova tecnologia."
            }
        ]
    },
    {
        enunciado: "Durante o processo de desenvolvimento, você percebe que a IA está gerando resultados inesperados. O que você faz?",
        alternativas: [
            {
                texto: "Ajusta os parâmetros e continua testando até que os resultados estejam conforme o esperado.",
                afirmacao: "Você está disposto a iterar e ajustar para obter o melhor desempenho da IA."
            },
            {
                texto: "Revisa o código com a equipe para identificar e corrigir qualquer possível erro.",
                afirmacao: "Você acredita que a solução pode estar em erros de implementação e preferiria resolver isso colaborativamente."
            }
        ]
    },
    {
        enunciado: "Seu produto de IA está ganhando popularidade, mas você nota que alguns usuários estão preocupados com a privacidade dos dados. Como você reage?",
        alternativas: [
            {
                texto: "Implementa medidas de segurança adicionais e comunica abertamente sobre as práticas de privacidade.",
                afirmacao: "Você acredita que a transparência e a segurança são essenciais para manter a confiança dos usuários."
            },
            {
                texto: "Desenvolve uma política de privacidade mais detalhada e oferece opções de controle aos usuários.",
                afirmacao: "Você quer garantir que os usuários se sintam no controle e confortáveis com o uso de seus dados."
            }
        ]
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
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "O futuro das startups em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
