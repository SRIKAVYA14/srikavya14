document.querySelector('header nav ul').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
});
document.querySelector('.blog-posts').addEventListener('click', (e) => {
    if (e.target.tagName === 'H2') {
        e.target.parentNode.classList.toggle('expanded');
    }
});