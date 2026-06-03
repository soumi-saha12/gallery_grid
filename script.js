const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lbBgGrid = document.getElementById('lbBgGrid');
const lbImg = document.getElementById('lbImg');
const lbLabel = document.getElementById('lbLabel');
const lbCounter = document.getElementById('lbCounter');
const lbStrip = document.getElementById('lbStrip');
const lbClose = document.getElementById('lbClose');
const lbPrev = document.getElementById('lbPrev');
const lbNext = document.getElementById('lbNext');

let current = 0;

const imageData = Array.from(galleryItems).map(img => ({
  src: img.src,
  label: img.closest('.gallery-item').querySelector('.item-label')?.textContent || ''
}));

// Build background grid cells
imageData.forEach(data => {
  const cell = document.createElement('div');
  cell.className = 'lb-bg-cell';
  cell.style.backgroundImage = `url(${data.src})`;
  lbBgGrid.appendChild(cell);
});

// Build bottom strip thumbnails
imageData.forEach((data, i) => {
  const thumb = document.createElement('div');
  thumb.className = 'strip-thumb';
  thumb.style.backgroundImage = `url(${data.src})`;
  thumb.onclick = () => goTo(i);
  lbStrip.appendChild(thumb);
});

function openLightbox(i) {
  current = i;
  lightbox.classList.add('open');
  document.body.classList.add('lb-open');
  render();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.classList.remove('lb-open');
}

function goTo(i) {
  current = (i + imageData.length) % imageData.length;
  render();
}

function render() {
  const data = imageData[current];
  lbImg.src = data.src;
  lbLabel.textContent = data.label;
  lbCounter.textContent = (current + 1) + ' / ' + imageData.length;

  document.querySelectorAll('.lb-bg-cell').forEach((el, i) => {
    el.classList.toggle('is-active', i === current);
  });

  document.querySelectorAll('.strip-thumb').forEach((el, i) => {
    el.classList.toggle('active-strip', i === current);
  });
}

galleryItems.forEach((img, i) => {
  img.closest('.gallery-item').addEventListener('click', () => openLightbox(i));
});

lbClose.onclick = closeLightbox;
lbPrev.onclick = () => goTo(current - 1);
lbNext.onclick = () => goTo(current + 1);

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'ArrowRight') goTo(current + 1);
  if (e.key === 'ArrowLeft') goTo(current - 1);
  if (e.key === 'Escape') closeLightbox();
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

lightbox.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) < 50) return; // ignore accidental taps
  if (diff > 0) goTo(current + 1); // swipe left = next
  if (diff < 0) goTo(current - 1); // swipe right = prev
});
