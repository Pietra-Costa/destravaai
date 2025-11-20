const btnMode = document.querySelector('#theme-toggle');

btnMode.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

const options = [
    { id: 'pedir desculpas', icon: '<span class="material-symbols-outlined">folded_hands</span>', title: 'Pedir Desculpas' },
    { id: 'terminar relacionamento', icon: '<span class="material-symbols-outlined">heart_broken</span>', title: 'Terminar Relacionamento' },
    { id: 'pedir aumento', icon: '<span class="material-symbols-outlined">money_bag</span>', title: 'Pedir Aumento' },
    { id: 'recusar convite', icon: '<span class="material-symbols-outlined">block</span>', title: 'Recusar Convite' },
    { id: 'cobrar alguém', icon: '<span class="material-symbols-outlined">timer</span>', title: 'Cobrar Alguém' },
    { id: 'dizer não', icon: '<span class="material-symbols-outlined">close</span>', title: 'Dizer Não' },
    { id: 'falar que está magoado', icon: '<span class="material-symbols-outlined">sentiment_sad</span>', title: 'Expressar Mágoa' },
    { id: 'colocar limites', icon: '<span class="material-symbols-outlined">shield_with_heart</span>', title: 'Colocar Limites' },
    { id: 'dar feedback difícil', icon: '<span class="material-symbols-outlined">chat_bubble</span>', title: 'Dar Feedback' },
    { id: 'conversar sobre ciúmes', icon: '<span class="material-symbols-outlined">favorite</span>', title: 'Falar sobre Ciúmes' },
    { id: 'resolver mal-entendido', icon: '<span class="material-symbols-outlined">replay</span>', title: 'Resolver Mal-entendido' },
    { id: 'conflito entre amigos', icon: '<span class="material-symbols-outlined">handshake</span>', title: 'Conflito de Amizade' },
  ];

// Carregar dados do JSON
let peopleTypesData = [];
let proximityLevelData = [];
let conversationPlaceData = [];
let conversationToneData = [];
let conversationLengthData = [];
let actionsData = [];

async function loadData() {
  try {
    const response = await fetch('data/dados.json');
    const data = await response.json();
    
    peopleTypesData = data.peopleTypes || [];
    proximityLevelData = data.proximityLevel || [];
    conversationPlaceData = data.conversationPlace || [];
    conversationToneData = data.conversationTone || [];
    conversationLengthData = data.conversationLength || [];
    actionsData = data.actions || [];
    
    renderStep2Cards();
    renderStep3ProximityCards();
    renderStep3PlaceCards();
    renderStep4Cards();
    renderStep5Cards();
    renderStep6Cards();
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
    // Fallback com dados padrão
    peopleTypesData = [
      { id: "chefe", icon: "👔", label: "Chefe" },
      { id: "colega", icon: "🤝", label: "Colega de Trabalho" },
      { id: "amigo", icon: "👥", label: "Amigo Próximo" },
      { id: "conhecido", icon: "👋", label: "Conhecido" },
      { id: "parente", icon: "👪", label: "Parente" },
      { id: "irmao", icon: "🧑‍🤝‍🧑", label: "Irmão/Irmã" },
      { id: "pais", icon: "👨‍👩‍👦", label: "Pai/Mãe" },
      { id: "parceiro", icon: "💕", label: "Crush/Parceiro" }
    ];
    
    proximityLevelData = [
      { id: "muito", label: "Muito Próximo", icon: "❤️" },
      { id: "medio", label: "Mediano", icon: "🤗" },
      { id: "pouco", label: "Pouco Próximo", icon: "🙂" },
      { id: "desconhecido", label: "Quase Desconhecido", icon: "😐" }
    ];
    
    conversationPlaceData = [
      { id: "trabalho", label: "Trabalho", icon: "💼" },
      { id: "familia", label: "Família", icon: "🏠" },
      { id: "escola", label: "Escola", icon: "🎓" },
      { id: "relacionamento", label: "Relacionamento", icon: "💑" },
      { id: "amizade", label: "Amizade", icon: "🤝" },
      { id: "online", label: "Online", icon: "💻" },
      { id: "publico", label: "Público", icon: "🌍" }
    ];
    
    conversationToneData = [
      { id: "formal", label: "Formal", icon: "🎩", desc: "Profissional e respeitoso" },
      { id: "semi-formal", label: "Semi-formal", icon: "👔", desc: "Equilibrado e educado" },
      { id: "descontraído", label: "Descontraído", icon: "😊", desc: "Leve e amigável" },
      { id: "emocional", label: "Emocional", icon: "💙", desc: "Vulnerável e profundo" },
      { id: "direto", label: "Direto", icon: "🎯", desc: "Objetivo e claro" },
      { id: "suave", label: "Suave", icon: "🌸", desc: "Gentil e cuidadoso" }
    ];
    
    conversationLengthData = [
      { id: "muito curta", label: "Muito Curta", icon: "⚡", time: "1-2 min", desc: "Rápida e direta" },
      { id: "curta", label: "Curta", icon: "🏃", time: "3-5 min", desc: "Objetiva e clara" },
      { id: "média", label: "Média", icon: "🚶", time: "5-10 min", desc: "Equilibrada" },
      { id: "longa", label: "Longa", icon: "🧘", time: "10+ min", desc: "Profunda e detalhada" }
    ];
    
    actionsData = [
      { id: "Incluir presente simbólico", icon: "🎁", label: "Presente Simbólico" },
      { id: "Escrever uma carta", icon: "✉️", label: "Escrever Carta" },
      { id: "Compor uma música", icon: "🎵", label: "Compor Música" },
      { id: "Criar um poema", icon: "📝", label: "Criar Poema" },
      { id: "Pedir desculpas explicitamente", icon: "🙏", label: "Pedir Desculpas" },
      { id: "Ser firme", icon: "💪", label: "Ser Firme" },
      { id: "Ser gentil", icon: "🌸", label: "Ser Gentil" },
      { id: "Evitar conflito", icon: "☮️", label: "Evitar Conflito" },
      { id: "Dar espaço para resposta", icon: "🎤", label: "Espaço p/ Resposta" },
      { id: "Incluir abraço", icon: "🤗", label: "Incluir Abraço" },
      { id: "Oferecer ajuda prática", icon: "🤝", label: "Oferecer Ajuda" },
      { id: "Marcar próximo encontro", icon: "📅", label: "Próximo Encontro" }
    ];
    
    renderStep2Cards();
    renderStep3ProximityCards();
    renderStep3PlaceCards();
    renderStep4Cards();
    renderStep5Cards();
    renderStep6Cards();
  }
}

