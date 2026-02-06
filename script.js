// Tombol Scroll to Top
const btn = document.createElement('button');
btn.textContent = '↑ Top';
btn.id = 'scrollTopBtn';
btn.style.position = 'fixed';
btn.style.bottom = '20px';
btn.style.right = '20px';
btn.style.display = 'none';
document.body.appendChild(btn);

// Tampilkan tombol saat scroll lebih dari 200px
window.addEventListener('scroll', () => {
  btn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

// Scroll ke atas dengan smooth saat tombol diklik
btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scroll pada semua anchor internal
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});


