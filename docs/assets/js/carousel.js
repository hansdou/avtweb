(function () {
  function initCarousel() {
    const carousel = document.querySelector('.hero-carousel');
    if (!carousel) return;

    const slides = Array.from(carousel.querySelectorAll('.hero-slide'));
    const dots = Array.from(carousel.querySelectorAll('.carousel-dot'));
    const prevButton = carousel.querySelector('.carousel-prev');
    const nextButton = carousel.querySelector('.carousel-next');
    const progress = carousel.querySelector('.carousel-progress > span');

    if (!slides.length) return;

    const intervalMs = Number((window.SITE_CONFIG && window.SITE_CONFIG.carouselIntervalMs) || 6000);
    let activeIndex = Math.max(0, slides.findIndex((slide) => slide.classList.contains('is-active')));
    if (activeIndex < 0) activeIndex = 0;

    let timerId = null;
    let paused = false;
    let touchStartX = 0;
    let touchDeltaX = 0;

    function syncUI() {
      slides.forEach((slide, index) => {
        const isActive = index === activeIndex;
        slide.classList.toggle('is-active', isActive);
        slide.setAttribute('aria-hidden', String(!isActive));
      });

      dots.forEach((dot, index) => {
        const isActive = index === activeIndex;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-selected', String(isActive));
      });

      if (progress) {
        progress.style.transitionDuration = '0ms';
        progress.style.width = '0%';
        requestAnimationFrame(() => {
          progress.style.transitionDuration = intervalMs + 'ms';
          progress.style.width = paused ? '0%' : '100%';
        });
      }
    }

    function goTo(index) {
      activeIndex = (index + slides.length) % slides.length;
      syncUI();
    }

    function goNext() {
      goTo(activeIndex + 1);
    }

    function goPrev() {
      goTo(activeIndex - 1);
    }

    function startAutoplay() {
      clearInterval(timerId);
      if (paused) return;
      timerId = setInterval(goNext, intervalMs);
      if (progress) {
        progress.style.transitionDuration = '0ms';
        progress.style.width = '0%';
        requestAnimationFrame(() => {
          progress.style.transitionDuration = intervalMs + 'ms';
          progress.style.width = '100%';
        });
      }
    }

    function pauseAutoplay() {
      paused = true;
      clearInterval(timerId);
      if (progress) {
        const currentWidth = getComputedStyle(progress).width;
        progress.style.transitionDuration = '0ms';
        progress.style.width = currentWidth;
      }
    }

    function resumeAutoplay() {
      paused = false;
      startAutoplay();
    }

    if (prevButton) {
      prevButton.addEventListener('click', () => {
        goPrev();
        startAutoplay();
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', () => {
        goNext();
        startAutoplay();
      });
    }

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const index = Number(dot.getAttribute('data-slide'));
        if (!Number.isNaN(index)) {
          goTo(index);
          startAutoplay();
        }
      });
    });

    carousel.addEventListener('mouseenter', pauseAutoplay);
    carousel.addEventListener('mouseleave', resumeAutoplay);
    carousel.addEventListener('focusin', pauseAutoplay);
    carousel.addEventListener('focusout', (event) => {
      if (!carousel.contains(event.relatedTarget)) {
        resumeAutoplay();
      }
    });

    carousel.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        goNext();
        startAutoplay();
      }
      if (event.key === 'ArrowLeft') {
        goPrev();
        startAutoplay();
      }
    });

    carousel.addEventListener('touchstart', (event) => {
      touchStartX = event.changedTouches[0].clientX;
      touchDeltaX = 0;
    }, { passive: true });

    carousel.addEventListener('touchmove', (event) => {
      touchDeltaX = event.changedTouches[0].clientX - touchStartX;
    }, { passive: true });

    carousel.addEventListener('touchend', () => {
      if (Math.abs(touchDeltaX) < 45) return;
      if (touchDeltaX < 0) {
        goNext();
      } else {
        goPrev();
      }
      startAutoplay();
    });

    syncUI();
    startAutoplay();
  }

  document.addEventListener('DOMContentLoaded', initCarousel);
})();
