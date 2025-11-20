const conversationDatabase = [
  {
    categoria: "pedir desculpas",
    sentimentos: "culpa, vulnerabilidade, receio de rejeição",
    roteiros: {
      formal: {
        curto: [
          "1. Reconheça o erro",
          "2. Peça desculpas sinceras",
          "3. Proponha uma solução"
        ],
        medio: [
          "1. Contextualize a situação",
          "2. Reconheça o impacto nas emoções da pessoa",
          "3. Assuma a responsabilidade",
          "4. Peça desculpas de forma clara",
          "5. Apresente um plano de ação"
        ],
        longo: [
          "1. Escolha um momento apropriado",
          "2. Contextualize com calma",
          "3. Demonstre empatia pelo que a pessoa sentiu",
          "4. Reconheça o erro sem justificativas",
          "5. Assuma total responsabilidade",
          "6. Peça desculpas sinceras",
          "7. Proponha mudanças concretas",
          "8. Pergunte como pode reparar"
        ]
      },
      informal: {
        curto: [
          "1. Seja direto sobre o que fez",
          "2. Peça desculpas",
          "3. Mostre que valoriza a pessoa"
        ],
        medio: [
          "1. Comece falando como se sente",
          "2. Explique o que aconteceu",
          "3. Peça desculpas do coração",
          "4. Pergunte como a pessoa está",
          "5. Ofereça fazer as pazes"
        ],
        longo: [
          "1. Encontre um momento tranquilo",
          "2. Fale sobre seus sentimentos",
          "3. Explique o contexto sem se justificar",
          "4. Reconheça como a pessoa se sentiu",
          "5. Peça desculpas genuínas",
          "6. Fale sobre o que aprendeu",
          "7. Proponha reconectar a amizade",
          "8. Dê tempo se necessário"
        ]
      },
      emocional: {
        curto: [
          "1. Abra seu coração",
          "2. Fale o quanto se arrepende",
          "3. Demonstre vulnerabilidade"
        ],
        medio: [
          "1. Prepare-se emocionalmente",
          "2. Expresse seus sentimentos verdadeiros",
          "3. Conte como isso te afeta",
          "4. Peça perdão com sinceridade",
          "5. Mostre o quanto a pessoa importa"
        ],
        longo: [
          "1. Escolha um lugar confortável",
          "2. Respire e centre-se",
          "3. Abra-se sobre suas emoções",
          "4. Fale do arrependimento profundo",
          "5. Reconheça a dor causada",
          "6. Peça perdão de coração aberto",
          "7. Compartilhe o que aprendeu",
          "8. Reafirme o valor da relação"
        ]
      },
      direto: {
        curto: [
          "1. 'Errei. Me desculpe.'",
          "2. Seja claro sobre o erro",
          "3. Pergunte como compensar"
        ],
        medio: [
          "1. Vá direto ao ponto",
          "2. Assuma o erro completamente",
          "3. Peça desculpas sem rodeios",
          "4. Ofereça solução prática",
          "5. Confirme se a pessoa aceita"
        ],
        longo: [
          "1. Seja objetivo desde o início",
          "2. Enumere claramente o que fez de errado",
          "3. Assuma responsabilidade total",
          "4. Peça desculpas diretamente",
          "5. Liste ações concretas de reparação",
          "6. Estabeleça compromisso de mudança",
          "7. Pergunte se há algo mais a fazer",
          "8. Agradeça pela oportunidade de se explicar"
        ]
      }
    },
    frasesProntas: {
      curto: "Me desculpe pelo que fiz. Errei e quero consertar isso.",
      medio: "Preciso te pedir desculpas. Sei que errei e reconheço o quanto isso te afetou. Estou genuinamente arrependido e quero fazer o possível para reparar.",
      longo: "Quero começar pedindo sinceras desculpas. Reconheço completamente meu erro e entendo o impacto que causou em você. Assumi a responsabilidade pelo que aconteceu e gostaria de ter a oportunidade de mostrar como pretendo mudar e fazer as coisas de forma diferente. Você é importante para mim e quero reconquistar sua confiança."
    },
    evitar: [
      "Evite justificar demais ou dar desculpas",
      "Evite colocar a culpa no outro ('mas você também...')",
      "Evite minimizar o impacto ('não foi tão grave assim')",
      "Evite pedir desculpas se não for sincero"
    ],
    finalizar: "Pergunte se há algo mais que você possa fazer e agradeça pela oportunidade de se explicar. Dê tempo para a pessoa processar."
  },
  {
    categoria: "terminar relacionamento",
    sentimentos: "tristeza, culpa, alívio, medo de magoar",
    roteiros: {
      formal: {
        curto: [
          "1. Seja honesto sobre seus sentimentos",
          "2. Explique a decisão com respeito",
          "3. Deseje o melhor para a pessoa"
        ],
        medio: [
          "1. Escolha um momento privado",
          "2. Seja claro sobre a decisão",
          "3. Explique os motivos com honestidade",
          "4. Reconheça as qualidades da pessoa",
          "5. Seja firme mas gentil"
        ],
        longo: [
          "1. Prepare-se emocionalmente",
          "2. Escolha local privado e neutro",
          "3. Inicie com honestidade sobre seus sentimentos",
          "4. Explique os motivos de forma clara",
          "5. Evite dar falsas esperanças",
          "6. Reconheça os bons momentos",
          "7. Seja firme na decisão",
          "8. Defina limites pós-término"
        ]
      },
      informal: {
        curto: [
          "1. Seja sincero sobre o que sente",
          "2. Explique por que não está funcionando",
          "3. Mantenha o respeito"
        ],
        medio: [
          "1. Encontre um momento a sós",
          "2. Fale do coração sobre o que mudou",
          "3. Seja honesto sem ser cruel",
          "4. Agradeça pelos momentos juntos",
          "5. Deixe claro que a decisão é final"
        ],
        longo: [
          "1. Espere um momento apropriado",
          "2. Converse face a face",
          "3. Compartilhe seus sentimentos verdadeiros",
          "4. Explique como chegou a essa decisão",
          "5. Evite culpar a outra pessoa",
          "6. Valorize o que viveram juntos",
          "7. Seja firme mas carinhoso",
          "8. Defina como será o contato depois"
        ]
      },
      emocional: {
        curto: [
          "1. Abra seu coração com honestidade",
          "2. Fale sobre suas emoções",
          "3. Permita-se ser vulnerável"
        ],
        medio: [
          "1. Prepare-se para ser emocional",
          "2. Expresse seus sentimentos verdadeiros",
          "3. Explique por que não consegue continuar",
          "4. Reconheça a dor de ambos",
          "5. Dê espaço para as emoções"
        ],
        longo: [
          "1. Esteja preparado emocionalmente",
          "2. Crie um ambiente acolhedor",
          "3. Compartilhe profundamente seus sentimentos",
          "4. Explique a jornada emocional que te levou aqui",
          "5. Reconheça o amor que existiu",
          "6. Seja gentil com ambos",
          "7. Permita que ambos chorem se necessário",
          "8. Ofereça um fechamento emocional"
        ]
      },
      direto: {
        curto: [
          "1. 'Precisamos terminar'",
          "2. Explique objetivamente o motivo",
          "3. Seja claro que é definitivo"
        ],
        medio: [
          "1. Seja direto desde o início",
          "2. Exponha os motivos claramente",
          "3. Não dê falsas esperanças",
          "4. Estabeleça os próximos passos",
          "5. Mantenha a firmeza"
        ],
        longo: [
          "1. Vá direto ao ponto desde o começo",
          "2. Liste objetivamente os motivos",
          "3. Seja claro que pensou bem",
          "4. Não deixe margem para dúvidas",
          "5. Defina questões práticas",
          "6. Estabeleça limites de contato",
          "7. Seja respeitoso mas firme",
          "8. Encerre de forma definitiva"
        ]
      }
    },
    frasesProntas: {
      curto: "Preciso ser honesto com você: acho que devemos terminar nosso relacionamento.",
      medio: "Pensei muito sobre isso e preciso ser sincero com você e comigo. Não estou mais feliz neste relacionamento e acho que o melhor para nós dois é seguirmos caminhos separados.",
      longo: "Preciso ter uma conversa difícil com você. Venho refletindo há algum tempo e cheguei à conclusão de que nosso relacionamento não está me fazendo feliz. Você é uma pessoa incrível, mas sinto que não somos compatíveis da forma que precisamos ser. Respeito muito você e nosso tempo juntos, mas acredito que terminar é a decisão mais honesta que posso tomar para ambos."
    },
    evitar: [
      "Evite terminar por mensagem (exceto em casos de abuso)",
      "Evite culpar apenas a outra pessoa",
      "Evite dar falsas esperanças",
      "Evite fazer isso em público"
    ],
    finalizar: "Seja firme na decisão, defina claramente os próximos passos e dê espaço para a pessoa processar a informação."
  },
  {
    categoria: "pedir aumento",
    sentimentos: "ansiedade, esperança, medo de rejeição, assertividade",
    roteiros: {
      formal: {
        curto: [
          "1. Agende reunião formal",
          "2. Apresente suas conquistas",
          "3. Proponha valor específico"
        ],
        medio: [
          "1. Solicite reunião com antecedência",
          "2. Prepare dados de mercado",
          "3. Liste suas contribuições",
          "4. Apresente suas metas futuras",
          "5. Proponha ajuste salarial específico"
        ],
        longo: [
          "1. Pesquise valores de mercado",
          "2. Agende reunião formal",
          "3. Prepare documento com realizações",
          "4. Inicie agradecendo a oportunidade",
          "5. Apresente contribuições quantificadas",
          "6. Mostre dados comparativos",
          "7. Explique seu valor para a empresa",
          "8. Faça proposta clara e específica"
        ]
      },
      informal: {
        curto: [
          "1. Peça um momento para conversar",
          "2. Fale sobre suas contribuições",
          "3. Pergunte sobre possibilidade de aumento"
        ],
        medio: [
          "1. Encontre momento apropriado",
          "2. Compartilhe seus resultados",
          "3. Fale sobre seu comprometimento",
          "4. Mencione expectativas de mercado",
          "5. Pergunte sobre próximos passos"
        ],
        longo: [
          "1. Observe momento favorável",
          "2. Peça conversa individual",
          "3. Agradeça oportunidades recebidas",
          "4. Compartilhe conquistas recentes",
          "5. Fale sobre planos futuros",
          "6. Mencione pesquisa de mercado",
          "7. Expresse desejo de crescer na empresa",
          "8. Pergunte sobre possibilidades"
        ]
      },
      emocional: {
        curto: [
          "1. Compartilhe como se sente valorizado",
          "2. Fale de suas necessidades",
          "3. Expresse esperança de crescimento"
        ],
        medio: [
          "1. Fale sobre seu engajamento emocional",
          "2. Compartilhe suas aspirações",
          "3. Explique necessidades pessoais",
          "4. Demonstre paixão pelo trabalho",
          "5. Peça reconhecimento financeiro"
        ],
        longo: [
          "1. Prepare-se emocionalmente",
          "2. Compartilhe sua jornada na empresa",
          "3. Fale do orgulho que sente",
          "4. Expresse suas aspirações futuras",
          "5. Mencione necessidades pessoais",
          "6. Demonstre comprometimento emocional",
          "7. Peça reconhecimento justo",
          "8. Mostre-se aberto ao diálogo"
        ]
      },
      direto: {
        curto: [
          "1. 'Gostaria de discutir meu salário'",
          "2. Cite números e resultados",
          "3. Proponha valor específico"
        ],
        medio: [
          "1. Vá direto ao ponto",
          "2. Liste realizações objetivas",
          "3. Apresente pesquisa salarial",
          "4. Proponha percentual específico",
          "5. Pergunte por decisão em prazo definido"
        ],
        longo: [
          "1. Seja direto sobre o propósito",
          "2. Apresente dados quantitativos",
          "3. Mostre comparativos de mercado",
          "4. Liste contribuições mensuráveis",
          "5. Proponha ajuste específico",
          "6. Estabeleça prazo para resposta",
          "7. Prepare alternativas",
          "8. Confirme próximos passos"
        ]
      }
    },
    frasesProntas: {
      curto: "Gostaria de conversar sobre meu salário. Tenho entregado resultados consistentes e gostaria de discutir um ajuste.",
      medio: "Agradeço a oportunidade de conversar. Tenho me dedicado bastante e alcançado bons resultados. Pesquisei o mercado e gostaria de discutir a possibilidade de um reajuste salarial que reflita minhas contribuições.",
      longo: "Obrigado por este tempo. Trabalho aqui há X tempo e tenho muito orgulho das contribuições que fiz, como [exemplos específicos]. Pesquisei o mercado e observei que profissionais com minha experiência e entregas geralmente recebem entre X e Y. Considerando meus resultados e comprometimento, gostaria de propor um ajuste salarial para [valor]. Estou aberto a discutir e entender a perspectiva da empresa."
    },
    evitar: [
      "Evite comparar-se negativamente com colegas",
      "Evite fazer ultimatos agressivos",
      "Evite pedir sem preparação",
      "Evite mencionar apenas necessidades pessoais"
    ],
    finalizar: "Pergunte sobre os próximos passos, agradeça pela consideração e mantenha-se profissional independente da resposta."
  },
  {
    categoria: "recusar convite",
    sentimentos: "desconforto, medo de desagradar, necessidade de limites",
    roteiros: {
      formal: {
        curto: [
          "1. Agradeça o convite",
          "2. Decline educadamente",
          "3. Não se justifique excessivamente"
        ],
        medio: [
          "1. Mostre apreciação pelo convite",
          "2. Decline de forma clara",
          "3. Ofereça breve justificativa",
          "4. Sugira alternativa se apropriado",
          "5. Mantenha a cordialidade"
        ],
        longo: [
          "1. Agradeça sinceramente o convite",
          "2. Reconheça a importância do evento",
          "3. Decline de forma respeitosa",
          "4. Ofereça justificativa breve e honesta",
          "5. Mostre que considerou a proposta",
          "6. Sugira alternativa se possível",
          "7. Reforce apreciação pela consideração",
          "8. Mantenha a porta aberta"
        ]
      },
      informal: {
        curto: [
          "1. Agradeça",
          "2. Diga que não pode",
          "3. Seja gentil"
        ],
        medio: [
          "1. Mostre que ficou feliz com o convite",
          "2. Explique que não vai dar",
          "3. Seja honesto sem detalhes",
          "4. Sugira outra ocasião",
          "5. Mantenha a leveza"
        ],
        longo: [
          "1. Agradeça de coração",
          "2. Demonstre que valoriza a pessoa",
          "3. Explique que não poderá ir",
          "4. Seja honesto de forma leve",
          "5. Sugira marcar outro momento",
          "6. Reforce que gostaria de estar lá",
          "7. Mantenha a amizade",
          "8. Deixe porta aberta"
        ]
      },
      emocional: {
        curto: [
          "1. Expresse gratidão genuína",
          "2. Compartilhe que não consegue",
          "3. Mostre que te afeta dizer não"
        ],
        medio: [
          "1. Agradeça com emoção",
          "2. Explique seus sentimentos",
          "3. Decline com pesar genuíno",
          "4. Mostre quanto valoriza a pessoa",
          "5. Expresse esperança de outra vez"
        ],
        longo: [
          "1. Demonstre gratidão profunda",
          "2. Compartilhe quanto significa o convite",
          "3. Explique emocionalmente por que não pode",
          "4. Mostre vulnerabilidade",
          "5. Expresse pesar real",
          "6. Reforce o valor da relação",
          "7. Sugira momento futuro",
          "8. Mantenha conexão emocional"
        ]
      },
      direto: {
        curto: [
          "1. 'Obrigado, mas não posso'",
          "2. Seja claro e breve",
          "3. Não se justifique demais"
        ],
        medio: [
          "1. Agradeça diretamente",
          "2. Decline claramente",
          "3. Dê razão objetiva se necessário",
          "4. Seja firme mas educado",
          "5. Encerre cordialmente"
        ],
        longo: [
          "1. Agradeça de forma direta",
          "2. Decline imediatamente",
          "3. Ofereça razão concisa",
          "4. Seja firme na decisão",
          "5. Não deixe margem para insistência",
          "6. Mantenha profissionalismo",
          "7. Encerre educadamente",
          "8. Siga em frente"
        ]
      }
    },
    frasesProntas: {
      curto: "Agradeço muito o convite, mas infelizmente não poderei comparecer.",
      medio: "Obrigado pelo convite! Fico muito feliz que tenha pensado em mim, mas infelizmente não vou conseguir participar desta vez. Espero que role outra oportunidade!",
      longo: "Muito obrigado pelo convite, realmente aprecio você ter pensado em mim. Infelizmente não vou conseguir comparecer desta vez por conta de [razão breve]. Fiquei chateado de não poder ir, mas espero que tenhamos outras oportunidades de nos encontrarmos em breve. Desejo que seja incrível!"
    },
    evitar: [
      "Evite justificativas elaboradas demais",
      "Evite mentiras que podem ser descobertas",
      "Evite ser vago se isso gerar insistência",
      "Evite culpar a pessoa que convidou"
    ],
    finalizar: "Agradeça novamente, deseje que o evento seja ótimo e sugira manter contato ou encontrar em outra ocasião."
  },
  {
    categoria: "cobrar alguém",
    sentimentos: "frustração, desconforto, necessidade de justiça",
    roteiros: {
      formal: {
        curto: [
          "1. Referencie o acordo original",
          "2. Exponha o não cumprimento",
          "3. Solicite resolução"
        ],
        medio: [
          "1. Contextualize a situação",
          "2. Cite o compromisso assumido",
          "3. Aponte o descumprimento objetivamente",
          "4. Peça explicação ou resolução",
          "5. Estabeleça novo prazo"
        ],
        longo: [
          "1. Prepare documentação",
          "2. Agende conversa formal",
          "3. Contextualize educadamente",
          "4. Apresente evidências do acordo",
          "5. Exponha o não cumprimento",
          "6. Pergunte sobre as razões",
          "7. Solicite resolução clara",
          "8. Defina prazo e consequências"
        ]
      },
      informal: {
        curto: [
          "1. Lembre do combinado",
          "2. Pergunte sobre o atraso",
          "3. Peça definição"
        ],
        medio: [
          "1. Inicie de forma leve",
          "2. Relembre o que foi acordado",
          "3. Pergunte se houve algum problema",
          "4. Peça atualização",
          "5. Combine nova data"
        ],
        longo: [
          "1. Escolha momento apropriado",
          "2. Comece com empatia",
          "3. Relembre o acordo de forma amigável",
          "4. Pergunte se está tudo bem",
          "5. Exponha sua necessidade",
          "6. Peça posicionamento",
          "7. Seja flexível mas firme",
          "8. Estabeleça novo combinado"
        ]
      },
      emocional: {
        curto: [
          "1. Expresse como você se sente",
          "2. Fale da expectativa frustrada",
          "3. Peça consideração"
        ],
        medio: [
          "1. Compartilhe suas emoções",
          "2. Explique o impacto em você",
          "3. Relembre o compromisso",
          "4. Peça empatia",
          "5. Busque resolução emocional"
        ],
        longo: [
          "1. Prepare-se emocionalmente",
          "2. Compartilhe como se sentiu",
          "3. Explique o impacto da quebra de confiança",
          "4. Relembre o acordo feito",
          "5. Peça que a pessoa se coloque no seu lugar",
          "6. Expresse necessidade de resolução",
          "7. Busque reconexão",
          "8. Estabeleça novo compromisso"
        ]
      },
      direto: {
        curto: [
          "1. 'Você não cumpriu o combinado'",
          "2. Cite o fato objetivamente",
          "3. Exija posicionamento"
        ],
        medio: [
          "1. Vá direto ao ponto",
          "2. Cite data e compromisso",
          "3. Aponte o descumprimento",
          "4. Pergunte quando será resolvido",
          "5. Estabeleça prazo final"
        ],
        longo: [
          "1. Seja direto desde o início",
          "2. Liste o que foi acordado",
          "3. Apresente evidências",
          "4. Aponte claramente o descumprimento",
          "5. Pergunte por explicação objetiva",
          "6. Exija resolução em prazo específico",
          "7. Exponha consequências se necessário",
          "8. Confirme o novo compromisso"
        ]
      }
    },
    frasesProntas: {
      curto: "Precisamos conversar sobre o que combinamos. Você não cumpriu e isso me afetou.",
      medio: "Queria falar com você sobre nosso acordo. Combinamos [X] para [data], mas até agora não foi cumprido. Gostaria de entender o que aconteceu e quando podemos resolver isso.",
      longo: "Preciso conversar com você sobre uma questão importante. Combinamos que você [faria X] até [data], conforme acordamos em [contexto]. Infelizmente isso não foi cumprido e isso tem me afetado porque [impacto]. Gostaria de entender se houve algum problema e quando você consegue resolver. Preciso de uma definição clara para poder me organizar."
    },
    evitar: [
      "Evite ser agressivo ou acusatório demais",
      "Evite generalizar ('você nunca cumpre nada')",
      "Evite cobrar em público",
      "Evite aceitar desculpas vazias repetidamente"
    ],
    finalizar: "Confirme o novo compromisso de forma clara, estabeleça prazo específico e defina como será o acompanhamento."
  },
  {
    categoria: "dizer não",
    sentimentos: "culpa, necessidade de limites, medo de conflito",
    roteiros: {
      formal: {
        curto: [
          "1. Agradeça a consideração",
          "2. Decline claramente",
          "3. Não se justifique excessivamente"
        ],
        medio: [
          "1. Reconheça o pedido",
          "2. Decline de forma educada",
          "3. Ofereça breve justificativa",
          "4. Seja firme mas cordial",
          "5. Sugira alternativa se possível"
        ],
        longo: [
          "1. Agradeça pela confiança",
          "2. Reconheça a importância do pedido",
          "3. Decline de forma respeitosa",
          "4. Explique limitações objetivas",
          "5. Seja firme na decisão",
          "6. Ofereça alternativa quando apropriado",
          "7. Mantenha profissionalismo",
          "8. Reforce disponibilidade futura"
        ]
      },
      informal: {
        curto: [
          "1. 'Não vou poder'",
          "2. Seja direto mas gentil",
          "3. Não se culpe"
        ],
        medio: [
          "1. Agradeça pela confiança",
          "2. Explique que não pode",
          "3. Seja honesto sem detalhes",
          "4. Mantenha a firmeza",
          "5. Preserve a relação"
        ],
        longo: [
          "1. Mostre que valoriza o pedido",
          "2. Explique suas limitações",
          "3. Decline com firmeza gentil",
          "4. Não se justifique demais",
          "5. Mantenha seus limites",
          "6. Ofereça apoio diferente se quiser",
          "7. Preserve a amizade",
          "8. Seja consistente"
        ]
      },
      emocional: {
        curto: [
          "1. Compartilhe que é difícil dizer não",
          "2. Explique seus limites",
          "3. Peça compreensão"
        ],
        medio: [
          "1. Expresse apreço pelo pedido",
          "2. Compartilhe suas emoções",
          "3. Explique necessidade de limites",
          "4. Decline com pesar mas firmeza",
          "5. Peça empatia"
        ],
        longo: [
          "1. Demonstre gratidão pela confiança",
          "2. Compartilhe a dificuldade em dizer não",
          "3. Explique emocionalmente seus limites",
          "4. Decline com vulnerabilidade",
          "5. Peça compreensão",
          "6. Reforce que não é pessoal",
          "7. Mantenha a conexão",
          "8. Estabeleça limites saudáveis"
        ]
      },
      direto: {
        curto: [
          "1. 'Não'",
          "2. Seja claro e breve",
          "3. Não se justifique"
        ],
        medio: [
          "1. Diga não imediatamente",
          "2. Seja claro e firme",
          "3. Ofereça razão concisa",
          "4. Não deixe margem para debate",
          "5. Mantenha a decisão"
        ],
        longo: [
          "1. Decline de imediato",
          "2. Seja firme e claro",
          "3. Ofereça justificativa objetiva",
          "4. Não abra espaço para negociação",
          "5. Mantenha consistência",
          "6. Estabeleça limites claros",
          "7. Seja educado mas inflexível",
          "8. Encerre o assunto"
        ]
      }
    },
    frasesProntas: {
      curto: "Agradeço, mas não vou poder fazer isso.",
      medio: "Obrigado por pensar em mim, mas infelizmente não vou conseguir ajudar com isso neste momento. Preciso manter meus limites para dar conta de outras prioridades.",
      longo: "Aprecio muito a confiança em me pedir isso, e entendo a importância. No entanto, preciso ser honesto: não vou conseguir assumir esse compromisso no momento. Tenho outras prioridades que precisam da minha atenção e não quero prometer algo que não consigo entregar com qualidade. Espero que você compreenda e encontre alguém que possa ajudar melhor do que eu conseguiria agora."
    },
    evitar: [
      "Evite se justificar excessivamente",
      "Evite mentir sobre suas razões",
      "Evite dizer 'talvez' quando é não",
      "Evite se culpar por ter limites"
    ],
    finalizar: "Mantenha sua posição com firmeza, agradeça a compreensão e não reabra a discussão. Limites são saudáveis."
  },
  {
    categoria: "falar que está magoado",
    sentimentos: "vulnerabilidade, mágoa, necessidade de ser ouvido",
    roteiros: {
      formal: {
        curto: [
          "1. Contextualize a situação",
          "2. Expresse o impacto emocional",
          "3. Peça consideração"
        ],
        medio: [
          "1. Escolha momento apropriado",
          "2. Descreva o que aconteceu",
          "3. Explique como te afetou",
          "4. Use 'eu sinto' ao invés de 'você fez'",
          "5. Peça mudança de comportamento"
        ],
        longo: [
          "1. Prepare-se emocionalmente",
          "2. Peça momento privado",
          "3. Contextualize objetivamente",
          "4. Descreva o comportamento específico",
          "5. Explique o impacto emocional em você",
          "6. Use comunicação não-violenta",
          "7. Peça empatia e compreensão",
          "8. Proponha mudança construtiva"
        ]
      },
      informal: {
        curto: [
          "1. 'Fiquei magoado com isso'",
          "2. Explique por quê",
          "3. Peça atenção ao que sentiu"
        ],
        medio: [
          "1. Encontre momento tranquilo",
          "2. Compartilhe seus sentimentos",
          "3. Explique o que te magoou",
          "4. Fale do coração",
          "5. Peça que não se repita"
        ],
        longo: [
          "1. Espere momento apropriado",
          "2. Abra-se sobre como se sentiu",
          "3. Conte o que te machucou",
          "4. Explique por que foi importante",
          "5. Compartilhe vulnerabilidade",
          "6. Peça empatia",
          "7. Busque reconexão",
          "8. Proponha resolver juntos"
        ]
      },
      emocional: {
        curto: [
          "1. Abra seu coração",
          "2. Chore se precisar",
          "3. Peça acolhimento"
        ],
        medio: [
          "1. Permita-se ser vulnerável",
          "2. Expresse a dor profunda",
          "3. Compartilhe como se sentiu",
          "4. Peça para ser ouvido",
          "5. Busque validação emocional"
        ],
        longo: [
          "1. Prepare-se para vulnerabilidade",
          "2. Crie espaço seguro",
          "3. Abra-se completamente",
          "4. Compartilhe a profundidade da mágoa",
          "5. Explique o impacto emocional",
          "6. Permita chorar e sentir",
          "7. Peça acolhimento e compreensão",
          "8. Busque cura emocional juntos"
        ]
      },
      direto: {
        curto: [
          "1. 'Você me magoou'",
          "2. Diga o que foi",
          "3. Peça que não repita"
        ],
        medio: [
          "1. Seja direto sobre a mágoa",
          "2. Cite o comportamento específico",
          "3. Explique objetivamente o impacto",
          "4. Peça mudança clara",
          "5. Estabeleça limites"
        ],
        longo: [
          "1. Vá direto ao ponto",
          "2. Descreva objetivamente o que aconteceu",
          "3. Explique claramente como te afetou",
          "4. Seja específico sobre a mágoa",
          "5. Peça reconhecimento",
          "6. Solicite mudança de comportamento",
          "7. Estabeleça consequências se necessário",
          "8. Defina expectativas futuras"
        ]
      }
    },
    frasesProntas: {
      curto: "Fiquei magoado com o que aconteceu e preciso te contar.",
      medio: "Preciso ser honesto com você: fiquei realmente magoado quando [situação]. Isso me afetou porque [razão]. Gostaria que você soubesse como me senti.",
      longo: "Preciso conversar com você sobre algo que me machucou. Quando [situação específica aconteceu], eu me senti [emoções]. Isso foi difícil para mim porque [contexto/importância]. Confio em você e por isso quero compartilhar isso ao invés de guardar. Espero que possamos conversar sobre isso e você entenda como me senti."
    },
    evitar: [
      "Evite acusar agressivamente",
      "Evite generalizar ('você sempre...')",
      "Evite minimizar seus próprios sentimentos",
      "Evite guardar rancor sem comunicar"
    ],
    finalizar: "Peça validação dos seus sentimentos, busque compreensão mútua e trabalhe juntos para evitar que se repita."
  },
  {
    categoria: "colocar limites",
    sentimentos: "firmeza, necessidade de respeito, empoderamento",
    roteiros: {
      formal: {
        curto: [
          "1. Defina o limite claramente",
          "2. Explique a razão",
          "3. Seja firme"
        ],
        medio: [
          "1. Contextualize a necessidade",
          "2. Estabeleça o limite específico",
          "3. Explique as razões objetivas",
          "4. Seja firme mas educado",
          "5. Defina consequências se necessário"
        ],
        longo: [
          "1. Prepare-se mentalmente",
          "2. Escolha momento apropriado",
          "3. Explique a necessidade do limite",
          "4. Defina claramente o que é aceitável",
          "5. Explique racionalmente as razões",
          "6. Seja firme e consistente",
          "7. Estabeleça consequências claras",
          "8. Mantenha profissionalismo"
        ]
      },
      informal: {
        curto: [
          "1. 'Preciso que você respeite isso'",
          "2. Diga qual é o limite",
          "3. Mantenha firmeza"
        ],
        medio: [
          "1. Explique o que te incomoda",
          "2. Defina o que você aceita",
          "3. Seja claro sobre o limite",
          "4. Mantenha a firmeza gentil",
          "5. Preserve a relação"
        ],
        longo: [
          "1. Encontre momento tranquilo",
          "2. Explique por que precisa do limite",
          "3. Defina claramente o que espera",
          "4. Seja honesto sobre suas necessidades",
          "5. Mantenha firmeza com gentileza",
          "6. Explique que não é pessoal",
          "7. Peça respeito",
          "8. Seja consistente"
        ]
      },
      emocional: {
        curto: [
          "1. Compartilhe como se sente",
          "2. Defina o que precisa",
          "3. Peça respeito"
        ],
        medio: [
          "1. Expresse suas emoções",
          "2. Explique o impacto em você",
          "3. Defina o limite necessário",
          "4. Peça empatia",
          "5. Mantenha firmeza emocional"
        ],
        longo: [
          "1. Prepare-se emocionalmente",
          "2. Compartilhe vulnerabilidade",
          "3. Explique o impacto emocional",
          "4. Defina o que você precisa",
          "5. Peça compreensão profunda",
          "6. Mantenha firmeza compassiva",
          "7. Estabeleça limite saudável",
          "8. Cuide de si mesmo"
        ]
      },
      direto: {
        curto: [
          "1. 'Este é meu limite'",
          "2. Seja claro e firme",
          "3. Não negocie"
        ],
        medio: [
          "1. Estabeleça o limite imediatamente",
          "2. Seja inequívoco",
          "3. Não se justifique demais",
          "4. Mantenha firmeza absoluta",
          "5. Defina consequências"
        ],
        longo: [
          "1. Defina o limite de imediato",
          "2. Seja absolutamente claro",
          "3. Não abra espaço para negociação",
          "4. Explique uma vez apenas",
          "5. Estabeleça consequências específicas",
          "6. Mantenha consistência total",
          "7. Não se desculpe pelo limite",
          "8. Aplique se for violado"
        ]
      }
    },
    frasesProntas: {
      curto: "Preciso estabelecer um limite aqui: [limite específico].",
      medio: "Preciso ser claro sobre algo: [comportamento] não funciona para mim. Daqui em diante, preciso que [limite específico] seja respeitado. Isso é importante para mim.",
      longo: "Preciso ter uma conversa importante sobre limites. Tenho percebido que [situação] e isso tem me afetado. Para manter nossa relação saudável, preciso estabelecer que [limite específico]. Não é nada pessoal contra você, mas é algo que preciso para meu bem-estar. Espero que você possa respeitar isso daqui em diante."
    },
    evitar: [
      "Evite se desculpar por ter limites",
      "Evite ceder ao primeiro questionamento",
      "Evite justificar excessivamente",
      "Evite ser agressivo ao estabelecer"
    ],
    finalizar: "Reforce o limite claramente, agradeça a compreensão e mantenha consistência absoluta ao aplicar."
  },
  {
    categoria: "dar feedback difícil",
    sentimentos: "responsabilidade, desconforto, desejo de ajudar",
    roteiros: {
      formal: {
        curto: [
          "1. Use a técnica sanduíche",
          "2. Seja específico sobre o problema",
          "3. Ofereça solução"
        ],
        medio: [
          "1. Agende reunião apropriada",
          "2. Comece com aspectos positivos",
          "3. Exponha o problema objetivamente",
          "4. Dê exemplos específicos",
          "5. Proponha melhoria e suporte"
        ],
        longo: [
          "1. Prepare exemplos concretos",
          "2. Escolha ambiente privado",
          "3. Reconheça contribuições positivas",
          "4. Apresente o problema de forma clara",
          "5. Use dados e exemplos específicos",
          "6. Evite ataques pessoais",
          "7. Proponha plano de desenvolvimento",
          "8. Ofereça suporte e recursos"
        ]
      },
      informal: {
        curto: [
          "1. Seja honesto mas gentil",
          "2. Diga o que precisa mudar",
          "3. Ofereça ajuda"
        ],
        medio: [
          "1. Encontre momento apropriado",
          "2. Comece reconhecendo qualidades",
          "3. Compartilhe a preocupação",
          "4. Seja específico",
          "5. Pergunte como pode ajudar"
        ],
        longo: [
          "1. Peça um momento para conversar",
          "2. Crie ambiente confortável",
          "3. Reconheça pontos fortes",
          "4. Compartilhe preocupação honesta",
          "5. Dê exemplos sem atacar",
          "6. Pergunte a perspectiva da pessoa",
          "7. Ofereça ajuda genuína",
          "8. Combinem plano juntos"
        ]
      },
      emocional: {
        curto: [
          "1. Compartilhe que é difícil falar",
          "2. Expresse preocupação genuína",
          "3. Ofereça apoio"
        ],
        medio: [
          "1. Demonstre cuidado pela pessoa",
          "2. Compartilhe suas emoções",
          "3. Exponha preocupação construtiva",
          "4. Mostre vulnerabilidade",
          "5. Ofereça apoio emocional"
        ],
        longo: [
          "1. Prepare-se emocionalmente",
          "2. Expresse quanto a pessoa importa",
          "3. Compartilhe a dificuldade de falar",
          "4. Dê feedback com compaixão",
          "5. Mostre que vem de cuidado",
          "6. Esteja aberto a ouvir",
          "7. Ofereça suporte total",
          "8. Mantenha conexão emocional"
        ]
      },
      direto: {
        curto: [
          "1. 'Preciso falar sobre X'",
          "2. Seja específico e objetivo",
          "3. Peça mudança clara"
        ],
        medio: [
          "1. Vá direto ao ponto",
          "2. Cite o problema especificamente",
          "3. Apresente impacto objetivo",
          "4. Solicite mudança clara",
          "5. Defina expectativas"
        ],
        longo: [
          "1. Seja direto desde o início",
          "2. Exponha o problema claramente",
          "3. Use exemplos concretos",
          "4. Explique impacto mensurável",
          "5. Defina expectativa de mudança",
          "6. Estabeleça prazo",
          "7. Ofereça recursos se necessário",
          "8. Agende acompanhamento"
        ]
      }
    },
    frasesProntas: {
      curto: "Preciso te dar um feedback: [problema específico] precisa melhorar.",
      medio: "Quero começar dizendo que reconheço [qualidade positiva]. No entanto, preciso te dar um feedback sobre [problema]. Tenho observado [exemplo específico] e isso tem impactado [consequência]. Gostaria de trabalharmos juntos para melhorar isso.",
      longo: "Aprecio muito [qualidades] que você demonstra. Ao mesmo tempo, preciso ser honesto sobre algo que tenho observado: [problema específico]. Por exemplo, [situação concreta]. Isso tem gerado [impacto objetivo]. Quero deixar claro que acredito no seu potencial e por isso estou trazendo isso. Como podemos trabalhar juntos para desenvolver essa área? Estou disposto a [oferta de suporte]."
    },
    evitar: [
      "Evite feedback em público",
      "Evite ser vago ou generalista",
      "Evite apenas criticar sem oferecer solução",
      "Evite ataques pessoais ao caráter"
    ],
    finalizar: "Pergunte se a pessoa entendeu, se tem algo a acrescentar, combinem ações concretas e agendem acompanhamento."
  },
  {
    categoria: "conversar sobre ciúmes",
    sentimentos: "insegurança, vulnerabilidade, medo de perder",
    roteiros: {
      formal: {
        curto: [
          "1. Reconheça seus sentimentos",
          "2. Explique sem acusar",
          "3. Peça reasseguramento"
        ],
        medio: [
          "1. Escolha momento calmo",
          "2. Assuma responsabilidade pelos sentimentos",
          "3. Explique gatilhos específicos",
          "4. Evite acusações",
          "5. Peça diálogo construtivo"
        ],
        longo: [
          "1. Prepare-se emocionalmente",
          "2. Escolha momento privado e calmo",
          "3. Reconheça que é sua emoção",
          "4. Explique gatilhos sem acusar",
          "5. Seja vulnerável sobre inseguranças",
          "6. Pergunte sobre a perspectiva do outro",
          "7. Busque reasseguramento mútuo",
          "8. Estabeleçam acordos de transparência"
        ]
      },
      informal: {
        curto: [
          "1. 'Estou sentindo ciúmes'",
          "2. Explique do que",
          "3. Peça compreensão"
        ],
        medio: [
          "1. Seja honesto sobre o que sente",
          "2. Explique a situação específica",
          "3. Não culpe a pessoa",
          "4. Compartilhe suas inseguranças",
          "5. Pergunte por reasseguramento"
        ],
        longo: [
          "1. Encontre momento tranquilo",
          "2. Abra-se sobre seus sentimentos",
          "3. Explique situações que te incomodam",
          "4. Assuma suas inseguranças",
          "5. Evite acusar ou controlar",
          "6. Pergunte sobre os sentimentos da pessoa",
          "7. Busquem transparência juntos",
          "8. Fortaleçam a confiança"
        ]
      },
      emocional: {
        curto: [
          "1. Seja vulnerável",
          "2. Compartilhe o medo",
          "3. Peça acolhimento"
        ],
        medio: [
          "1. Abra seu coração",
          "2. Compartilhe inseguranças profundas",
          "3. Explique o medo de perder",
          "4. Chore se precisar",
          "5. Peça amor e reasseguramento"
        ],
        longo: [
          "1. Crie espaço emocional seguro",
          "2. Seja completamente vulnerável",
          "3. Compartilhe medos mais profundos",
          "4. Explique origem das inseguranças",
          "5. Permita-se chorar e sentir",
          "6. Peça validação emocional",
          "7. Busque cura juntos",
          "8. Fortaleçam vínculo emocional"
        ]
      },
      direto: {
        curto: [
          "1. 'Sinto ciúmes de X'",
          "2. Seja específico",
          "3. Pergunte esclarecimento"
        ],
        medio: [
          "1. Seja direto sobre o sentimento",
          "2. Cite situação específica",
          "3. Evite rodeios",
          "4. Pergunte objetivamente",
          "5. Peça transparência"
        ],
        longo: [
          "1. Vá direto ao ponto",
          "2. Nomeie o sentimento claramente",
          "3. Cite situações específicas",
          "4. Faça perguntas objetivas",
          "5. Peça explicações claras",
          "6. Estabeleça limites se necessário",
          "7. Busque acordos concretos",
          "8. Defina expectativas mútuas"
        ]
      }
    },
    frasesProntas: {
      curto: "Preciso ser honesto: estou sentindo ciúmes em relação a [situação].",
      medio: "Quero conversar sobre algo que está me incomodando. Tenho sentido ciúmes quando [situação específica]. Sei que é minha insegurança, mas gostaria de conversar sobre isso com você e entender melhor.",
      longo: "Preciso ser vulnerável com você sobre algo. Tenho sentido ciúmes em relação a [situação]. Sei que ciúmes vem das minhas próprias inseguranças e não é culpa sua, mas preciso compartilhar isso porque você é importante para mim. Quando [situação acontece], eu sinto [emoção] porque [razão]. Não quero controlar você, só preciso de um pouco de reasseguramento e transparência. Podemos conversar sobre isso?"
    },
    evitar: [
      "Evite acusar sem evidências",
      "Evite tentar controlar a pessoa",
      "Evite revirar passado constantemente",
      "Evite guardar para si até explodir"
    ],
    finalizar: "Busquem reasseguramento mútuo, estabeleçam acordos de transparência saudáveis e trabalhem juntos na confiança."
  },
  {
    categoria: "resolver mal-entendido",
    sentimentos: "confusão, frustração, desejo de clareza",
    roteiros: {
      formal: {
        curto: [
          "1. Reconheça o mal-entendido",
          "2. Explique sua perspectiva",
          "3. Ouça a outra versão"
        ],
        medio: [
          "1. Peça conversa para esclarecer",
          "2. Exponha sua compreensão",
          "3. Pergunte a perspectiva do outro",
          "4. Identifique onde houve confusão",
          "5. Alinhem entendimento"
        ],
        longo: [
          "1. Solicite reunião para alinhar",
          "2. Crie ambiente aberto ao diálogo",
          "3. Apresente sua interpretação",
          "4. Peça a versão da outra parte",
          "5. Ouça ativamente sem interromper",
          "6. Identifiquem ponto de divergência",
          "7. Esclareçam ambos os lados",
          "8. Estabeleçam alinhamento futuro"
        ]
      },
      informal: {
        curto: [
          "1. 'Acho que nos entendemos mal'",
          "2. Explique o que você entendeu",
          "3. Pergunte o que a pessoa quis dizer"
        ],
        medio: [
          "1. Reconheça a confusão",
          "2. Conte como você interpretou",
          "3. Pergunte a intenção real",
          "4. Esclareçam juntos",
          "5. Resolvam de forma leve"
        ],
        longo: [
          "1. Inicie com leveza",
          "2. Diga que houve mal-entendido",
          "3. Compartilhe sua interpretação",
          "4. Pergunte abertamente a versão dela",
          "5. Ouça com empatia",
          "6. Identifiquem onde se perderam",
          "7. Riam da confusão se possível",
          "8. Sigam em frente esclarecidos"
        ]
      },
      emocional: {
        curto: [
          "1. Expresse como se sentiu",
          "2. Pergunte a intenção real",
          "3. Busque reconexão"
        ],
        medio: [
          "1. Compartilhe emoções geradas",
          "2. Explique interpretação emocional",
          "3. Pergunte o que foi pretendido",
          "4. Validem sentimentos mútuos",
          "5. Reconectem emocionalmente"
        ],
        longo: [
          "1. Crie espaço emocional seguro",
          "2. Compartilhe como se sentiu",
          "3. Explique impacto emocional",
          "4. Pergunte intenção verdadeira",
          "5. Ouça com coração aberto",
          "6. Validem sentimentos um do outro",
          "7. Esclareçam com empatia",
          "8. Fortaleçam conexão emocional"
        ]
      },
      direto: {
        curto: [
          "1. 'Houve mal-entendido'",
          "2. Esclareça objetivamente",
          "3. Alinhem e sigam"
        ],
        medio: [
          "1. Aponte o mal-entendido",
          "2. Exponha sua versão claramente",
          "3. Peça a versão do outro",
          "4. Identifiquem divergência",
          "5. Alinhem e encerrem"
        ],
        longo: [
          "1. Reconheça mal-entendido objetivamente",
          "2. Apresente fatos da sua perspectiva",
          "3. Solicite fatos da outra perspectiva",
          "4. Compare versões sem julgamento",
          "5. Identifiquem ponto exato de confusão",
          "6. Esclareçam definitivamente",
          "7. Estabeleçam comunicação clara",
          "8. Previnam futuros mal-entendidos"
        ]
      }
    },
    frasesProntas: {
      curto: "Acho que houve um mal-entendido. Podemos esclarecer?",
      medio: "Percebi que pode ter havido um mal-entendido entre nós. Eu entendi [X], mas talvez não tenha sido isso que você quis dizer. Pode me explicar melhor?",
      longo: "Gostaria de esclarecer uma situação porque acho que nos entendemos mal. Quando [situação aconteceu], eu interpretei como [sua interpretação] e isso me fez sentir [emoção]. Mas pensando melhor, percebi que talvez não tenha sido sua intenção. Pode me contar o que você realmente quis dizer? Quero ter certeza que estamos na mesma página."
    },
    evitar: [
      "Evite assumir má-fé",
      "Evite insistir que só sua versão está certa",
      "Evite interromper a explicação do outro",
      "Evite guardar rancor após esclarecer"
    ],
    finalizar: "Confirmem alinhamento, agradeçam pela disposição em esclarecer e estabeleçam comunicação mais clara daqui em diante."
  },
  {
    categoria: "conflito entre amigos",
    sentimentos: "tristeza, frustração, desejo de reconciliação",
    roteiros: {
      formal: {
        curto: [
          "1. Proponha conversa franca",
          "2. Exponha os problemas",
          "3. Busquem solução juntos"
        ],
        medio: [
          "1. Solicite conversa séria",
          "2. Reconheça valor da amizade",
          "3. Exponha pontos de conflito",
          "4. Ouça perspectiva do outro",
          "5. Busquem resolução mútua"
        ],
        longo: [
          "1. Peça momento apropriado para conversar",
          "2. Crie ambiente neutro e confortável",
          "3. Reafirme importância da amizade",
          "4. Exponha problemas objetivamente",
          "5. Ouça ativamente o outro lado",
          "6. Identifiquem causas do conflito",
          "7. Assumam responsabilidades",
          "8. Construam solução colaborativa"
        ]
      },
      informal: {
        curto: [
          "1. 'Precisamos conversar'",
          "2. Falem sobre o que está errado",
          "3. Resolvam como amigos"
        ],
        medio: [
          "1. Chame para conversar de verdade",
          "2. Digam o que está incomodando",
          "3. Ouçam um ao outro",
          "4. Reconheçam erros mútuos",
          "5. Façam as pazes"
        ],
        longo: [
          "1. Marquem para conversar com calma",
          "2. Comecem relembrando a amizade",
          "3. Falem abertamente do que deu errado",
          "4. Ouçam sem defensividade",
          "5. Assumam suas partes no conflito",
          "6. Peçam desculpas se necessário",
          "7. Perdoem de coração",
          "8. Retomem a amizade"
        ]
      },
      emocional: {
        curto: [
          "1. Abram o coração",
          "2. Falem da dor",
          "3. Reconciliem-se"
        ],
        medio: [
          "1. Sejam vulneráveis",
          "2. Compartilhem mágoas",
          "3. Expressem quanto sentem falta",
          "4. Chorem juntos se necessário",
          "5. Reconectem emocionalmente"
        ],
        longo: [
          "1. Criem espaço emocional seguro",
          "2. Abram completamente os corações",
          "3. Compartilhem dores profundas",
          "4. Expressem saudade da amizade",
          "5. Validem sentimentos mútuos",
          "6. Perdoem genuinamente",
          "7. Chorem e abracem",
          "8. Reconstruam laço emocional"
        ]
      },
      direto: {
        curto: [
          "1. 'Temos um problema'",
          "2. Falem objetivamente",
          "3. Resolvam rapidamente"
        ],
        medio: [
          "1. Encarem o conflito diretamente",
          "2. Exponham questões claramente",
          "3. Ouçam sem rodeios",
          "4. Resolvam objetivamente",
          "5. Sigam em frente"
        ],
        longo: [
          "1. Confrontem o problema diretamente",
          "2. Listem questões objetivamente",
          "3. Apresentem cada perspectiva",
          "4. Identifiquem soluções práticas",
          "5. Estabeleçam acordos claros",
          "6. Definam expectativas futuras",
          "7. Encerrem o assunto",
          "8. Retomem amizade"
        ]
      }
    },
    frasesProntas: {
      curto: "Nossa amizade é importante demais para deixar isso crescer. Precisamos conversar.",
      medio: "Sinto que algo está errado entre nós e não quero perder nossa amizade. Podemos conversar sobre o que está acontecendo? Quero entender seu lado e resolver isso juntos.",
      longo: "Nossa amizade significa muito para mim e por isso preciso falar sobre o que está acontecendo. Sinto que [problema] tem nos afastado. Não quero apontar dedos, só quero que conversemos de verdade. Posso ter errado também, e estou aberto a ouvir. O que importa é que nossa amizade vale a pena lutar. Podemos resolver isso?"
    },
    evitar: [
      "Evite envolver outras pessoas no conflito",
      "Evite usar redes sociais para ventilar",
      "Evite guardar rancor silencioso",
      "Evite apenas culpar o outro"
    ],
    finalizar: "Reafirmem a amizade, estabeleçam acordos para evitar novos conflitos e façam planos concretos de reconexão."
  }
];

