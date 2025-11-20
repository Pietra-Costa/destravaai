// Geradores de conteúdo para extras

export function gerarCarta(tipoConversa: string, tom: string): string {
  const cartasModelos: Record<string, string> = {
    'pedir desculpas': `Querido(a),

Escrevo esta carta porque preciso expressar algo que tem pesado no meu coração. Sei que minhas ações causaram dor e desconforto, e por isso peço sinceras desculpas.

Reconheço que errei ao [descrever a situação] e compreendo como isso te afetou. Não há justificativa para o que aconteceu, mas quero que saiba que estou genuinamente arrependido(a).

Tenho refletido muito sobre a situação e percebi [aprendizado]. Estou trabalhando para ser uma pessoa melhor e garantir que isso não se repita.

Valorizo imensamente nosso relacionamento e espero que possamos superar esse momento juntos. Se você precisar de tempo e espaço, entenderei completamente.

Com carinho e respeito,
[Seu nome]`,

    'terminar relacionamento': `Querido(a),

Escrevo esta carta porque acredito que algumas palavras merecem ser ditas com cuidado e atenção, mesmo quando são difíceis.

Nossa jornada juntos foi significativa e guardarei com carinho os momentos que compartilhamos. No entanto, após muita reflexão, percebi que seguir caminhos separados é o mais honesto que posso fazer por nós dois.

Esta decisão não diminui o valor do que vivemos, nem significa que não me importo com você. Pelo contrário, é justamente por respeitar você e nosso passado que escolho ser sincero(a) agora.

Desejo de coração que você encontre a felicidade que merece. Você é uma pessoa especial e sempre terá um lugar de gratidão na minha história.

Com respeito e consideração,
[Seu nome]`,

    'default': `Querido(a),

Sinto a necessidade de colocar no papel algo que tem estado na minha mente e no meu coração.

[Expresse aqui a situação e seus sentimentos de forma honesta e respeitosa]

Escrevo isso porque nosso relacionamento é importante para mim e acredito que você merece saber o que sinto.

Espero que possamos conversar sobre isso quando você se sentir confortável.

Com carinho,
[Seu nome]`
  };

  return cartasModelos[tipoConversa] || cartasModelos['default'];
}

export function gerarMusica(tipoConversa: string): string {
  const musicasModelos: Record<string, string> = {
    'pedir desculpas': `🎵 "Recomeçar" 🎵

(Verso 1)
Sei que errei, não vou negar
As palavras que disse não posso apagar
Mas olho pra você e vejo a verdade
Nosso laço é mais forte que qualquer tempestade

(Refrão)
Perdão é o que eu peço agora
Com o coração na palma da minha mão
Quero recomeçar, se você deixar
Mostrar que mudei, que essa dor vai passar

(Verso 2)
Aprendi que o orgulho não vale a pena
Quando o que importa está em jogo, na cena
Você merece mais do que minhas falhas
Merece alguém que te valoriza sem barreiras ou batalhas

(Ponte)
E se me der mais uma chance
Vou provar que sou capaz de ser melhor
Cada dia, cada passo, um novo amanhecer
Com você ao meu lado, tudo faz mais sentido, você vai ver

(Refrão Final)
Perdão é o que eu peço agora
Com o coração exposto, sem proteção
Quero recomeçar, lado a lado caminhar
Porque o que temos é raro, é real, é amor de verdade`,

    'terminar relacionamento': `🎵 "Caminhos Diferentes" 🎵

(Verso 1)
Chegou a hora que eu temia
De dizer adeus ao que vivíamos
Não por falta de amor ou carinho
Mas porque seguimos destinos diferentes no caminho

(Refrão)
Às vezes amar é deixar ir
Mesmo quando dói, é o melhor a seguir
Nossos sonhos não se encontram mais
E tudo bem, isso não torna o amor menos real

(Verso 2)
Guardo cada riso, cada abraço
Cada momento fica como um laço
Que mesmo partido, ainda brilha
Na memória de uma história que foi minha e sua

(Ponte)
Não há culpados nessa equação
Apenas dois corações em direções diferentes
E eu te desejo tudo de melhor
Um amor que te faça feliz completamente

(Refrão Final)
Às vezes amar é deixar ir
Mesmo quando dói, é preciso seguir
Seremos sempre uma boa lembrança
Um capítulo bonito de nossa dança`,

    'default': `🎵 "Conversas do Coração" 🎵

(Verso 1)
Tem palavras guardadas dentro de mim
Sentimentos que pedem pra sair
É difícil encontrar o tom certo
Mas preciso te dizer o que sinto, sem desvio

(Refrão)
Abro meu coração, sem medo de errar
Porque o silêncio dói mais que o falar
Você merece saber a verdade
Mesmo que ela venha com fragilidade

(Verso 2)
Não sei se as palavras vão sair perfeitas
Mas vem do fundo da minha alma, aceitas
Quero construir pontes, não muros
Encontrar um caminho juntos, seguros

(Ponte)
E se for preciso tempo pra entender
Eu espero, porque você vale a pena
Conversas difíceis abrem portas
Para conexões mais profundas e belas

(Refrão Final)
Abro meu coração, aqui estou
Mostrando quem eu sou, sem filtro ou véu
Porque entre nós deve haver verdade
E isso é mais importante que qualquer vaidade`
  };

  return musicasModelos[tipoConversa] || musicasModelos['default'];
}

