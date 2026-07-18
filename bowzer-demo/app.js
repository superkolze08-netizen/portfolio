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
      specs: { power: '5600 W', speed: '80 km/h', range: 'do 100 km', battery: '60V 27Ah', charging: '7–8 h' }
    },
    'em5-carbon': {
      name: 'EM5', rating: '—', status: 'Podgląd modelu',
      copy: 'Wstępna prezentacja modelu EM5. Pełne dane zostaną podpięte z docelowej karty produktu.',
      price: 'Zapytaj o cenę', installment: 'Szczegóły w pełnej ofercie',
      specs: { power: '—', speed: '—', range: '—', battery: '—', charging: '—' }
    },
    em23: {
      name: 'EM23', rating: '—', status: 'Podgląd modelu',
      copy: 'Wstępna prezentacja modelu EM23. Pełne dane zostaną podpięte z docelowej karty produktu.',
      price: 'Zapytaj o cenę', installment: 'Szczegóły w pełnej ofercie',
      specs: { power: '—', speed: '—', range: '—', battery: '—', charging: '—' }
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
