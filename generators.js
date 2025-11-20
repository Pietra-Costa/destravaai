
function generateRoteiro(choices) {
  const roteiros = {
    'pedir desculpas': [
      "Escolha um momento tranquilo e privado",
      "Comece reconhecendo o erro sem justificativas",
      "Use 'eu sinto' para expressar seu arrependimento",
      "Pergunte como a pessoa se sente",
      "Ofereça uma ação concreta para reparar"
    ],
    'terminar relacionamento': [
      "Escolha um local neutro e privado",
      "Seja claro e direto sobre sua decisão",
      "Explique seus sentimentos com honestidade",
      "Evite dar falsas esperanças",
      "Permita que a pessoa expresse seus sentimentos"
    ],
    'pedir aumento': [
      "Agende uma reunião formal",
      "Prepare dados concretos de suas conquistas",
      "Apresente sua contribuição para a empresa",
      "Mencione pesquisa de mercado sobre salários",
      "Seja específico sobre o valor desejado"
    ],
    'recusar convite': [
      "Agradeça pelo convite sinceramente",
      "Seja claro e honesto sobre sua recusa",
      "Evite inventar desculpas elaboradas",
      "Ofereça uma alternativa, se possível",
      "Reforce o valor da relação"
    ],
    'cobrar alguém': [
      "Escolha o momento certo, sem pressão",
      "Seja específico sobre o que está cobrando",
      "Use fatos e não acusações",
      "Ouça a explicação da outra pessoa",
      "Busque uma solução em conjunto"
    ],
    default: [
      "Prepare-se mentalmente para a conversa",
      "Escolha o momento e local adequados",
      "Comece com empatia e clareza",
      "Ouça ativamente a resposta",
      "Busque um acordo ou compreensão mútua"
    ]
  };
  
  return roteiros[choices.conversationType] || roteiros.default;
}

function getStepDetails(index) {
  const details = [
    {
      tips: [
        '✓ Escolha um momento calmo, sem interrupções',
        '✓ Respire fundo 3 vezes antes de começar',
        '✓ Tenha clareza sobre seu objetivo principal'
      ]
    },
    {
      tips: [
        '✓ Use "eu sinto" ao invés de "você fez"',
        '✓ Mantenha contato visual e postura aberta',
        '✓ Fale com calma e pausadamente'
      ]
    },
    {
      tips: [
        '✓ Pause para deixar a pessoa processar',
        '✓ Escute ativamente sem interromper',
        '✓ Valide os sentimentos da outra pessoa'
      ]
    },
    {
      tips: [
        '✓ Seja específico sobre o que você precisa',
        '✓ Evite acusações ou generalizações',
        '✓ Demonstre empatia e compreensão'
      ]
    },
    {
      tips: [
        '✓ Dê espaço para resposta e diálogo',
        '✓ Esteja preparado para ouvir críticas',
        '✓ Mantenha-se aberto a diferentes perspectivas'
      ]
    }
  ];
  
  return details[index] || { 
    tips: [
      '✓ Continue com sinceridade',
      '✓ Mantenha a calma',
      '✓ Seja autêntico'
    ] 
  };
}

function generateFrase(choices) {
  const frases = {
    'pedir desculpas': `Olá, gostaria de conversar com você sobre algo importante. Eu percebi que te magoei e gostaria de me desculpar sinceramente.`,
    'terminar relacionamento': `Precisamos conversar sobre nossa relação. Eu sinto que chegamos em um ponto onde precisamos tomar uma decisão difícil.`,
    'pedir aumento': `Gostaria de agendar uma conversa para discutir minha posição e contribuição para a empresa.`,
    'recusar convite': `Obrigado(a) pelo convite! Eu realmente aprecio ter pensado em mim, mas infelizmente não vou conseguir participar desta vez.`,
    'cobrar alguém': `Oi, gostaria de conversar com você sobre algo que está me incomodando. Você tem um momento para conversarmos?`,
    default: `Olá, gostaria de conversar com você sobre algo que é importante para mim. Você tem um momento?`
  };
  
  return frases[choices.conversationType] || frases.default;
}

