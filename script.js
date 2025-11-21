const btnMode = document.querySelector('#theme-toggle');
const html = document.documentElement;

function updateAluraLogo() {
  const aluraLogo = document.querySelector('.alura-logo');
  const isDark = html.classList.contains("dark");
  if (aluraLogo) {
    aluraLogo.src = isDark ? "assets/alura.avif" : "assets/alura-dark.png";
  }
}

const currentTheme = localStorage.getItem('theme') || 'dark';
html.classList.toggle('dark', currentTheme === 'dark');
updateAluraLogo();

btnMode.addEventListener("click", () => {
  const isDark = html.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateAluraLogo();
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

let peopleTypesData = [];
let proximityLevelData = [];
let conversationToneData = [];
let conversationLengthData = [];
let actionsData = [];
let generatorsData = {};

async function loadData() {
  try {
    const response = await fetch('data/dados.json');
    const data = await response.json();
    
    peopleTypesData = data.peopleTypes || [];
    proximityLevelData = data.proximityLevel || [];
    conversationToneData = data.conversationTone || [];
    conversationLengthData = data.conversationLength || [];
    actionsData = data.actions || [];
    
    const generatorsResponse = await fetch('data/generators.json');
    generatorsData = await generatorsResponse.json();
    
    renderStep2Cards();
    renderStep3ProximityCards();
    renderStep4Cards();
    renderStep5Cards();
    renderStep6Cards();
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
  }
}

function generateRoteiro(choices) {
  const tipo = choices.conversationType ? choices.conversationType.toLowerCase() : 'default';
  return generatorsData.roteiros?.[tipo] || generatorsData.roteiros?.default || [];
}

function getStepDetails(index, conversationType) {
  const tipo = conversationType ? conversationType.toLowerCase() : 'default';
  const details = generatorsData.stepDetails?.[tipo] || generatorsData.stepDetails?.default || [];
  return details[index] || { 
    tips: [
      '✓ Continue com sinceridade',
      '✓ Mantenha a calma',
      '✓ Seja autêntico'
    ] 
  };
}

function generateFrase(choices) {
  const tipo = choices.conversationType ? choices.conversationType.toLowerCase() : 'default';
  return generatorsData.frases?.[tipo] || generatorsData.frases?.default || '';
}

function generateSentimentos(choices) {
  const tipo = choices.conversationType ? choices.conversationType.toLowerCase() : 'default';
  return generatorsData.sentimentos?.[tipo] || generatorsData.sentimentos?.default || '';
}

function generateEvitar(choices) {
  const tipo = choices.conversationType ? choices.conversationType.toLowerCase() : 'default';
  return generatorsData.evitar?.[tipo] || generatorsData.evitar?.default || [];
}

function generateFinalizar(choices) {
  const tipo = choices.conversationType ? choices.conversationType.toLowerCase() : 'default';
  return generatorsData.finalizar?.[tipo] || generatorsData.finalizar?.default || '';
}

function gerarCarta(choices) {
  const tipo = choices.conversationType ? choices.conversationType.toLowerCase() : 'default';
  return generatorsData.cartas?.[tipo] || generatorsData.cartas?.default || '';
}

function gerarPoema(choices) {
  const tipo = choices.conversationType ? choices.conversationType.toLowerCase() : 'default';
  return generatorsData.poemas?.[tipo] || generatorsData.poemas?.default || '';
}

function gerarMusica(choices) {
  const tipo = choices.conversationType ? choices.conversationType.toLowerCase() : 'default';
  return generatorsData.musicas?.[tipo] || generatorsData.musicas?.default || '';
}

function gerarDicaExtra(extraId, choices) {
  return generatorsData.dicasExtras?.[extraId] || `Dica personalizada para: ${extraId}`;
}

loadData();

  const input = document.getElementById("heroInput");
  const dropdown = document.getElementById("heroDropdown");
  const grid = document.getElementById("dropdownGrid");
  const wrapper = document.getElementById("heroInputWrapper");
  const submit = document.getElementById("heroSubmit");

  let isOpen = false;

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
        const step1Input = document.querySelector('.step1 .hero-input');
        if (step1Input) {
          step1Input.value = option.title;
          if (typeof renderCards === 'function') {
            renderCards(option.title);
          }
        }
        
        setTimeout(() => {
          if (typeof updateNextButton === 'function') {
            updateNextButton();
          }
        }, 100);
        
        closeDropdown();
        document.querySelector('.step1')?.scrollIntoView({ behavior: "smooth" });
      });

      grid.appendChild(btn);
    });
  }

  renderDropdown(options);

  input.addEventListener("focus", () => {
    openDropdown();
  });

  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    const filtered = options.filter(o =>
      o.title.toLowerCase().includes(value)
    );
    renderDropdown(filtered);
    openDropdown();
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && input.value.trim()) {
      const step1Input = document.querySelector('.step1 .hero-input');
      if (step1Input) {
        step1Input.value = input.value;
        if (typeof renderCards === 'function') {
          renderCards(input.value);
        }
      }
      
      setTimeout(() => {
        if (typeof updateNextButton === 'function') {
          updateNextButton();
        }
      }, 100);
      
      closeDropdown();
      document.querySelector('.step1')?.scrollIntoView({ behavior: "smooth" });
    }
    if (e.key === "Escape") closeDropdown();
  });

  submit.addEventListener("click", () => {
    if (!input.value.trim()) return;
    
    const step1Input = document.querySelector('.step1 .hero-input');
    if (step1Input) {
      step1Input.value = input.value;
      if (typeof renderCards === 'function') {
        renderCards(input.value);
      }
    }
    
    setTimeout(() => {
      if (typeof updateNextButton === 'function') {
        updateNextButton();
      }
    }, 100);
    
    closeDropdown();
    document.querySelector('.step1')?.scrollIntoView({ behavior: "smooth" });
  });

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
    const nextBtnText = stepNumber === totalSteps ? 'Destrava Aí' : 'Próximo';
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
    const step2Selected = document.querySelector('.step2-card.selected');
    hasSelection = step2Selected !== null;
  } else if (currentStep === 3) {
    hasSelection = selectedProximityCard !== null;
  } else if (currentStep === 4) {
    hasSelection = selectedToneCard !== null;
  } else if (currentStep === 5) {
    hasSelection = selectedLengthCard !== null;
  } else if (currentStep === 6) {
    hasSelection = true;
  } else {
    hasSelection = true;
  }
  
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
    console.log('Botão clicado. Step atual:', currentStep, 'Total steps:', totalSteps);
    if (currentStep < totalSteps && !nextBtn.disabled) {
      showStep(currentStep + 1);
    } else if (currentStep === totalSteps && !nextBtn.disabled) {
      console.log('Gerando resultados...');
      generateResults();
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

const cardsContainer = document.querySelector('.cards');
const step1Input = document.querySelector('.step1 .hero-input');

function renderCards(filterText = '') {
  if (!cardsContainer) return;
  
  cardsContainer.innerHTML = '';
  const filter = filterText.toLowerCase().trim();
  let hasResults = false;
  
  options.forEach(item => {
    if (filter && !item.title.toLowerCase().includes(filter)) {
      return;
    }
    
    hasResults = true;
    
    const card = document.createElement('div');
    card.className = 'conversation-card';
    card.dataset.id = item.id;
    
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
      
      if (selectedCard === card) {
        card.classList.remove('selected');
        selectedCard = null;
        
        if (step1Input) {
          step1Input.value = '';
        }
        
        allCards.forEach(c => {
          c.classList.remove('hidden');
        });
        
        updateNextButton();
      } else {
        if (selectedCard) {
          selectedCard.classList.remove('selected');
        }
        
        card.classList.add('selected');
        selectedCard = card;
        
        if (step1Input) {
          step1Input.value = item.title;
        }
        
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
  
  if (!hasResults && filter) {
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.textContent = 'Nenhuma conversa encontrada';
    cardsContainer.appendChild(noResults);
  }
}

renderCards();

if (step1Input) {
  step1Input.addEventListener('input', (e) => {
    selectedCard = null;
    renderCards(e.target.value);
    
    updateNextButton();
  });
}

function renderStep2Cards() {
  const cardsContainer = document.querySelector('.cards-step2');
  if (!cardsContainer || !peopleTypesData.length) return;
  
  cardsContainer.innerHTML = '';
  
  peopleTypesData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'conversation-card step2-card';
    card.dataset.id = item.id;
    
    card.innerHTML = `
      <div class="conversation-card-icon step2-icon"><span class="material-symbols-outlined">${item.icon}</span></div>
      <div class="conversation-card-title">${item.label}</div>
    `;
    
    card.addEventListener('click', () => {
      const allCards = cardsContainer.querySelectorAll('.step2-card');
      
      if (selectedStep2Card === card) {
        card.classList.remove('selected');
        selectedStep2Card = null;
        allCards.forEach(c => c.classList.remove('hidden'));
        
        updateNextButton();
      } else {
        if (selectedStep2Card) {
          selectedStep2Card.classList.remove('selected');
        }
        
        card.classList.add('selected');
        selectedStep2Card = card;
        
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

function renderStep3ProximityCards() {
  const cardsContainer = document.querySelector('.cards-step3-proximity');
  if (!cardsContainer || !proximityLevelData.length) return;
  
  cardsContainer.innerHTML = '';
  
  proximityLevelData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'conversation-card step3-card step3-proximity-card';
    card.dataset.id = item.id;
    
    card.innerHTML = `
      <div class="conversation-card-icon step2-icon"><span class="material-symbols-outlined">${item.icon}</span></div>
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

function renderStep4Cards() {
  const cardsContainer = document.querySelector('.cards-step4');
  if (!cardsContainer || !conversationToneData.length) return;
  
  cardsContainer.innerHTML = '';
  
  conversationToneData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'conversation-card step4-card';
    card.dataset.id = item.id;
    
    card.innerHTML = `
      <div class="conversation-card-icon step2-icon"><span class="material-symbols-outlined">${item.icon}</span></div>
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

function renderStep5Cards() {
  const cardsContainer = document.querySelector('.cards-step5');
  if (!cardsContainer || !conversationLengthData.length) return;
  
  cardsContainer.innerHTML = '';
  
  conversationLengthData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'conversation-card step5-card';
    card.dataset.id = item.id;
    
    card.innerHTML = `
      <div class="conversation-card-icon step2-icon"><span class="material-symbols-outlined">${item.icon}</span></div>
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

function renderStep6Cards() {
  const cardsContainer = document.querySelector('.cards-step6');
  if (!cardsContainer || !actionsData.length) return;
  
  cardsContainer.innerHTML = '';
  
  actionsData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'conversation-card step6-card';
    card.dataset.id = item.id;
    
    card.innerHTML = `
      <div class="conversation-card-icon step2-icon"><span class="material-symbols-outlined">${item.icon}</span></div>
      <div class="conversation-card-title">${item.label}</div>
    `;
    
    card.addEventListener('click', () => {
      const index = selectedExtras.findIndex(c => c === card);
      
      if (index > -1) {
        card.classList.remove('selected');
        selectedExtras.splice(index, 1);
      } else {
        card.classList.add('selected');
        selectedExtras.push(card);
      }
      
      updateNextButton();
    });
    
    cardsContainer.appendChild(card);
  });
}


showStep(1);

function getUserChoices() {
  return {
    conversationType: selectedCard ? selectedCard.dataset.id : null,
    personType: selectedStep2Card ? selectedStep2Card.dataset.id : null,
    proximity: selectedProximityCard ? selectedProximityCard.dataset.id : null,
    tone: selectedToneCard ? selectedToneCard.dataset.id : null,
    length: selectedLengthCard ? selectedLengthCard.dataset.id : null,
    extras: selectedExtras.map(card => card.dataset.id)
  };
}

function generateResults() {
  console.log('Função generateResults executada!');
  const choices = getUserChoices();
  console.log('Escolhas do usuário:', choices);
  
  document.querySelectorAll('section[class^="step"]').forEach(section => {
    section.style.display = 'none';
  });
  
  const timeline = document.querySelector('.timeline-container');
  const navigation = document.querySelector('.form-navigation');
  
  if (timeline) timeline.style.display = 'none';
  if (navigation) navigation.style.display = 'none';
  
  const resultsSection = document.getElementById('results');
  console.log('Seção de resultados:', resultsSection);
  
  if (resultsSection) {
    resultsSection.style.display = 'block';
    console.log('Seção de resultados mostrada!');
  } else {
    console.error('Seção de resultados não encontrada!');
  }
  
  document.getElementById('print-date').innerText = `Gerado em ${new Date().toLocaleDateString('pt-BR')}`;
  
  document.getElementById('frasePronta').innerText = generateFrase(choices);
  
  document.getElementById('sentimentos').innerText = generateSentimentos(choices);
  
  document.getElementById('finalizar').innerText = generateFinalizar(choices);
  
  const evitarList = document.getElementById('evitarList');
  evitarList.innerHTML = '';
  generateEvitar(choices).forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `✗ ${item}`;
    evitarList.appendChild(li);
  });
  
  const roteiroContainer = document.getElementById('roteiroContainer');
  if (roteiroContainer) {
    roteiroContainer.innerHTML = '<h3>Passo a Passo</h3>';
    generateRoteiro(choices).forEach((passo, i) => {
      const stepDetails = getStepDetails(i, choices.conversationType);
      const tipsHtml = stepDetails.tips.map(tip => `<p>${tip}</p>`).join('');
      
      const step = document.createElement('div');
      step.className = 'step-item accordion-item';
      step.innerHTML = `
        <div class="step-header accordion-header">
          <div class="step-number">${i+1}</div>
          <div class="step-title">${passo}</div>
        </div>
        <div class="step-content accordion-content">
          ${tipsHtml}
        </div>
      `;
      roteiroContainer.appendChild(step);
    });
  }
  
  const extrasContainer = document.getElementById('extrasContainer');
  if (extrasContainer) {
    extrasContainer.innerHTML = '';
  }
  
  if (choices.extras && choices.extras.length > 0 && extrasContainer) {
    choices.extras.forEach(extraId => {
      const div = document.createElement('div');
      div.className = 'extra';
      
      let tipo = '';
      let conteudo = '';
      
      if (extraId.toLowerCase().includes('carta')) {
        tipo = '✉️ Carta Personalizada';
        conteudo = gerarCarta(choices);
      } else if (extraId.toLowerCase().includes('poema')) {
        tipo = '📝 Poema';
        conteudo = gerarPoema(choices);
      } else if (extraId.toLowerCase().includes('música') || extraId.toLowerCase().includes('musica')) {
        tipo = '🎵 Música';
        conteudo = gerarMusica(choices);
      } else {
        tipo = `🎁 ${extraId}`;
        conteudo = gerarDicaExtra(extraId, choices);
      }
      
      div.innerHTML = `
        <div class="extra-header">${tipo}</div>
        <div class="extra-content">${conteudo}</div>
      `;
      extrasContainer.appendChild(div);
    });
  }
  
  setTimeout(() => {
    document.querySelectorAll('.accordion-header, .step-header').forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        if (content && (content.classList.contains('accordion-content') || content.classList.contains('step-content'))) {
          const isOpen = content.style.display === 'block';
          content.style.display = isOpen ? 'none' : 'block';
          header.classList.toggle('open', !isOpen);
        }
      });
    });
    
    document.querySelectorAll('.extra-header').forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        if (content && content.classList.contains('extra-content')) {
          const isOpen = content.style.display === 'block';
          content.style.display = isOpen ? 'none' : 'block';
          header.classList.toggle('open', !isOpen);
        }
      });
    });
  }, 100);
  
  document.getElementById('printButton').addEventListener('click', () => window.print());
  
  resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetForm() {
  // Esconde resultados
  const resultsSection = document.getElementById('results');
  if (resultsSection) {
    resultsSection.style.display = 'none';
  }
  
  // Mostra timeline e navegação
  const timeline = document.querySelector('.timeline-container');
  const navigation = document.querySelector('.form-navigation');
  if (timeline) timeline.style.display = 'block';
  if (navigation) navigation.style.display = 'flex';
  
  // Reseta variáveis
  currentStep = 1;
  selectedCard = null;
  selectedStep2Card = null;
  selectedProximityCard = null;
  selectedToneCard = null;
  selectedLengthCard = null;
  selectedExtras = [];
  
  // Limpa inputs
  const step1Input = document.getElementById('step1Input');
  if (step1Input) step1Input.value = '';
  
  // Remove seleções dos cards
  document.querySelectorAll('.conversation-card, .step2-card, .step3-proximity-card, .step4-card, .step5-card, .step6-card').forEach(card => {
    card.classList.remove('selected');
  });
  
  // Limpa containers de cards
  document.querySelectorAll('.cards, .cards-step2, .cards-step3-proximity, .cards-step4, .cards-step5, .cards-step6').forEach(container => {
    container.innerHTML = '';
  });
  
  // Renderiza os cards novamente
  renderCards();
  renderStep2Cards();
  renderStep3ProximityCards();
  renderStep4Cards();
  renderStep5Cards();
  renderStep6Cards();
  
  // Volta para step 1
  showStep(1);
  
  // Scroll para o topo
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('newConversation').addEventListener('click', resetForm);