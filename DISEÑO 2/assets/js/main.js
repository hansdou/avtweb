(function () {
  const config = window.SITE_CONFIG || {};

  function setCurrentYear() {
    const year = String(new Date().getFullYear());
    document.querySelectorAll('.js-current-year').forEach((el) => {
      el.textContent = year;
    });
  }

  function setContactData() {
    if (config.contactEmail) {
      document.querySelectorAll('[data-contact-email]').forEach((el) => {
        el.textContent = config.contactEmail;
      });
      document.querySelectorAll('[data-contact-email-link]').forEach((el) => {
        el.setAttribute('href', 'mailto:' + config.contactEmail);
      });
    }

    if (config.contactPhone) {
      document.querySelectorAll('[data-contact-phone]').forEach((el) => {
        el.textContent = config.contactPhone;
      });
    }

    if (config.whatsappNumber) {
      const whatsappUrl = 'https://wa.me/' + config.whatsappNumber;
      document.querySelectorAll('.js-whatsapp-link').forEach((el) => {
        el.setAttribute('href', whatsappUrl);
      });
    }
  }

  function setActiveNav() {
    const currentFile = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('[data-nav]').forEach((link) => {
      const href = (link.getAttribute('href') || '').toLowerCase();
      const isHomeAlias = (currentFile === '' || currentFile === 'index.html') && href === 'index.html';
      const isActive = href === currentFile || isHomeAlias;
      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  function setupHeaderState() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const updateState = () => {
      if (window.scrollY > 12) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };

    updateState();
    window.addEventListener('scroll', updateState, { passive: true });
  }

  function setupMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const menu = document.getElementById('mobileMenu');

    if (!toggle || !menu) return;

    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('data-open', 'false');
      menu.hidden = true;
      document.body.style.overflow = '';
    };

    const openMenu = () => {
      toggle.setAttribute('aria-expanded', 'true');
      menu.hidden = false;
      menu.setAttribute('data-open', 'true');
      document.body.style.overflow = 'hidden';
    };

    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    });
  }

  function setupServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (!modal) return;

    const body = document.body;
    const closeButtons = modal.querySelectorAll('[data-close-modal]');
    const triggers = document.querySelectorAll('[data-service-trigger]');
    const title = document.getElementById('serviceModalTitle');
    const image = document.getElementById('serviceModalImage');
    const description = document.getElementById('serviceModalDescription');
    const features = document.getElementById('serviceModalFeatures');

    if (!title || !image || !description || !features) return;

    let lastFocused = null;

    const closeModal = () => {
      modal.setAttribute('aria-hidden', 'true');
      body.style.overflow = '';
      if (lastFocused && typeof lastFocused.focus === 'function') {
        lastFocused.focus();
      }
    };

    const openModal = (payload, source) => {
      title.textContent = payload.title || 'Servicio';
      description.textContent = payload.description || '';
      image.src = payload.image || '';
      image.alt = payload.title || 'Servicio';

      const featureItems = (payload.features || '').split('|').map((item) => item.trim()).filter(Boolean);
      features.innerHTML = '';
      featureItems.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        features.appendChild(li);
      });

      lastFocused = source;
      modal.setAttribute('aria-hidden', 'false');
      body.style.overflow = 'hidden';
      const firstButton = modal.querySelector('button, a');
      if (firstButton) {
        firstButton.focus();
      }
    };

    triggers.forEach((button) => {
      button.addEventListener('click', () => {
        openModal(
          {
            title: button.getAttribute('data-service-title') || '',
            image: button.getAttribute('data-service-image') || '',
            description: button.getAttribute('data-service-description') || '',
            features: button.getAttribute('data-service-features') || ''
          },
          button
        );
      });
    });

    closeButtons.forEach((button) => {
      button.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
        closeModal();
      }
    });
  }

  function setupProjectGalleryModal() {
    const modal = document.getElementById('projectGalleryModal');
    if (!modal) return;

    const body = document.body;
    const triggers = Array.from(document.querySelectorAll('[data-project-gallery-trigger]'));
    const closeButtons = modal.querySelectorAll('[data-project-gallery-close]');
    const prevButton = modal.querySelector('[data-project-gallery-prev]');
    const nextButton = modal.querySelector('[data-project-gallery-next]');
    const title = document.getElementById('projectGalleryTitle');
    const image = document.getElementById('projectGalleryImage');
    const counter = document.getElementById('projectGalleryCounter');

    if (!title || !image || !counter) return;

    let activeImages = [];
    let activeTitle = '';
    let activeIndex = 0;
    let lastFocused = null;

    const isOpen = () => modal.getAttribute('aria-hidden') === 'false';

    const parseImages = (value) => {
      return (value || '')
        .split('|')
        .map((item) => item.trim())
        .filter(Boolean);
    };

    const updateNavState = () => {
      const singleImage = activeImages.length <= 1;
      if (prevButton) {
        prevButton.disabled = singleImage;
        prevButton.setAttribute('aria-disabled', String(singleImage));
      }
      if (nextButton) {
        nextButton.disabled = singleImage;
        nextButton.setAttribute('aria-disabled', String(singleImage));
      }
    };

    const render = () => {
      if (!activeImages.length) return;

      const total = activeImages.length;
      activeIndex = (activeIndex + total) % total;
      image.src = activeImages[activeIndex];
      image.alt = (activeTitle || 'Proyecto') + ' - foto ' + (activeIndex + 1) + ' de ' + total;
      counter.textContent = (activeIndex + 1) + ' / ' + total;
      updateNavState();
    };

    const closeModal = () => {
      modal.setAttribute('aria-hidden', 'true');
      body.style.overflow = '';
      if (lastFocused && typeof lastFocused.focus === 'function') {
        lastFocused.focus();
      }
    };

    const openModal = (payload, source) => {
      const images = parseImages(payload.images);
      if (!images.length) return;

      activeImages = images;
      activeTitle = payload.title || 'Galería del proyecto';
      activeIndex = 0;
      title.textContent = activeTitle;
      render();

      lastFocused = source;
      modal.setAttribute('aria-hidden', 'false');
      body.style.overflow = 'hidden';
      const firstControl = modal.querySelector('[data-project-gallery-close], [data-project-gallery-prev], [data-project-gallery-next]');
      if (firstControl) {
        firstControl.focus();
      }
    };

    const goPrev = () => {
      if (activeImages.length <= 1) return;
      activeIndex -= 1;
      render();
    };

    const goNext = () => {
      if (activeImages.length <= 1) return;
      activeIndex += 1;
      render();
    };

    triggers.forEach((button) => {
      button.addEventListener('click', () => {
        openModal(
          {
            title: button.getAttribute('data-project-gallery-title') || '',
            images: button.getAttribute('data-project-gallery-images') || ''
          },
          button
        );
      });
    });

    closeButtons.forEach((button) => {
      button.addEventListener('click', closeModal);
    });

    if (prevButton) {
      prevButton.addEventListener('click', goPrev);
    }

    if (nextButton) {
      nextButton.addEventListener('click', goNext);
    }

    document.addEventListener('keydown', (event) => {
      if (!isOpen()) return;

      if (event.key === 'Escape') {
        closeModal();
        return;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goPrev();
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        goNext();
      }
    });
  }

  function init() {
    setCurrentYear();
    setContactData();
    setActiveNav();
    setupHeaderState();
    setupMobileMenu();
    setupServiceModal();
    setupProjectGalleryModal();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
