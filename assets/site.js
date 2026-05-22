/* assets/site.js — The Home Improvement Company */

document.addEventListener('DOMContentLoaded', function() {

  // --- HAMBURGER MENU ---
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav-overlay');
  const mobileClose = document.querySelector('.mobile-nav-close');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
      hamburger.setAttribute('aria-expanded', 'true');
    });
    const closeMenu = () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
      hamburger.setAttribute('aria-expanded', 'false');
    };
    if (mobileClose) mobileClose.addEventListener('click', closeMenu);
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  }

  // --- ACCORDION (legacy) ---
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const body = this.nextElementSibling;
      const isOpen = this.classList.contains('open');
      document.querySelectorAll('.accordion-btn').forEach(b => {
        b.classList.remove('open');
        b.nextElementSibling.style.maxHeight = null;
      });
      if (!isOpen) {
        this.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // --- FAQ CARDS (saffron pattern) ---
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function() {
      const item = this.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-answer').style.maxHeight = null;
      });

      // Open this one if it was closed
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // --- BLOG SEARCH ---
  const searchInput = document.getElementById('blog-search');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const q = this.value.toLowerCase().trim();
      document.querySelectorAll('.blog-card').forEach(card => {
        const title = (card.querySelector('.blog-card-title') || card.querySelector('h3') || card).textContent.toLowerCase();
        const excerpt = (card.querySelector('.blog-card-excerpt') || { textContent: '' }).textContent.toLowerCase();
        card.style.display = (title.includes(q) || excerpt.includes(q) || !q) ? '' : 'none';
      });
    });
  }

  // --- COUNTRY SEARCH ---
  const countrySearch = document.getElementById('country-search');
  if (countrySearch) {
    countrySearch.addEventListener('input', function() {
      const q = this.value.toLowerCase().trim();
      document.querySelectorAll('.country-card').forEach(card => {
        const name = card.dataset.country || '';
        card.style.display = (name.includes(q) || !q) ? '' : 'none';
      });
    });
  }

  // --- NAV SCROLL — keep pill nav semi-opaque, slightly more opaque on scroll ---
  const nav = document.querySelector('.site-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.background = window.scrollY > 60
        ? 'rgba(255, 255, 255, 0.97)'
        : 'rgba(255, 255, 255, 0.92)';
    }, { passive: true });
  }

});