function findConversationData(tipo, tom, tamanho) {
  const normalizedTipo = tipo.toLowerCase();
  const data = conversationDatabase.find(
    (item) => item.categoria.toLowerCase() === normalizedTipo
  );
  
  return data || null;
}

function getRoteiro(data, tom, tamanho) {
  const normalizedTom = tom.toLowerCase().replace("-", "");
  const normalizedTamanho = tamanho.toLowerCase().replace(" ", "");
  
  let tomKey = normalizedTom;
  if (normalizedTom === "semiformal" || normalizedTom === "descontraído") {
    tomKey = "informal";
  }
  
  let tamanhoKey = normalizedTamanho;
  if (normalizedTamanho === "muitocurta") {
    tamanhoKey = "curto";
  } else if (normalizedTamanho === "média") {
    tamanhoKey = "medio";
  }
  
  const roteiros = data.roteiros[tomKey];
  if (!roteiros) return data.roteiros["formal"]?.["curto"] || [];
  
  return roteiros[tamanhoKey] || roteiros["curto"] || [];
}

function getFrasePronta(data, tamanho) {
  const normalizedTamanho = tamanho.toLowerCase().replace(" ", "");
  
  let tamanhoKey = normalizedTamanho;
  if (normalizedTamanho === "muitocurta") {
    tamanhoKey = "curto";
  } else if (normalizedTamanho === "média") {
    tamanhoKey = "medio";
  }
  
  return data.frasesProntas[tamanhoKey] || data.frasesProntas["curto"] || "";
}
