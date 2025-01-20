function openImage(element) {
    const imgSrc = element.querySelector('img').src;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    lightboxImg.src = imgSrc;
    lightbox.style.display = 'flex';
}

function closeImage() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