// Carregar dados quando a página carregar
loadData();

  const input = document.getElementById("heroInput");
  const dropdown = document.getElementById("heroDropdown");
  const grid = document.getElementById("dropdownGrid");
  const wrapper = document.getElementById("heroInputWrapper");
  const submit = document.getElementById("heroSubmit");

  let isOpen = false;

  // Renderiza opções
  function renderDropdown(list) {
    grid.innerHTML = "";
    list.forEach(option => {
      const btn = document.createElement("button");
      btn.className = "dropdown-item";
      btn.dataset.title = option.title;

      btn.innerHTML = `
        <div class="dropdown-icon">${option.icon}</div>
        <div class="dropdown-text">${option.title}</div>
      `;

      btn.addEventListener("click", () => {
        input.value = option.title;
        
        // Sincronizar com step1
        const step1Input = document.querySelector('.step1 .hero-input');
        if (step1Input) {
          step1Input.value = option.title;
          if (typeof renderCards === 'function') {
            renderCards(option.title);
          }
        }
        
        closeDropdown();
        document.getElementById("ferramenta")?.scrollIntoView({ behavior: "smooth" });
      });

      grid.appendChild(btn);
    });
  }

  renderDropdown(options);

  // Abre dropdown ao focar
  input.addEventListener("focus", () => {
    openDropdown();
  });

  // Filtra
  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    const filtered = options.filter(o =>
      o.title.toLowerCase().includes(value)
    );
    renderDropdown(filtered);
    openDropdown();
  });

  // Enter para ir à ferramenta
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && input.value.trim()) {
      closeDropdown();
      document.getElementById("ferramenta")?.scrollIntoView({ behavior: "smooth" });
    }
    if (e.key === "Escape") closeDropdown();
  });

  // Botão de submit
  submit.addEventListener("click", () => {
    if (!input.value.trim()) return;
    closeDropdown();
    document.getElementById("ferramenta")?.scrollIntoView({ behavior: "smooth" });
  });

  // Abrir / fechar
  function openDropdown() {
    dropdown.classList.add("open");
    isOpen = true;
  }

  function closeDropdown() {
    dropdown.classList.remove("open");
    isOpen = false;
  }

  document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) closeDropdown();
  });

const totalSteps = 6;
let currentStep = 1;

let selectedCard = null;
let selectedStep2Card = null;
let selectedProximityCard = null;
let selectedPlaceCard = null;
let selectedToneCard = null;
let selectedLengthCard = null;
let selectedExtras = [];

