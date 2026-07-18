document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const showroom = document.querySelector('#showroom');
if (showroom) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.24 });
  observer.observe(showroom);

  const modelData = {
    'em5-pro': {
      name: 'EM5 PRO', rating: '4.9', status: 'Dostępny',
      copy: 'Pełnowymiarowy elektryczny cross stworzony do jazdy w terenie — bez hałasu i bez kompromisów.',
      price: '13 999 zł', installment: 'Rata od 468 zł / mies.',
      specs: { power: '5600 W', speed: '83 km/h', range: 'do 80 km', battery: '60 V / 27 Ah', charging: '7–8 h' }
    },
    'em5-carbon': {
      name: 'EM5', rating: '—', status: 'Podgląd modelu',
      copy: 'Wstępna prezentacja modelu EM5. Pełne dane zostaną podpięte z docelowej karty produktu.',
      price: 'Zapytaj o cenę', installment: 'Szczegóły w pełnej ofercie',
      specs: { power: '—', speed: '—', range: '—', battery: '—', charging: '—' }
    },
    em23: {
      name: 'EM23', rating: '—', status: 'Model w ofercie',
      copy: 'Lekki elektryczny dirt bike z wyjmowanym akumulatorem — zwinny wybór do dynamicznej jazdy terenowej.',
      price: 'Cena do potwierdzenia', installment: 'Wycena po ustaleniu wariantu',
      specs: { power: '4000 W', speed: '70 km/h', range: 'do 80 km', battery: '60 V / 27 Ah', charging: '—' }
    },
    em26: {
      name: 'EM26', rating: '—', status: 'Podgląd modelu',
      copy: 'Wstępna prezentacja modelu EM26. Pełne dane zostaną podpięte z docelowej karty produktu.',
      price: 'Zapytaj o cenę', installment: 'Szczegóły w pełnej ofercie',
      specs: { power: '—', speed: '—', range: '—', battery: '—', charging: '—' }
    },
    'em5-ultra': {
      name: 'EM5 ULTRA', rating: '—', status: 'Podgląd modelu',
      copy: 'Wstępna prezentacja modelu EM5 Ultra. Pełne dane zostaną podpięte z docelowej karty produktu.',
      price: 'Zapytaj o cenę', installment: 'Szczegóły w pełnej ofercie',
      specs: { power: '—', speed: '—', range: '—', battery: '—', charging: '—' }
    }
  };

  const order = ['em5-pro', 'em5-carbon', 'em23', 'em26', 'em5-ultra'];
  const positions = ['front', 'right-near', 'right-far', 'left-far', 'left-near'];
  const bikeSlots = [...showroom.querySelectorAll('.bike-slot')];
  const thumbs = [...showroom.querySelectorAll('.model-thumb')];
  let selectedIndex = 0;

  const updateDetails = (key) => {
    const data = modelData[key];
    showroom.querySelector('[data-field="name"]').textContent = data.name;
    showroom.querySelector('[data-field="rating"]').textContent = data.rating;
    showroom.querySelector('[data-field="status"]').textContent = data.status;
    showroom.querySelector('.rating').classList.toggle('is-unrated', data.rating === '—');
    showroom.querySelector('[data-field="copy"]').textContent = data.copy;
    showroom.querySelector('[data-field="price"]').textContent = data.price;
    showroom.querySelector('[data-field="installment"]').textContent = data.installment;
    Object.entries(data.specs).forEach(([name, value]) => {
      showroom.querySelectorAll(`[data-spec="${name}"]`).forEach((node) => { node.textContent = value; });
    });
  };

  const selectModel = (key) => {
    const nextIndex = order.indexOf(key);
    if (nextIndex < 0) return;
    selectedIndex = nextIndex;

    bikeSlots.forEach((slot) => {
      const slotIndex = order.indexOf(slot.dataset.model);
      const position = positions[(slotIndex - selectedIndex + order.length) % order.length];
      slot.dataset.position = position;
      slot.classList.toggle('is-active', slot.dataset.model === key);
      if (position === 'front') {
        slot.classList.remove('is-turning');
        void slot.offsetWidth;
        slot.classList.add('is-turning');
      }
    });

    thumbs.forEach((thumb) => {
      const active = thumb.dataset.model === key;
      thumb.classList.toggle('active', active);
      thumb.setAttribute('aria-pressed', String(active));
    });
    updateDetails(key);
  };

  bikeSlots.forEach((slot) => slot.addEventListener('click', () => selectModel(slot.dataset.model)));
  thumbs.forEach((thumb) => thumb.addEventListener('click', () => selectModel(thumb.dataset.model)));
  showroom.querySelector('[data-carousel="prev"]').addEventListener('click', () => selectModel(order[(selectedIndex - 1 + order.length) % order.length]));
  showroom.querySelector('[data-carousel="next"]').addEventListener('click', () => selectModel(order[(selectedIndex + 1) % order.length]));

  showroom.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') selectModel(order[(selectedIndex - 1 + order.length) % order.length]);
    if (event.key === 'ArrowRight') selectModel(order[(selectedIndex + 1) % order.length]);
  });

  let touchStartX = null;
  showroom.addEventListener('touchstart', (event) => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
  showroom.addEventListener('touchend', (event) => {
    if (touchStartX === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 55) selectModel(order[(selectedIndex + (distance < 0 ? 1 : -1) + order.length) % order.length]);
    touchStartX = null;
  }, { passive: true });
}

