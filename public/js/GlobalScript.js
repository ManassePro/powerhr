document.querySelectorAll('[data-count]').forEach(function (el) {
    const target = +el.getAttribute('data-count');
    const duration = 2000; // Durée totale de l'animation
    const step = Math.ceil(target / (duration / 50));

    let count = 0;
    const interval = setInterval(() => {
        count += step;
        if (count >= target) {
            count = target;
            clearInterval(interval);
        }
        el.textContent = count.toLocaleString();
    }, 50);
});

AOS.init();