export function gerarPoema(tipoConversa: string): string {
  const poemasModelos: Record<string, string> = {
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

    'falar que está magoado': `📜 "Mágoa Silenciosa"

Guardo dentro do peito
Uma dor que não se vê.
Palavras que feriram direito,
Ações que machucaram você-sabe-quê.

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
Nos leve a um futuro mais puro.

Abro minha alma, meu ser,
Na esperança de nos encontrar.
Porque alguns laços, meu bem,
Vale a pena lutar pra salvar.`
  };

  return poemasModelos[tipoConversa] || poemasModelos['default'];
}

export function gerarIdeiasPresente(tipoConversa: string): string[] {
  const presentesModelos: Record<string, string[]> = {
    'pedir desculpas': [
      '🌹 Flores com um cartão sincero - Um gesto clássico que demonstra cuidado e arrependimento',
      '📖 Livro significativo - Escolha algo que mostre que você conhece os gostos da pessoa',
      '🍫 Chocolates ou doces favoritos - Acompanhado de uma carta escrita à mão',
      '🎁 Objeto simbólico - Algo que represente um momento especial que vocês compartilharam',
      '🖼️ Foto emoldurada - De um momento feliz juntos, mostrando o valor da relação',
      '🌱 Planta ou suculenta - Simbolizando um novo começo e crescimento juntos',
      '☕ Café/chá especial - Com uma caneca personalizada e tempo de qualidade juntos'
    ],

    'terminar relacionamento': [
      '📦 Caixa de memórias - Devolva itens pessoais com cuidado e respeito',
      '💌 Carta de gratidão - Expressando o que aprendeu e agradecendo os momentos',
      '🎵 Playlist - Com músicas que marcaram a relação (se apropriado)',
      '📔 Diário compartilhado - Se vocês mantinham um, organizado com carinho',
      '🌸 Flores brancas - Simbolizando paz, respeito e fechamento harmonioso'
    ],

    'falar que está magoado': [
      '🕯️ Momento especial - Prepare um ambiente acolhedor para a conversa',
      '☕ Bebida reconfortante - Chá, café ou chocolate quente durante a conversa',
      '📝 Carta complementar - Para expressar o que é difícil dizer verbalmente',
      '🧩 Quebra-cabeça - Simbolizando que juntos podem resolver as coisas',
      '🎨 Objeto artístico - Que represente seus sentimentos de forma visual'
    ],

    'pedir aumento': [
      '📊 Portfólio profissional - Documento organizado com suas conquistas',
      '📈 Gráficos de resultados - Visualização do seu impacto na empresa',
      '🏆 Certificados - De cursos e qualificações recentes',
      '📋 Proposta escrita - Documento formal com sua solicitação estruturada'
    ],

    'default': [
      '💌 Carta escrita à mão - Demonstrando tempo, cuidado e intenção sincera',
      '🎁 Presente simbólico - Algo pequeno mas significativo para vocês',
      '🌟 Tempo de qualidade - Oferecer fazer algo especial juntos',
      '🖼️ Lembrança especial - Algo que remeta a um momento importante compartilhado',
      '🌸 Flores ou planta - Representando cuidado e um gesto de carinho'
    ]
  };

  return presentesModelos[tipoConversa] || presentesModelos['default'];
}
