
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
    'dizer não': [
      "Prepare-se mentalmente para ser firme",
      "Agradeça pela consideração",
      "Decline de forma clara e educada",
      "Não se justifique excessivamente",
      "Mantenha sua decisão com gentileza"
    ],
    'falar que está magoado': [
      "Escolha um momento calmo para conversar",
      "Use 'eu me senti' ao invés de 'você fez'",
      "Explique a situação específica que te magoou",
      "Peça validação dos seus sentimentos",
      "Busque uma resolução construtiva juntos"
    ],
    'colocar limites': [
      "Defina claramente qual é o limite",
      "Explique por que esse limite é importante",
      "Seja firme mas respeitoso",
      "Estabeleça consequências se necessário",
      "Mantenha consistência ao aplicar o limite"
    ],
    'dar feedback difícil': [
      "Prepare exemplos concretos",
      "Comece reconhecendo pontos positivos",
      "Apresente o feedback de forma clara",
      "Ofereça suporte para melhoria",
      "Estabeleça próximos passos juntos"
    ],
    'conversar sobre ciúmes': [
      "Reconheça que é seu sentimento",
      "Explique os gatilhos específicos",
      "Evite acusar ou controlar",
      "Peça reasseguramento se necessário",
      "Trabalhem juntos na confiança"
    ],
    'resolver mal-entendido': [
      "Reconheça que houve confusão",
      "Explique sua interpretação da situação",
      "Ouça ativamente a versão do outro",
      "Identifiquem onde houve divergência",
      "Alinhem entendimento para o futuro"
    ],
    'conflito entre amigos': [
      "Proponha conversar com calma",
      "Reafirme o valor da amizade",
      "Exponham as questões com respeito",
      "Ouçam um ao outro sem interromper",
      "Busquem reconciliação e novos acordos"
    ],
    default: [
      "Prepare-se mentalmente para a conversa",
      "Escolha o momento e local adequados",
      "Comece com empatia e clareza",
      "Ouça ativamente a resposta",
      "Busque um acordo ou compreensão mútua"
    ]
  };
  
  const tipo = choices.conversationType ? choices.conversationType.toLowerCase() : 'default';
  return roteiros[tipo] || roteiros.default;
}