function generateSentimentos(choices) {
  const sentimentos = {
    'pedir desculpas': "Culpa, arrependimento, vulnerabilidade, esperança de reconciliação",
    'terminar relacionamento': "Tristeza, alívio, ansiedade, compaixão",
    'pedir aumento': "Nervosismo, confiança, expectativa, determinação",
    'recusar convite': "Desconforto, empatia, firmeza, respeito próprio",
    'cobrar alguém': "Frustração, assertividade, expectativa, justiça",
    default: "Ansiedade, vulnerabilidade, esperança, determinação"
  };
  
  return sentimentos[choices.conversationType] || sentimentos.default;
}

function generateEvitar(choices) {
  const evitar = {
    'pedir desculpas': ["Dar desculpas ou justificativas", "Minimizar o erro", "Culpar a outra pessoa", "Apressar o perdão"],
    'terminar relacionamento': ["Deixar esperanças falsas", "Culpar apenas o outro", "Terminar por mensagem", "Ser cruel ou frio"],
    'pedir aumento': ["Ameaçar sair", "Comparar-se negativamente", "Ser arrogante", "Pedir sem fundamentação"],
    'recusar convite': ["Inventar desculpas mirabolantes", "Deixar para última hora", "Ser vago demais", "Prometer algo incerto"],
    'cobrar alguém': ["Acusar agressivamente", "Fazer cobranças públicas", "Trazer outras pessoas", "Ser passivo-agressivo"],
    default: ["Acusações diretas", "Interrupções constantes", "Generalizações", "Tom agressivo"]
  };
  
  return evitar[choices.conversationType] || evitar.default;
}

function generateFinalizar(choices) {
  const finalizar = {
    'pedir desculpas': "Agradeça pela atenção e respeite o tempo da pessoa para processar. Deixe claro que está disponível para conversar mais.",
    'terminar relacionamento': "Agradeça pelos momentos compartilhados e deseje o melhor. Defina limites claros sobre o futuro da relação.",
    'pedir aumento': "Agradeça pela consideração e pergunte sobre os próximos passos. Mantenha profissionalismo independente da resposta.",
    'recusar convite': "Reforce que valoriza a amizade/relação e sugira um próximo encontro em outro momento, se apropriado.",
    'cobrar alguém': "Estabeleça acordos claros e prazos. Agradeça pela compreensão e mantenha o respeito mútuo.",
    default: "Agradeça pela atenção e abra espaço para continuação do diálogo. Valide os sentimentos da outra pessoa."
  };
  
  return finalizar[choices.conversationType] || finalizar.default;
}

function gerarCarta(choices) {
  return `Querido(a),

Escrevo esta carta porque algumas palavras são mais fáceis de expressar no papel. 

${choices.conversationType === 'pedir desculpas' ? 'Quero que saiba que reconheço meu erro e sinto muito por ter te magoado.' : 'Quero compartilhar algo importante contigo.'}

Espero que possamos conversar sobre isso em breve.

Com carinho,
[Seu nome]`;
}

function gerarPoema(choices) {
  return `Em palavras sinceras, meu coração revela,
O que sinto por dentro, numa conversa singela.
${choices.conversationType === 'pedir desculpas' ? 'Errei, reconheço, e peço perdão,' : 'É tempo de falar, abrir o coração,'}
Com honestidade e verdadeira emoção.`;
}

function gerarMusica(choices) {
  return `🎵 Sugestão de Música:

${choices.conversationType === 'pedir desculpas' ? '"Sorry" - Justin Bieber' : choices.conversationType === 'terminar relacionamento' ? '"Someone Like You" - Adele' : '"Don\'t Stop Me Now" - Queen'}

Uma música pode ajudar a expressar sentimentos que são difíceis de verbalizar.`;
}

