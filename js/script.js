// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile nav after clicking a link
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Duplicate ticker content for seamless loop
const track = document.getElementById('tickerTrack');
track.innerHTML += track.innerHTML;

// Back to top button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > 400);
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll('main section[id], .board .panel[id]');
const navLinks = document.querySelectorAll('nav.main-nav a');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });
sections.forEach(sec => observer.observe(sec));

// Simple client-side search filter across all listing panels
const searchForm = document.querySelector('.search-box');
const searchInput = searchForm.querySelector('input');
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  filterListings(searchInput.value.trim().toLowerCase());
});

function filterListings(query){
  const allItems = document.querySelectorAll('.board .panel li');
  let firstMatch = null;
  allItems.forEach(li => {
    const text = li.textContent.toLowerCase();
    const matches = query === '' || text.includes(query);
    li.style.display = matches ? '' : 'none';
    if (matches && !firstMatch && query !== '') firstMatch = li;
  });
  if (query !== '') {
    document.querySelector('.board').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Quick tag buttons run the same filter
document.querySelectorAll('.quick-tags button').forEach(btn => {
  btn.addEventListener('click', () => {
    searchInput.value = btn.textContent;
    filterListings(btn.textContent.toLowerCase());
  });
});