function updateTimeline() {
  const steps = document.querySelectorAll('.step');
  const progressFill = document.getElementById('progress-bar-fill');
  
  steps.forEach(step => {
    const stepNum = parseInt(step.dataset.step);
    if (currentStep > stepNum) {
      step.querySelector('.circle').innerHTML = '✔';
      step.classList.add('active');
    } else if (currentStep === stepNum) {
      step.classList.add('active');
      step.querySelector('.circle').innerHTML = stepNum;
    } else {
      step.classList.remove('active');
      step.querySelector('.circle').innerHTML = stepNum;
    }
  });

  const percent = ((currentStep - 1) / (totalSteps - 1)) * 100;
  progressFill.style.width = percent + '%';
}

function showStep(stepNumber) {
  document.querySelectorAll('section[class^="step"]').forEach(section => {
    section.style.display = 'none';
  });
  
  const currentSection = document.querySelector(`.step${stepNumber}`);
  if (currentSection) {
    currentSection.style.display = 'block';
  }
  
  const backBtn = document.getElementById('backBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  if (backBtn) {
    backBtn.style.display = stepNumber === 1 ? 'none' : 'flex';
  }
  
  if (nextBtn) {
    const nextBtnText = stepNumber === totalSteps ? 'Finalizar' : 'Próximo';
    // Manter o SVG se houver
    const svg = nextBtn.querySelector('svg');
    if (svg) {
      nextBtn.innerHTML = nextBtnText;
      nextBtn.appendChild(svg);
    } else {
      nextBtn.textContent = nextBtnText;
    }
  }
  
  currentStep = stepNumber;
  updateTimeline();
  
  setTimeout(() => {
    if (typeof updateNextButton === 'function') {
      updateNextButton();
    }
  }, 50);
}

const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');

function updateNextButton() {
  if (!nextBtn) return;
  
  let hasSelection = false;
  
  if (currentStep === 1) {
    hasSelection = selectedCard !== null;
  } else if (currentStep === 2) {
    // Verificar se há card selecionado no step 2
    const step2Selected = document.querySelector('.step2-card.selected');
    hasSelection = step2Selected !== null;
  } else if (currentStep === 3) {
    // Verificar se ambos os cards do step 3 foram selecionados
    hasSelection = selectedProximityCard !== null && selectedPlaceCard !== null;
  } else if (currentStep === 4) {
    // Verificar se há tom selecionado
    hasSelection = selectedToneCard !== null;
  } else if (currentStep === 5) {
    // Verificar se há duração selecionada
    hasSelection = selectedLengthCard !== null;
  } else if (currentStep === 6) {
    // Step 6 é opcional, sempre pode avançar
    hasSelection = true;
  } else {
    // Para outros steps, permitir avançar
    hasSelection = true;
  }
  
  // Atualizar estado do botão
  if (hasSelection) {
    nextBtn.disabled = false;
    nextBtn.classList.remove('disabled');
  } else {
    nextBtn.disabled = true;
    nextBtn.classList.add('disabled');
  }
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    if (currentStep < totalSteps && !nextBtn.disabled) {
      showStep(currentStep + 1);
    }
  });
}

if (backBtn) {
  backBtn.addEventListener('click', () => {
    if (currentStep > 1) {
      showStep(currentStep - 1);
    }
  });
}

// Renderizar cards de conversas
const cardsContainer = document.querySelector('.cards');
const step1Input = document.querySelector('.step1 .hero-input');

function renderCards(filterText = '') {
  if (!cardsContainer) return;
  
  cardsContainer.innerHTML = '';
  const filter = filterText.toLowerCase().trim();
  let hasResults = false;
  
  options.forEach(item => {
    // Filtrar por texto
    if (filter && !item.title.toLowerCase().includes(filter)) {
      return;
    }
    
    hasResults = true;
    
    const card = document.createElement('div');
    card.className = 'conversation-card';
    card.dataset.id = item.id;
    
    // Se o título do card corresponde exatamente ao input, seleciona
    if (step1Input && item.title.toLowerCase() === step1Input.value.toLowerCase().trim()) {
      card.classList.add('selected');
      selectedCard = card;
    }
    
    card.innerHTML = `
      <div class="conversation-card-icon">
        ${item.icon}
      </div>
      <div class="conversation-card-title">${item.title}</div>
    `;
    
    card.addEventListener('click', () => {
      const allCards = cardsContainer.querySelectorAll('.conversation-card');
      
      // Se já está selecionado, desseleciona
      if (selectedCard === card) {
        card.classList.remove('selected');
        selectedCard = null;
        
        // Limpa o input
        if (step1Input) {
          step1Input.value = '';
        }
        
        // Mostra todos os cards novamente
        allCards.forEach(c => {
          c.classList.remove('hidden');
        });
        
        // Atualiza botão próximo
        updateNextButton();
      } else {
        // Remove seleção anterior
        if (selectedCard) {
          selectedCard.classList.remove('selected');
        }
        
        // Seleciona o card atual
        card.classList.add('selected');
        selectedCard = card;
        
        // Preenche o input
        if (step1Input) {
          step1Input.value = item.title;
        }
        
        // Ocultar outros cards
        allCards.forEach(c => {
          if (c !== card) {
            c.classList.add('hidden');
          }
        });
        
        // Atualiza botão próximo
        updateNextButton();
      }
    });
    
    cardsContainer.appendChild(card);
  });
  
  // Mostrar mensagem se não encontrar resultados
  if (!hasResults && filter) {
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.textContent = 'Nenhuma conversa encontrada';
    cardsContainer.appendChild(noResults);
  }
}