function getStepDetails(index, conversationType) {
  const tipo = conversationType ? conversationType.toLowerCase() : 'default';
  
  const detailsPorTipo = {
    'pedir desculpas': [
      {
        tips: [
          '✓ Evite horários de estresse ou cansaço',
          '✓ Prepare-se emocionalmente para vulnerabilidade',
          '✓ Tenha clareza sobre o que você fez de errado'
        ]
      },
      {
        tips: [
          '✓ Diga "Me desculpe por [ação específica]"',
          '✓ Não use "mas" após o pedido de desculpas',
          '✓ Reconheça o impacto, não apenas a ação'
        ]
      },
      {
        tips: [
          '✓ Seja honesto sobre seus sentimentos de culpa',
          '✓ Demonstre que entende a dor causada',
          '✓ Evite se justificar ou dar desculpas'
        ]
      },
      {
        tips: [
          '✓ Pergunte "Como você se sentiu quando isso aconteceu?"',
          '✓ Não minimize a dor da pessoa',
          '✓ Valide os sentimentos expressos'
        ]
      },
      {
        tips: [
          '✓ Proponha mudanças específicas de comportamento',
          '✓ Pergunte "O que posso fazer para reparar?"',
          '✓ Respeite se a pessoa precisar de tempo'
        ]
      }
    ],
    'terminar relacionamento': [
      {
        tips: [
          '✓ Escolha um local privado e neutro',
          '✓ Evite datas especiais ou momentos ruins',
          '✓ Prepare-se para diferentes reações emocionais'
        ]
      },
      {
        tips: [
          '✓ Seja direto: "Preciso conversar sobre nosso relacionamento"',
          '✓ Não deixe margem para dúvidas ou esperanças',
          '✓ Mantenha o tom respeitoso mas firme'
        ]
      },
      {
        tips: [
          '✓ Use "eu sinto" para expressar seus motivos',
          '✓ Seja honesto sem ser cruel',
          '✓ Evite listar defeitos da pessoa'
        ]
      },
      {
        tips: [
          '✓ Seja claro que a decisão é final',
          '✓ Não diga "talvez" ou "no futuro"',
          '✓ Evite contato físico confuso (abraços longos)'
        ]
      },
      {
        tips: [
          '✓ Permita que a pessoa chore ou se expresse',
          '✓ Não tente consolar demais',
          '✓ Defina limites claros de contato futuro'
        ]
      }
    ],
    'pedir aumento': [
      {
        tips: [
          '✓ Marque reunião com 1 semana de antecedência',
          '✓ Escolha horário em que seu chefe esteja calmo',
          '✓ Prepare documentos e evidências'
        ]
      },
      {
        tips: [
          '✓ Liste 3-5 conquistas concretas com números',
          '✓ Prepare documentos visuais (gráficos, relatórios)',
          '✓ Tenha dados de salários de mercado prontos'
        ]
      },
      {
        tips: [
          '✓ Mostre como você agregou valor à empresa',
          '✓ Cite projetos específicos e resultados',
          '✓ Relacione suas conquistas com objetivos da empresa'
        ]
      },
      {
        tips: [
          '✓ Use sites como Glassdoor, Catho, LinkedIn',
          '✓ Cite faixas salariais da sua área e senioridade',
          '✓ Mostre que está abaixo do mercado (se for o caso)'
        ]
      },
      {
        tips: [
          '✓ Diga o valor exato ou percentual desejado',
          '✓ Tenha uma faixa de negociação em mente',
          '✓ Esteja preparado para negociar benefícios'
        ]
      }
    ],
    'recusar convite': [
      {
        tips: [
          '✓ Responda o mais rápido possível',
          '✓ Seja educado mas direto',
          '✓ Não invente desculpas mirabolantes'
        ]
      },
      {
        tips: [
          '✓ Diga "Não vou poder ir, mas obrigado pelo convite"',
          '✓ Seja firme mas gentil',
          '✓ Não deixe a pessoa na expectativa'
        ]
      },
      {
        tips: [
          '✓ Dê uma razão breve e verdadeira',
          '✓ Não se justifique excessivamente',
          '✓ Não minta sobre compromissos'
        ]
      },
      {
        tips: [
          '✓ Se quiser, sugira outro momento',
          '✓ Seja específico: "Que tal semana que vem?"',
          '✓ Só ofereça alternativa se realmente quiser'
        ]
      },
      {
        tips: [
          '✓ Diga "Nossa amizade é importante para mim"',
          '✓ Agradeça novamente pelo convite',
          '✓ Mantenha o tom positivo e carinhoso'
        ]
      }
    ],
    'falar que está magoado': [
      {
        tips: [
          '✓ Espere até estar menos emocional',
          '✓ Escolha momento privado e tranquilo',
          '✓ Prepare-se para ser vulnerável'
        ]
      },
      {
        tips: [
          '✓ Sempre use "Eu me senti [emoção]"',
          '✓ Evite "Você sempre" ou "Você nunca"',
          '✓ Descreva a situação específica, não generalize'
        ]
      },
      {
        tips: [
          '✓ Diga exatamente o que aconteceu',
          '✓ Use fatos, não interpretações',
          '✓ Explique por que aquilo te afetou'
        ]
      },
      {
        tips: [
          '✓ Pergunte "Você pode entender como me senti?"',
          '✓ Não exija desculpas imediatas',
          '✓ Esteja aberto para ouvir a perspectiva da pessoa'
        ]
      },
      {
        tips: [
          '✓ Proponha como evitar no futuro',
          '✓ Busque um acordo mútuo',
          '✓ Reforce o valor da relação'
        ]
      }
    ],
    'colocar limites': [
      {
        tips: [
          '✓ Saiba exatamente qual limite você precisa',
          '✓ Esteja preparado para ser firme',
          '✓ Ensaie o que vai dizer se necessário'
        ]
      },
      {
        tips: [
          '✓ Diga "Preciso que [comportamento específico]"',
          '✓ Seja cristalino, sem ambiguidades',
          '✓ Use frases afirmativas, não perguntas'
        ]
      },
      {
        tips: [
          '✓ Explique por que esse limite te afeta',
          '✓ Use "Isso é importante para mim porque..."',
          '✓ Mostre que não é capricho, é necessidade'
        ]
      },
      {
        tips: [
          '✓ Seja firme mas não agressivo',
          '✓ Mantenha contato visual e postura confiante',
          '✓ Não peça desculpas por ter limites'
        ]
      },
      {
        tips: [
          '✓ Diga "Se isso continuar, eu vou [consequência]"',
          '✓ Seja realista sobre as consequências',
          '✓ Esteja preparado para aplicá-las'
        ]
      }
    ],
    default: [
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
    ]
  };
  
  const details = detailsPorTipo[tipo] || detailsPorTipo['default'];
  
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
    'dizer não': `Agradeço, mas preciso ser sincero(a): não vou conseguir fazer isso. Espero que você compreenda.`,
    'falar que está magoado': `Preciso conversar com você sobre algo que me machucou. Fiquei magoado(a) quando [situação]. Podemos conversar?`,
    'colocar limites': `Preciso ser claro(a) sobre algo: [limite específico]. Isso é importante para mim e espero que você possa respeitar.`,
    'dar feedback difícil': `Gostaria de conversar sobre algo. Reconheço [qualidades], mas preciso te dar um feedback sobre [situação].`,
    'conversar sobre ciúmes': `Preciso ser honesto(a) com você: tenho sentido ciúmes em relação a [situação]. Podemos conversar sobre isso?`,
    'resolver mal-entendido': `Acho que houve um mal-entendido entre nós. Gostaria de esclarecer isso porque você é importante para mim.`,
    'conflito entre amigos': `Nossa amizade é muito importante para mim. Precisamos conversar sobre o que está acontecendo entre nós.`,
    default: `Olá, gostaria de conversar com você sobre algo que é importante para mim. Você tem um momento?`
  };
  
  const tipo = choices.conversationType ? choices.conversationType.toLowerCase() : 'default';
  return frases[tipo] || frases.default;
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
  const cartasModelos = {
    'pedir desculpas': `Querido(a),

Escrevo esta carta porque preciso expressar algo que tem pesado no meu coração. Sei que minhas ações causaram dor e desconforto, e por isso peço sinceras desculpas.

Reconheço que errei e compreendo como isso te afetou. Não há justificativa para o que aconteceu, mas quero que saiba que estou genuinamente arrependido(a).

Tenho refletido muito sobre a situação e estou trabalhando para ser uma pessoa melhor e garantir que isso não se repita.

Valorizo imensamente nosso relacionamento e espero que possamos superar esse momento juntos. Se você precisar de tempo e espaço, entenderei completamente.

Com carinho e respeito,
[Seu nome]`,

    'terminar relacionamento': `Querido(a),

Escrevo esta carta porque acredito que algumas palavras merecem ser ditas com cuidado e atenção, mesmo quando são difíceis.

Nossa jornada juntos foi significativa e guardarei com carinho os momentos que compartilhamos. No entanto, após muita reflexão, percebi que seguir caminhos separados é o mais honesto que posso fazer por nós dois.

Esta decisão não diminui o valor do que vivemos. Desejo de coração que você encontre a felicidade que merece.

Com respeito e consideração,
[Seu nome]`,

    'recusar convite': `Querido(a),

Antes de mais nada, muito obrigado(a) pelo convite! Significa muito para mim que tenha pensado em mim.

Infelizmente, não conseguirei participar desta vez. Fico realmente chateado(a) de não poder estar presente, mas espero que seja um momento incrível.

Vamos marcar algo em breve? Gostaria muito de nos encontrarmos quando tiver uma oportunidade melhor.

Com carinho,
[Seu nome]`,

    'falar que está magoado': `Querido(a),

Escrevo porque preciso compartilhar algo que tem me incomodado, e acredito que você merece saber.

Recentemente, senti-me magoado(a) com [situação]. Não estou te culpando, apenas compartilhando como me senti, pois nosso relacionamento é importante para mim.

Acredito que conversando podemos entender melhor um ao outro e fortalecer nossa relação.

Com sinceridade,
[Seu nome]`,

    'default': `Querido(a),

Sinto a necessidade de colocar no papel algo que tem estado na minha mente e no meu coração.

Escrevo isso porque nosso relacionamento é importante para mim e acredito que você merece saber o que sinto.

Espero que possamos conversar sobre isso quando você se sentir confortável.

Com carinho,
[Seu nome]`
  };

  const tipo = choices.conversationType ? choices.conversationType.toLowerCase() : 'default';
  return cartasModelos[tipo] || cartasModelos['default'];
}