const presentation = document.querySelector('#model-presentation');
if (presentation) {
  const presentationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.18 });
  presentationObserver.observe(presentation);

  const componentData = {
    led: {
      number: '01 / 04', image: 'component-led.png', alt: 'Przedni reflektor LED Valtinsu EM5 Pro',
      eyebrow: 'Rozświetl cień', title: 'Przedni reflektor LED', spec: 'High-Power LED · IP65 / IPX6',
      description: 'Punktowa wiązka Spot skupia światło daleko przed motocyklem i poprawia widoczność przeszkód podczas jazdy po zmroku.',
      benefit: 'Lepsza widoczność, większe bezpieczeństwo i charakterystyczny wygląd przedniej części motocykla.'
    },
    fork: {
      number: '02 / 04', image: 'component-fork.png', alt: 'Hydrauliczny widelec Valtinsu EM5 Pro',
      eyebrow: 'Pełna kontrola', title: 'Hydrauliczny widelec USD', spec: 'Skok 150 mm · konstrukcja odwrócona',
      description: 'Wewnętrzne kartridże olejowe i sztywna konstrukcja ograniczają drgania oraz stabilizują motocykl na korzeniach, kamieniach i nierównościach.',
      benefit: 'Precyzyjne prowadzenie, mniej uderzeń na kierownicy i większa pewność w trudnym terenie.'
    },
    battery: {
      number: '03 / 04', image: 'component-battery.png', alt: 'Wyjmowany akumulator Valtinsu EM5 Pro',
      eyebrow: 'Energia na dłużej', title: 'Wyjmowany akumulator', spec: '60 V / 27 Ah · 1620 Wh · BMS',
      description: 'Litowo-jonowy pakiet można wyjąć po odblokowaniu kanapy i ładować poza motocyklem. Zintegrowany BMS chroni ogniwa podczas pracy i ładowania.',
      benefit: 'Wygodne ładowanie w dowolnym miejscu oraz ochrona akumulatora przed przeciążeniem i nadmiernym rozładowaniem.'
    },
    motor: {
      number: '04 / 04', image: 'component-motor.png', alt: 'Centralny silnik Valtinsu EM5 Pro',
      eyebrow: 'Moc pod kontrolą', title: 'Centralny silnik Mid-Drive', spec: '5600 W peak · 2500 W nominal · 210–240 Nm',
      description: 'Centralne położenie napędu obniża środek ciężkości, poprawia rozkład masy i zapewnia natychmiastową reakcję na manetkę.',
      benefit: 'Dynamiczne przyspieszenie, stabilność na podjazdach i pełna moc w najmocniejszym trybie jazdy.'
    }
  };

  const componentImage = presentation.querySelector('[data-component-image]');
  const setComponent = (key) => {
    const data = componentData[key];
    if (!data) return;
    componentImage.src = (window.BOWZER_ASSETS || {})[data.image] || componentImage.src;
    componentImage.alt = data.alt;
    presentation.querySelector('[data-component-count]').textContent = data.number;
    presentation.querySelector('[data-component-eyebrow]').textContent = data.eyebrow;
    presentation.querySelector('[data-component-title]').textContent = data.title;
    presentation.querySelector('[data-component-spec]').textContent = data.spec;
    presentation.querySelector('[data-component-description]').textContent = data.description;
    presentation.querySelector('[data-component-benefit]').textContent = data.benefit;
    presentation.querySelectorAll('[data-component]').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.component === key);
    });
    presentation.querySelector('.component-panel').classList.remove('is-changing');
    void presentation.querySelector('.component-panel').offsetWidth;
    presentation.querySelector('.component-panel').classList.add('is-changing');
  };

  presentation.querySelectorAll('[data-component]').forEach((button) => {
    button.addEventListener('click', () => setComponent(button.dataset.component));
  });

  const viewer = presentation.querySelector('[data-viewer]');
  presentation.querySelector('[data-view-action="rotate"]').addEventListener('click', () => {
    viewer.classList.toggle('is-turned');
  });
  presentation.querySelector('[data-view-action="zoom"]').addEventListener('click', () => {
    viewer.classList.toggle('is-zoomed');
  });
  presentation.querySelector('[data-view-action="fullscreen"]').addEventListener('click', () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else if (presentation.requestFullscreen) presentation.requestFullscreen();
  });

  const toast = presentation.querySelector('.demo-toast');
  let toastTimer;
  presentation.querySelectorAll('[data-demo-action]').forEach((button) => {
    button.addEventListener('click', () => {
      toast.textContent = button.dataset.demoAction === 'buy'
        ? 'W pełnej wersji tutaj rozpocznie się zakup EM5 PRO.'
        : 'W pełnej wersji tutaj otworzy się formularz jazdy próbnej.';
      toast.classList.add('is-visible');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3200);
    });
  });
}