// Renderizar cards inicialmente
renderCards();

// Filtrar cards ao digitar no input do step1
if (step1Input) {
  step1Input.addEventListener('input', (e) => {
    // Limpar seleção quando começar a digitar
    selectedCard = null;
    renderCards(e.target.value);
    
    // Atualiza botão próximo
    updateNextButton();
  });
}

// Renderizar cards do step 2
function renderStep2Cards() {
  const cardsContainer = document.querySelector('.cards-step2');
  if (!cardsContainer || !peopleTypesData.length) return;
  
  cardsContainer.innerHTML = '';
  
  peopleTypesData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'conversation-card step2-card';
    card.dataset.id = item.id;
    
    card.innerHTML = `
      <div class="conversation-card-icon step2-icon">${item.icon}</div>
      <div class="conversation-card-title">${item.label}</div>
    `;
    
    card.addEventListener('click', () => {
      const allCards = cardsContainer.querySelectorAll('.step2-card');
      
      // Se já está selecionado, desseleciona
      if (selectedStep2Card === card) {
        card.classList.remove('selected');
        selectedStep2Card = null;
        allCards.forEach(c => c.classList.remove('hidden'));
        
        // Atualiza botão próximo
        updateNextButton();
      } else {
        // Remove seleção anterior
        if (selectedStep2Card) {
          selectedStep2Card.classList.remove('selected');
        }
        
        // Seleciona o card atual
        card.classList.add('selected');
        selectedStep2Card = card;
        
        // Ocultar outros cards
        allCards.forEach(c => {
          if (c !== card) {
            c.classList.add('hidden');
          }
        });
        
        // Atualiza botão próximo
        updateNextButton();
      }
    });
    
    cardsContainer.appendChild(card);
  });
}

// Renderizar cards do step 3 - Nível de Proximidade
function renderStep3ProximityCards() {
  const cardsContainer = document.querySelector('.cards-step3-proximity');
  if (!cardsContainer || !proximityLevelData.length) return;
  
  cardsContainer.innerHTML = '';
  
  proximityLevelData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'conversation-card step3-card step3-proximity-card';
    card.dataset.id = item.id;
    
    card.innerHTML = `
      <div class="conversation-card-icon step2-icon">${item.icon}</div>
      <div class="conversation-card-title">${item.label}</div>
    `;
    
    card.addEventListener('click', () => {
      const allCards = cardsContainer.querySelectorAll('.step3-proximity-card');
      
      if (selectedProximityCard === card) {
        card.classList.remove('selected');
        selectedProximityCard = null;
        allCards.forEach(c => c.classList.remove('hidden'));
        updateNextButton();
      } else {
        if (selectedProximityCard) {
          selectedProximityCard.classList.remove('selected');
        }
        
        card.classList.add('selected');
        selectedProximityCard = card;
        
        allCards.forEach(c => {
          if (c !== card) {
            c.classList.add('hidden');
          }
        });
        
        updateNextButton();
      }
    });
    
    cardsContainer.appendChild(card);
  });
}

