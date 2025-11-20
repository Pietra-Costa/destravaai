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

  // Clique fora fecha
  document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) closeDropdown();
  });