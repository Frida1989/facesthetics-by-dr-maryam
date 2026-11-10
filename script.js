const dialog = document.querySelector('.image-dialog');
const dialogImage = document.querySelector('#dialog-image');
const dialogTitle = document.querySelector('#dialog-title');
let previousFocus;
document.querySelectorAll('[data-image]').forEach(button => {
  button.addEventListener('click', () => {
    previousFocus = button;
    dialogImage.src = button.dataset.image;
    dialogImage.alt = button.dataset.title;
    dialogTitle.textContent = button.dataset.title;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.style.overflow = '';
  previousFocus?.focus();
});
document.querySelector('#year').textContent = new Date().getFullYear();
const mobileBooking = document.querySelector('.mobile-booking');
if ('IntersectionObserver' in window) {
  let heroVisible = true;
  let bookingVisible = false;
  const updateBooking = () => { mobileBooking.hidden = heroVisible || bookingVisible; };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.target.classList.contains('hero-cta')) heroVisible = entry.isIntersecting || entry.boundingClientRect.top > 0;
      else bookingVisible = entry.isIntersecting;
    });
    updateBooking();
  });
  observer.observe(document.querySelector('.hero-cta'));
  observer.observe(document.querySelector('.booking-section'));
}

// Content stays visible if JavaScript or IntersectionObserver is unavailable.
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const items = document.querySelectorAll('.about > div, .credentials > div, .treatments-intro, .treatment-list article, .section-heading, .result-grid figure, .booking > h2, .booking > p, .booking > .button');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  items.forEach((item, index) => {
    item.classList.add('reveal');
    item.style.setProperty('--delay', `${(index % 3) * 65}ms`);
    revealObserver.observe(item);
  });
  document.documentElement.classList.add('motion-ready');
  addEventListener('beforeprint', () => items.forEach(item => item.classList.add('is-visible')));
}