// Renderizar cards do step 3 - Local da Conversa
function renderStep3PlaceCards() {
  const cardsContainer = document.querySelector('.cards-step3-place');
  if (!cardsContainer || !conversationPlaceData.length) return;
  
  cardsContainer.innerHTML = '';
  
  conversationPlaceData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'conversation-card step3-card step3-place-card';
    card.dataset.id = item.id;
    
    card.innerHTML = `
      <div class="conversation-card-icon step2-icon">${item.icon}</div>
      <div class="conversation-card-title">${item.label}</div>
    `;
    
    card.addEventListener('click', () => {
      const allCards = cardsContainer.querySelectorAll('.step3-place-card');
      
      if (selectedPlaceCard === card) {
        card.classList.remove('selected');
        selectedPlaceCard = null;
        allCards.forEach(c => c.classList.remove('hidden'));
        updateNextButton();
      } else {
        if (selectedPlaceCard) {
          selectedPlaceCard.classList.remove('selected');
        }
        
        card.classList.add('selected');
        selectedPlaceCard = card;
        
        allCards.forEach(c => {
          if (c !== card) {
            c.classList.add('hidden');
          }
        });
        
        updateNextButton();
      }
    });
    
    cardsContainer.appendChild(card);
  });
}

// Renderizar cards do step 4 - Tom da Conversa
function renderStep4Cards() {
  const cardsContainer = document.querySelector('.cards-step4');
  if (!cardsContainer || !conversationToneData.length) return;
  
  cardsContainer.innerHTML = '';
  
  conversationToneData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'conversation-card step4-card';
    card.dataset.id = item.id;
    
    card.innerHTML = `
      <div class="conversation-card-icon step2-icon">${item.icon}</div>
      <div class="conversation-card-title">${item.label}</div>
      ${item.desc ? `<div class="step5-card-desc">${item.desc}</div>` : ''}
    `;
    
    card.addEventListener('click', () => {
      const allCards = cardsContainer.querySelectorAll('.step4-card');
      
      if (selectedToneCard === card) {
        card.classList.remove('selected');
        selectedToneCard = null;
        allCards.forEach(c => c.classList.remove('hidden'));
        updateNextButton();
      } else {
        if (selectedToneCard) {
          selectedToneCard.classList.remove('selected');
        }
        
        card.classList.add('selected');
        selectedToneCard = card;
        
        allCards.forEach(c => {
          if (c !== card) {
            c.classList.add('hidden');
          }
        });
        
        updateNextButton();
      }
    });
    
    cardsContainer.appendChild(card);
  });
}

// Renderizar cards do step 5 - Duração da Conversa
function renderStep5Cards() {
  const cardsContainer = document.querySelector('.cards-step5');
  if (!cardsContainer || !conversationLengthData.length) return;
  
  cardsContainer.innerHTML = '';
  
  conversationLengthData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'conversation-card step5-card';
    card.dataset.id = item.id;
    
    card.innerHTML = `
      <div class="conversation-card-icon step2-icon">${item.icon}</div>
      <div class="conversation-card-title">${item.label}</div>
      ${item.time ? `<div class="step5-card-time">${item.time}</div>` : ''}
      ${item.desc ? `<div class="step5-card-desc">${item.desc}</div>` : ''}
    `;
    
    card.addEventListener('click', () => {
      const allCards = cardsContainer.querySelectorAll('.step5-card');
      
      if (selectedLengthCard === card) {
        card.classList.remove('selected');
        selectedLengthCard = null;
        allCards.forEach(c => c.classList.remove('hidden'));
        updateNextButton();
      } else {
        if (selectedLengthCard) {
          selectedLengthCard.classList.remove('selected');
        }
        
        card.classList.add('selected');
        selectedLengthCard = card;
        
        allCards.forEach(c => {
          if (c !== card) {
            c.classList.add('hidden');
          }
        });
        
        updateNextButton();
      }
    });
    
    cardsContainer.appendChild(card);
  });
}

// Renderizar cards do step 6 - Extras (múltipla seleção)
function renderStep6Cards() {
  const cardsContainer = document.querySelector('.cards-step6');
  if (!cardsContainer || !actionsData.length) return;
  
  cardsContainer.innerHTML = '';
  
  actionsData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'conversation-card step6-card';
    card.dataset.id = item.id;
    
    card.innerHTML = `
      <div class="conversation-card-icon step2-icon">${item.icon}</div>
      <div class="conversation-card-title">${item.label}</div>
    `;
    
    card.addEventListener('click', () => {
      // Step 6 permite múltipla seleção
      const index = selectedExtras.findIndex(c => c === card);
      
      if (index > -1) {
        // Já está selecionado, remover
        card.classList.remove('selected');
        selectedExtras.splice(index, 1);
      } else {
        // Adicionar à seleção
        card.classList.add('selected');
        selectedExtras.push(card);
      }
      
      updateNextButton();
    });
    
    cardsContainer.appendChild(card);
  });
}

// Renderizar cards do step2 quando os dados forem carregados
// A função será chamada automaticamente quando loadData() completar

// Inicializar a aplicação
showStep(1);

