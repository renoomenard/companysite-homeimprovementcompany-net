/* assets/site.js — The Home Improvement Company */

document.addEventListener('DOMContentLoaded', function() {

  // --- HAMBURGER MENU ---
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav-overlay');
  const mobileClose = document.querySelector('.mobile-nav-close');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => mobileNav.classList.add('open'));
    if (mobileClose) mobileClose.addEventListener('click', () => mobileNav.classList.remove('open'));
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));
  }

  // --- ACCORDION ---
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const body = this.nextElementSibling;
      const isOpen = this.classList.contains('open');

      // Close all
      document.querySelectorAll('.accordion-btn').forEach(b => {
        b.classList.remove('open');
        b.nextElementSibling.style.maxHeight = null;
      });

      // Open this one if it was closed
      if (!isOpen) {
        this.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
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
        const excerpt = (card.querySelector('.blog-card-excerpt') || {textContent:''}).textContent.toLowerCase();
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

  // --- NAV SCROLL EFFECT ---
  const nav = document.querySelector('.site-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.background = window.scrollY > 60
        ? 'rgba(10,34,64,0.97)'
        : 'rgba(10,34,64,0.85)';
    });
  }

});
