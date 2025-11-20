
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
    'pedir demissão': [
      "Agende reunião formal com seu gestor",
      "Comunique sua decisão de forma clara",
      "Agradeça pelas oportunidades",
      "Ofereça ajudar na transição",
      "Mantenha profissionalismo até o fim"
    ],
    'revelar sentimentos': [
      "Escolha o momento e lugar certo",
      "Seja sincero sobre o que sente",
      "Explique o que admira na pessoa",
      "Dê espaço para a resposta dela",
      "Aceite a resposta com maturidade"
    ],
    'confrontar mentira': [
      "Apresente os fatos que você descobriu",
      "Dê chance para explicação",
      "Expresse como isso te afetou",
      "Decida se consegue perdoar",
      "Estabeleça limites ou tome decisões"
    ],
    'conversa sobre saúde mental': [
      "Escolha pessoa de confiança",
      "Seja honesto sobre o que está sentindo",
      "Explique os sintomas e impactos",
      "Peça o apoio que você precisa",
      "Considere buscar ajuda profissional"
    ],
    'negociar divida': [
      "Organize toda a documentação",
      "Entre em contato com o credor",
      "Explique sua situação financeira",
      "Proponha um acordo viável",
      "Formalize tudo por escrito"
    ],
    'falar sobre traição': [
      "Prepare-se emocionalmente",
      "Seja direto sobre o que aconteceu",
      "Expresse a dor que você sente",
      "Ouça a explicação (sem aceitar desculpas vazias)",
      "Decida o futuro da relação"
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
    'cobrar alguém': [
      {
        tips: [
          '✓ Tenha o acordo ou combinado anotado/documentado',
          '✓ Escolha momento privado, não público',
          '✓ Mantenha tom profissional e calmo'
        ]
      },
      {
        tips: [
          '✓ Diga "Combinamos que [X] até [data]"',
          '✓ Seja específico sobre o que não foi cumprido',
          '✓ Use fatos, não interpretações'
        ]
      },
      {
        tips: [
          '✓ Pergunte "Houve algum imprevisto?"',
          '✓ Ouça com atenção a justificativa',
          '✓ Demonstre empatia, mas mantenha o foco'
        ]
      },
      {
        tips: [
          '✓ Sugira "Podemos estabelecer uma nova data?"',
          '✓ Seja flexível na solução, não no objetivo',
          '✓ Anote o novo acordo claramente'
        ]
      },
      {
        tips: [
          '✓ Confirme "Então vamos fazer [X] até [nova data]"',
          '✓ Agradeça pela disposição em resolver',
          '✓ Marque um follow-up se necessário'
        ]
      }
    ],
    'dizer não': [
      {
        tips: [
          '✓ Responda rapidamente, não enrole',
          '✓ Prepare-se mentalmente para possível reação',
          '✓ Lembre-se: não é egoísmo ter limites'
        ]
      },
      {
        tips: [
          '✓ Diga "Não" de forma clara e direta',
          '✓ Não use "talvez", "vou ver", "depois vejo"',
          '✓ Seja educado mas firme'
        ]
      },
      {
        tips: [
          '✓ Você pode dar uma razão breve (opcional)',
          '✓ Não se justifique excessivamente',
          '✓ Evite inventar desculpas mirabolantes'
        ]
      },
      {
        tips: [
          '✓ Não ceda a manipulação ou insistência',
          '✓ Repita seu "não" se necessário',
          '✓ Mantenha tom de voz e postura firmes'
        ]
      },
      {
        tips: [
          '✓ Se quiser, ofereça alternativa viável',
          '✓ Reforce que sua decisão não muda o carinho',
          '✓ Não se sinta culpado depois'
        ]
      }
    ],
    'dar feedback difícil': [
      {
        tips: [
          '✓ Marque reunião 1:1 com antecedência',
          '✓ Escolha local privado e neutro',
          '✓ Separe 30-60 minutos sem interrupções'
        ]
      },
      {
        tips: [
          '✓ Comece com algo positivo genuíno',
          '✓ Diga "Gostaria de conversar sobre [situação específica]"',
          '✓ Mantenha tom colaborativo, não punitivo'
        ]
      },
      {
        tips: [
          '✓ Descreva o comportamento observável',
          '✓ Use "Eu observei que..." ou "Eu percebi..."',
          '✓ Não ataque a pessoa, foque no comportamento'
        ]
      },
      {
        tips: [
          '✓ Explique o impacto: "Isso causou [consequência]"',
          '✓ Seja específico sobre os efeitos',
          '✓ Conecte com objetivos ou valores da equipe'
        ]
      },
      {
        tips: [
          '✓ Pergunte "Qual sua visão sobre isso?"',
          '✓ Ouça ativamente sem interromper',
          '✓ Construam juntos um plano de melhoria'
        ]
      }
    ],
    'conversar sobre ciúmes': [
      {
        tips: [
          '✓ Escolha momento calmo, ambos descansados',
          '✓ Evite momentos pós-discussão',
          '✓ Reconheça que é SUA emoção, não culpa do outro'
        ]
      },
      {
        tips: [
          '✓ Diga "Eu sinto ciúmes quando [situação específica]"',
          '✓ Não acuse: "você me faz sentir ciúmes"',
          '✓ Seja vulnerável sobre suas inseguranças'
        ]
      },
      {
        tips: [
          '✓ Explique de onde vem esse sentimento',
          '✓ Fale sobre medos ou experiências passadas',
          '✓ Não justifique comportamentos controladores'
        ]
      },
      {
        tips: [
          '✓ Pergunte "Como você vê essa situação?"',
          '✓ Ouça sem interromper ou se defender',
          '✓ Busque entender a perspectiva do outro'
        ]
      },
      {
        tips: [
          '✓ Peça reasseguramento: "Preciso ouvir [X]"',
          '✓ Proponha acordos que aumentem segurança',
          '✓ Trabalhem juntos na construção de confiança'
        ]
      }
    ],
    'resolver mal-entendido': [
      {
        tips: [
          '✓ Aborde o quanto antes, não deixe acumular',
          '✓ Diga "Acho que houve um mal-entendido"',
          '✓ Mantenha tom curioso, não defensivo'
        ]
      },
      {
        tips: [
          '✓ Explique sua versão dos fatos objetivamente',
          '✓ Use "Eu entendi que [X], é isso?"',
          '✓ Evite assumir má intenção'
        ]
      },
      {
        tips: [
          '✓ Pergunte "O que você quis dizer com [X]?"',
          '✓ Ouça ativamente a perspectiva do outro',
          '✓ Busque identificar onde foi a confusão'
        ]
      },
      {
        tips: [
          '✓ Recapitule: "Então você quis dizer [Y], certo?"',
          '✓ Confirme que ambos estão na mesma página',
          '✓ Peça desculpas se você interpretou errado'
        ]
      },
      {
        tips: [
          '✓ Agradeça pela disposição em esclarecer',
          '✓ Façam acordo de comunicar com mais clareza',
          '✓ Reforce o valor da relação'
        ]
      }
    ],
    'conflito entre amigos': [
      {
        tips: [
          '✓ Não deixe o problema acumular ou esfriar demais',
          '✓ Escolha local privado, sem outras pessoas',
          '✓ Relembre internamente os bons momentos da amizade'
        ]
      },
      {
        tips: [
          '✓ Diga "Nossa amizade é importante, preciso conversar"',
          '✓ Use "Eu me senti [emoção] quando [situação]"',
          '✓ Evite acusações ou ataques pessoais'
        ]
      },
      {
        tips: [
          '✓ Dê espaço para seu amigo falar livremente',
          '✓ Escute com o coração, não só com a razão',
          '✓ Tente entender o ponto de vista dele'
        ]
      },
      {
        tips: [
          '✓ Identifiquem juntos o que causou o conflito',
          '✓ Assumam responsabilidades (ambos contribuíram)',
          '✓ Peçam desculpas sinceras se cabível'
        ]
      },
      {
        tips: [
          '✓ Proponham como evitar isso no futuro',
          '✓ Reafirmem o valor da amizade',
          '✓ Façam algo legal juntos para reconectar'
        ]
      }
    ],
    'pedir demissão': [
      {
        tips: [
          '✓ Agende reunião formal com seu gestor direto',
          '✓ Escolha horário no início da semana',
          '✓ Prepare carta de demissão por escrito'
        ]
      },
      {
        tips: [
          '✓ Seja direto: "Venho comunicar minha demissão"',
          '✓ Agradeça pelas oportunidades recebidas',
          '✓ Mantenha tom profissional e respeitoso'
        ]
      },
      {
        tips: [
          '✓ Explique brevemente (nova oportunidade, mudança de carreira)',
          '✓ Não critique a empresa ou colegas',
          '✓ Seja honesto sem ser detalhista demais'
        ]
      },
      {
        tips: [
          '✓ Ofereça cumprir aviso prévio integralmente',
          '✓ Proponha ajudar na transição',
          '✓ Liste pendências e como entregá-las'
        ]
      },
      {
        tips: [
          '✓ Pergunte sobre próximos passos (RH, documentação)',
          '✓ Mantenha networking: "Gostaria de manter contato"',
          '✓ Saia pela porta da frente, preserve relações'
        ]
      }
    ],
    'revelar sentimentos': [
      {
        tips: [
          '✓ Escolha momento privado e relaxado',
          '✓ Certifique-se que a pessoa está solteira',
          '✓ Prepare-se para qualquer resposta'
        ]
      },
      {
        tips: [
          '✓ Seja sincero: "Preciso te contar algo importante"',
          '✓ Diga claramente: "Eu desenvolvi sentimentos por você"',
          '✓ Não enrole ou dê indiretas'
        ]
      },
      {
        tips: [
          '✓ Explique o que você sente e admira na pessoa',
          '✓ Seja específico sobre qualidades que te atraem',
          '✓ Mostre vulnerabilidade genuína'
        ]
      },
      {
        tips: [
          '✓ Dê espaço: "Não precisa responder agora"',
          '✓ Não pressione por uma resposta imediata',
          '✓ Deixe claro que respeita a decisão dela'
        ]
      },
      {
        tips: [
          '✓ Se for "não": aceite com dignidade',
          '✓ Se for "sim": demonstre alegria genuína',
          '✓ Se for "talvez": respeite o tempo da pessoa'
        ]
      }
    ],
    'confrontar mentira': [
      {
        tips: [
          '✓ Tenha provas ou evidências concretas',
          '✓ Escolha local privado para conversa',
          '✓ Mantenha a calma, não aja por impulso'
        ]
      },
      {
        tips: [
          '✓ Apresente os fatos: "Descobri que [X]"',
          '✓ Não acuse antes de ouvir a explicação',
          '✓ Use tom firme mas controlado'
        ]
      },
      {
        tips: [
          '✓ Pergunte "Você pode me explicar isso?"',
          '✓ Dê chance da pessoa se explicar',
          '✓ Observe linguagem corporal e hesitações'
        ]
      },
      {
        tips: [
          '✓ Expresse como a mentira te afetou',
          '✓ Use "Eu me sinto traído/magoado"',
          '✓ Deixe claro que confiança foi quebrada'
        ]
      },
      {
        tips: [
          '✓ Decida se pode perdoar ou não',
          '✓ Estabeleça condições para reconstruir confiança',
          '✓ Se necessário, reavalie a relação'
        ]
      }
    ],
    'conversa sobre saúde mental': [
      {
        tips: [
          '✓ Escolha pessoa de extrema confiança',
          '✓ Momento tranquilo, sem pressa',
          '✓ Lembre-se: não é sinal de fraqueza'
        ]
      },
      {
        tips: [
          '✓ Seja honesto: "Não estou bem, preciso conversar"',
          '✓ Nomeie o que sente (ansiedade, depressão, etc)',
          '✓ Não minimize: "Estou passando por algo sério"'
        ]
      },
      {
        tips: [
          '✓ Explique sintomas que está sentindo',
          '✓ Conte há quanto tempo isso acontece',
          '✓ Mencione como afeta seu dia a dia'
        ]
      },
      {
        tips: [
          '✓ Diga o que você precisa: "Preciso de apoio/escuta"',
          '✓ Não espere que resolvam por você',
          '✓ Aceite sugestões de ajuda profissional'
        ]
      },
      {
        tips: [
          '✓ Agradeça pela escuta e apoio',
          '✓ Mantenha a pessoa atualizada (se quiser)',
          '✓ Busque ajuda profissional (psicólogo/psiquiatra)'
        ]
      }
    ],
    'negociar divida': [
      {
        tips: [
          '✓ Organize todos os documentos e valores',
          '✓ Calcule o que realmente pode pagar',
          '✓ Entre em contato antes da cobrança judicial'
        ]
      },
      {
        tips: [
          '✓ Seja honesto: "Estou com dificuldades financeiras"',
          '✓ Demonstre compromisso em resolver',
          '✓ Não fuja ou ignore o problema'
        ]
      },
      {
        tips: [
          '✓ Explique a situação (perda de emprego, doença)',
          '✓ Seja breve, não invente desculpas',
          '✓ Mostre que é situação temporária'
        ]
      },
      {
        tips: [
          '✓ Proponha parcelamento viável',
          '✓ Negocie desconto ou juros menores',
          '✓ Peça tudo por escrito e registrado'
        ]
      },
      {
        tips: [
          '✓ Confirme novo acordo por escrito',
          '✓ Cumpra rigorosamente o combinado',
          '✓ Guarde comprovantes de todos os pagamentos'
        ]
      }
    ],
    'falar sobre traição': [
      {
        tips: [
          '✓ Tenha certeza do que vai falar',
          '✓ Escolha local privado e seguro',
          '✓ Prepare-se emocionalmente para qualquer reação'
        ]
      },
      {
        tips: [
          '✓ Seja direto: "Preciso falar sobre [situação]"',
          '✓ Apresente fatos, não suposições',
          '✓ Mantenha a calma mesmo com emoções fortes'
        ]
      },
      {
        tips: [
          '✓ Se você foi traído: expresse sua dor',
          '✓ Se você traiu: assuma responsabilidade total',
          '✓ Não minimize a gravidade da situação'
        ]
      },
      {
        tips: [
          '✓ Ouça a explicação, mas não aceite desculpas vazias',
          '✓ Faça perguntas necessárias para entender',
          '✓ Valide seus sentimentos de raiva/tristeza'
        ]
      },
      {
        tips: [
          '✓ Decida se quer tentar reconstruir ou terminar',
          '✓ Se ficar: estabeleça condições claras',
          '✓ Se terminar: mantenha sua decisão'
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
    'pedir demissão': `Gostaria de agendar uma reunião para conversarmos sobre minha posição na empresa. É um assunto importante que preciso tratar com você.`,
    'revelar sentimentos': `Preciso ser honesto(a) com você sobre algo. Desenvolvi sentimentos mais profundos por você e gostaria de compartilhar isso.`,
    'confrontar mentira': `Preciso conversar com você sobre algo sério. Descobri que [situação] e isso me deixou bastante abalado(a). Podemos conversar?`,
    'conversa sobre saúde mental': `Preciso conversar com você sobre algo muito importante. Não estou bem emocionalmente e preciso de apoio neste momento difícil.`,
    'negociar divida': `Gostaria de conversar sobre minha situação financeira e buscar uma solução para regularizarmos a pendência que tenho.`,
    'falar sobre traição': `Precisamos conversar sobre algo muito sério que aconteceu e que afetou profundamente nossa relação. Você pode me dar atenção agora?`,
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
    'dizer não': "Culpa, firmeza, ansiedade, empoderamento",
    'falar que está magoado': "Vulnerabilidade, mágoa, esperança de compreensão, tristeza",
    'colocar limites': "Empoderamento, ansiedade, firmeza, respeito próprio",
    'dar feedback difícil': "Desconforto, responsabilidade, empatia, preocupação",
    'conversar sobre ciúmes': "Insegurança, vulnerabilidade, medo de perder, necessidade de conexão",
    'resolver mal-entendido': "Confusão, frustração, alívio ao esclarecer, esperança",
    'conflito entre amigos': "Mágoa, esperança de reconciliação, tristeza, valorização da amizade",
    'pedir demissão': "Nervosismo, determinação, alívio, respeito, incerteza sobre o futuro",
    'revelar sentimentos': "Vulnerabilidade extrema, esperança, medo de rejeição, coragem",
    'confrontar mentira': "Raiva, decepção, traição, desconfiança, dor profunda",
    'conversa sobre saúde mental': "Vergonha, vulnerabilidade, medo de julgamento, necessidade de apoio",
    'negociar divida': "Vergonha, ansiedade, esperança de solução, responsabilidade",
    'falar sobre traição': "Dor profunda, raiva, traição, confusão, luto da confiança",
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
    'dizer não': ["Dar justificativas excessivas", "Deixar margem para dúvida", "Ceder à manipulação", "Sentir culpa depois"],
    'falar que está magoado': ["Acusar com 'você sempre'", "Exigir desculpas imediatas", "Minimizar seus sentimentos", "Trazer problemas antigos"],
    'colocar limites': ["Pedir desculpas por ter limites", "Ceder facilmente", "Ser agressivo", "Explicar demais"],
    'dar feedback difícil': ["Atacar a pessoa", "Generalizar comportamentos", "Não dar exemplos concretos", "Ser condescendente"],
    'conversar sobre ciúmes': ["Acusar o parceiro", "Tentar controlar", "Fazer ameaças", "Invadir privacidade"],
    'resolver mal-entendido': ["Assumir má-fé", "Não ouvir o outro lado", "Ficar na defensiva", "Interromper"],
    'conflito entre amigos': ["Trazer outras pessoas para o conflito", "Atacar o caráter do amigo", "Guardar rancor", "Desistir da amizade sem tentar"],
    'pedir demissão': ["Criticar a empresa", "Ser arrogante", "Queimar pontes", "Deixar trabalho pendente"],
    'revelar sentimentos': ["Pressionar por resposta imediata", "Fazer ultimatos", "Declarar em público", "Insistir após recusa"],
    'confrontar mentira': ["Gritar ou ser agressivo", "Humilhar publicamente", "Ameaçar", "Julgar sem ouvir"],
    'conversa sobre saúde mental': ["Minimizar o problema", "Dizer 'é só pensar positivo'", "Comparar com outros", "Ter vergonha"],
    'negociar divida': ["Fugir do credor", "Mentir sobre situação", "Fazer promessas impossíveis", "Ser agressivo"],
    'falar sobre traição': ["Ser violento (física ou verbalmente)", "Tomar decisões impulsivas", "Expor publicamente", "Ignorar seus sentimentos"],
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
    'dizer não': "Reforce que sua decisão não afeta o carinho pela pessoa. Seja firme mas gentil até o final.",
    'falar que está magoado': "Agradeça pela escuta. Proponham juntos formas de evitar isso no futuro. Reforce o valor da relação.",
    'colocar limites': "Reforce o limite estabelecido. Agradeça pela compreensão. Deixe claro as consequências se for desrespeitado.",
    'dar feedback difícil': "Finalize com encorajamento. Agende acompanhamento. Ofereça suporte contínuo para melhoria.",
    'conversar sobre ciúmes': "Agradeça pela paciência e compreensão. Reafirmem o compromisso de trabalhar na confiança juntos.",
    'resolver mal-entendido': "Confirmem que ambos entenderam. Agradeçam pela disposição em esclarecer. Sigam em frente sem ressentimentos.",
    'conflito entre amigos': "Reafirmem a importância da amizade. Façam algo juntos para reconectar. Deixem o passado para trás.",
    'pedir demissão': "Agradeça sinceramente pelas oportunidades. Ofereça ajuda na transição. Mantenha a porta aberta para networking futuro.",
    'revelar sentimentos': "Agradeça pela coragem de ouvir. Respeite a resposta, seja ela qual for. Dê espaço se necessário.",
    'confrontar mentira': "Decida se pode perdoar. Estabeleça condições claras se for continuar. Proteja-se emocionalmente.",
    'conversa sobre saúde mental': "Agradeça imensamente pelo apoio. Mantenha a pessoa informada sobre sua jornada. Busque ajuda profissional.",
    'negociar divida': "Agradeça pela disposição em negociar. Cumpra rigorosamente o acordo. Comunique qualquer dificuldade imediatamente.",
    'falar sobre traição': "Dê-se tempo para processar. Se decidir ficar, estabeleça condições claras. Se terminar, mantenha sua decisão.",
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