function gerarPoema(choices) {
  const poemasModelos = {
    'pedir desculpas': `📜 "Perdão"

No silêncio da madrugada,
Encontro as palavras perdidas.
Errei, tropecei na jornada,
Deixei marcas não merecidas.

Se pudesse voltar atrás,
Mudaria meu tom, minha ação.
Mas só posso oferecer algo mais:
Um sincero pedido de perdão.

Não busco apagar o que foi feito,
Nem pretendo que esqueças a dor.
Apenas mostro meu peito aberto,
E um coração cheio de amor.

Que possamos, juntos, curar
As feridas que o tempo deixou.
E em um novo amanhecer, recomeçar
O que por descuido se quebrou.`,

    'terminar relacionamento': `📜 "Caminhos Separados"

Chegou a hora que eu temia,
De dizer adeus ao que vivíamos.
Não por falta de amor ou carinho,
Mas porque seguimos destinos diferentes.

Guardo cada riso, cada abraço,
Cada momento fica como um laço.
Que mesmo partido, ainda brilha,
Na memória de nossa história.

Não há culpados nessa equação,
Apenas dois corações em direções diferentes.
E eu te desejo tudo de melhor,
Um amor que te faça feliz completamente.`,

    'falar que está magoado': `📜 "Mágoa Silenciosa"

Guardo dentro do peito
Uma dor que não se vê.
Palavras que feriram direito,
Ações que machucaram.

Não é fácil expressar
O que se sente quando dói.
Mas preciso te contar,
Antes que o silêncio destrói.

A mágoa não é raiva,
Nem desejo de vingança.
É apenas uma ferida viva,
Pedindo cuidado e mudança.

Falo disso com respeito,
Não para atacar ou culpar.
Mas para que nosso afeto
Possa, enfim, se restaurar.`,

    'default': `📜 "Palavras do Coração"

Entre o dito e o não dito,
Existe um mar de emoções.
Navego nesse infinito,
Buscando as certas expressões.

Não são palavras fáceis,
Nem vêm sem receio ou dor.
Mas são verdadeiras, reais,
E nascem do mais puro amor.

Que este momento difícil
Seja ponte, não seja muro.
Que o diálogo, mesmo frágil,
Nos leve a um futuro mais puro.`
  };

  const tipo = choices.conversationType ? choices.conversationType.toLowerCase() : 'default';
  return poemasModelos[tipo] || poemasModelos['default'];
}

