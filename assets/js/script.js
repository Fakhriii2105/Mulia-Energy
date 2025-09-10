(function () {
    const burger = document.getElementById('burger');
    const body = document.body;
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();

    burger.addEventListener('click', () => {
        const expanded = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', String(!expanded));
        body.classList.toggle('menu-open');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.site-header')) {
            body.classList.remove('menu-open');
            burger.setAttribute('aria-expanded', 'false');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').slice(1);
            if (!targetId) return;
            const el = document.getElementById(targetId);
            if (el) {
                e.preventDefault();
                const headerOffset = document.querySelector('.site-header').offsetHeight + 12;
                const rect = el.getBoundingClientRect();
                const top = window.pageYOffset + rect.top - headerOffset;
                window.scrollTo({ top, behavior: 'smooth' });
                body.classList.remove('menu-open');
                burger.setAttribute('aria-expanded', 'false');
            }
        });
    });

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = new FormData(form);
            if (!data.get('name') || !data.get('email') || !data.get('message')) {
                alert('Please complete required fields.');
                return;
            }
            alert('Thank you — message sent to Investor Relations (demo).');
            form.reset();
        });
    }

    const heroBg = document.querySelector('.hero-bg');
    function onScroll() {
        const scrolled = window.scrollY;
        const y = Math.max(0, scrolled * 0.18);
        heroBg.style.transform = `translateY(${y}px) scale(1.05)`;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 900) {
                body.classList.remove('menu-open');
                burger.setAttribute('aria-expanded', 'false');
            }
        }, 150);
    });
})();

function animateProgress() {
    const progressBars = document.querySelectorAll('.progress-bar span');
    const progressValues = document.querySelectorAll('.progress-value');

    progressBars.forEach((bar, index) => {
        const target = parseInt(bar.getAttribute('data-progress'), 10);
        let start = null;

        // reset dulu
        bar.style.width = "0%";
        progressValues[index].textContent = "0%";

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / 2000, 1); // 2000ms = 2 detik
            const current = Math.floor(progress * target);

            bar.style.width = current + "%";
            progressValues[index].textContent = current + "%";

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    });
}

const esgSection = document.querySelector('.esg-metrics');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgress();
            observer.unobserve(esgSection); // animasi sekali aja
        }
    });
}, { threshold: 0.4 });

if (esgSection) observer.observe(esgSection);

(function () {
    const burger = document.getElementById('burger');
    const body = document.body;
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();

    burger.addEventListener('click', () => {
        const expanded = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', String(!expanded));
        body.classList.toggle('menu-open');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.site-header')) {
            body.classList.remove('menu-open');
            burger.setAttribute('aria-expanded', 'false');
        }
    });

    // Parallax hero background
    const heroBg = document.querySelector('.hero-bg');
    function onScroll() {
        const scrolled = window.scrollY;
        const y = Math.max(0, scrolled * 0.2);
        heroBg.style.transform = `translateY(${y}px) scale(1.05)`;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();


(function () {
    // Year update
    document.getElementById('year').textContent = new Date().getFullYear();

    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    function revealOnScroll() {
        const trigger = window.innerHeight * 0.85;
        reveals.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < trigger) {
                el.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Parallax
    const heroBg = document.querySelector('.hero-bg');

    function onScroll() {
        const scrolled = window.scrollY;
        const y = Math.max(0, scrolled * 0.2); // cegah minus
        heroBg.style.transform = `translateY(${y}px) scale(1.05)`;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

})();