function gerarDicaExtra(extraId, choices) {
  const dicas = {
    'Incluir presente simbólico': `💝 Presente Simbólico

Um presente pode expressar o que palavras não conseguem. Considere:

• Algo que tenha significado especial entre vocês
• Não precisa ser caro, mas sim significativo
• Uma lembrança de um momento importante
• Algo que mostre que você conhece a pessoa
• Um símbolo físico do seu sentimento

Lembre-se: o valor está no gesto e no simbolismo, não no preço.`,

    'Ser gentil': `🌸 Ser Gentil

A gentileza pode transformar conversas difíceis:

• Use tom de voz suave e acolhedor
• Escolha palavras que demonstrem carinho
• Seja paciente com as reações da pessoa
• Ofereça conforto quando apropriado
• Demonstre empatia genuína
• Evite ser condescendente

A gentileza não é fraqueza, é força controlada com compaixão.`,

    'Ser firme': `💪 Ser Firme

Firmeza com respeito é fundamental:

• Mantenha sua posição sem ser agressivo
• Use frases claras e diretas
• Não se desculpe por seus limites
• Mantenha contato visual e postura confiante
• Não abra espaço para negociação desnecessária
• Seja consistente com o que diz

Firmeza significa respeitar a si mesmo enquanto respeita o outro.`,

    'Evitar conflito': `☮️ Evitar Conflito

Estratégias para conversas harmoniosas:

• Escolha palavras não-confrontadoras
• Use "eu sinto" ao invés de "você fez"
• Mantenha tom calmo e neutro
• Busque pontos em comum
• Foque em soluções, não em culpados
• Respire fundo antes de responder

Evitar conflito não é evitar a conversa, é conduzí-la com maturidade.`,

    'Dar espaço para resposta': `🎤 Dar Espaço para Resposta

Escuta ativa transforma diálogos:

• Faça pausas após falar pontos importantes
• Evite interromper mesmo que discorde
• Faça perguntas abertas
• Demonstre que está ouvindo (acene, faça contato visual)
• Não planeje sua resposta enquanto o outro fala
• Valide os sentimentos expressos

Ouvir verdadeiramente é um presente raro e valioso.`,

    'Incluir abraço': `🤗 Incluir Abraço

O poder do contato físico respeitoso:

• Pergunte se a pessoa está confortável
• Ofereça um abraço sincero, não apressado
• Respeite se a pessoa recusar
• Um abraço pode dizer o que palavras não conseguem
• Timing é importante - escolha o momento certo
• Pode ser no início, no fim, ou quando necessário

Um abraço genuíno pode curar mais que mil palavras.`,

    'Oferecer ajuda prática': `🤝 Oferecer Ajuda Prática

Ações concretas demonstram compromisso:

• Seja específico sobre como pode ajudar
• Ofereça ações tangíveis, não vagas
• Pergunte: "O que posso fazer para ajudar?"
• Siga através com o que prometeu
• Exemplos: "Posso fazer X", "Que tal se eu Y?"
• Mostre disponibilidade real

Ajuda prática mostra que seu compromisso vai além das palavras.`,

    'Marcar próximo encontro': `📅 Marcar Próximo Encontro

Criar continuidade fortalece relações:

• Sugira data específica, não vaga
• Mostre que você valoriza o tempo juntos
• Deixe em aberto para ajustes
• Exemplo: "Que tal nos encontrarmos na sexta?"
• Demonstra compromisso com a relação
• Dá esperança de futuro positivo

Marcar um próximo encontro mostra que você acredita na continuidade.`,

    'Pedir desculpas explicitamente': `🙏 Pedir Desculpas Explicitamente

Pedidos de desculpas eficazes:

• Diga "Me desculpe" ou "Peço desculpas" claramente
• Seja específico sobre pelo que está se desculpando
• Não adicione "mas" após o pedido de desculpas
• Reconheça o impacto das suas ações
• Mostre arrependimento genuíno
• Pergunte como pode reparar

Um pedido de desculpas sincero abre portas para a cura.`
  };

  return dicas[extraId] || `Dica personalizada para: ${extraId}`;
}