function gerarMusica(choices) {
  const musicasModelos = {
    'pedir desculpas': `🎵 Sugestões de Músicas para Pedir Desculpas:

🎵 "Sorry" - Justin Bieber
Uma música moderna e direta sobre pedir perdão

🎵 "Apologize" - OneRepublic
Para expressar arrependimento profundo

🎵 "Back to December" - Taylor Swift
Sobre reconhecer erros e querer voltar atrás

Playlist completa disponível para ajudar a expressar seus sentimentos.`,

    'terminar relacionamento': `🎵 Sugestões de Músicas para Término:

🎵 "Someone Like You" - Adele
Para aceitar e seguir em frente

🎵 "The Night We Met" - Lord Huron
Sobre valorizar os momentos compartilhados

🎵 "Drivers License" - Olivia Rodrigo
Para processar sentimentos de término

Músicas que ajudam a expressar sentimentos complexos de fim de relacionamento.`,

    'recusar convite': `🎵 Sugestões para Momentos Difíceis:

🎵 "Respect" - Aretha Franklin
Sobre manter limites com respeito

🎵 "Rather Be" - Clean Bandit
Sobre estar onde você precisa estar

Músicas sobre autenticidade e limites saudáveis.`,

    'falar que está magoado': `🎵 Sugestões para Expressar Mágoa:

🎵 "The Scientist" - Coldplay
Sobre vulnerabilidade e desejo de resolver

🎵 "Someone You Loved" - Lewis Capaldi
Para expressar sentimentos de dor emocional

🎵 "When I Was Your Man" - Bruno Mars
Sobre refletir sobre o que aconteceu

Músicas que ajudam a processar e expressar mágoa de forma saudável.`,

    'default': `🎵 Sugestões Musicais:

🎵 "Brave" - Sara Bareilles
Sobre ter coragem para falar o que sente

🎵 "Fight Song" - Rachel Platten
Para encontrar força interior

🎵 "Hall of Fame" - The Script
Sobre se superar e crescer

Músicas inspiradoras para momentos de conversa difícil.`
  };

  const tipo = choices.conversationType ? choices.conversationType.toLowerCase() : 'default';
  return musicasModelos[tipo] || musicasModelos['default'];
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

