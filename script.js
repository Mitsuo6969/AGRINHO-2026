// =============================================
// script.js - Tema AGRINHO 2026
// Responsável pela interatividade e comportamento dinâmico
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Script AGRINHO 2026 carregado com sucesso!');

    // ======================
    // 1. Menu Mobile
    // ======================
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Fecha o menu ao clicar em um link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // ======================
    // 2. Smooth Scroll
    // ======================
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ======================
    // 3. Animações ao Scroll (Intersection Observer)
    // ======================
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(el => {
        observer.observe(el);
    });

    // ======================
    // 4. Contador Regressivo (para o evento 2026)
    // ======================
    function startCountdown() {
        const countdownElement = document.getElementById('countdown');
        if (!countdownElement) return;

        // Defina a data do evento AGRINHO 2026 aqui
        const eventDate = new Date('2026-05-20T09:00:00').getTime();

        const countdownInterval = setInterval(() => {
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance < 0) {
                clearInterval(countdownInterval);
                countdownElement.innerHTML = '<span class="text-green-600 font-bold">O evento já começou!</span>';
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `
                <div class="flex justify-center gap-4 text-center">
                    <div><span class="block text-3xl font-bold">${days}</span><span class="text-sm">Dias</span></div>
                    <div><span class="block text-3xl font-bold">${hours}</span><span class="text-sm">Horas</span></div>
                    <div><span class="block text-3xl font-bold">${minutes}</span><span class="text-sm">Min</span></div>
                    <div><span class="block text-3xl font-bold">${seconds}</span><span class="text-sm">Seg</span></div>
                </div>
            `;
        }, 1000);
    }

    startCountdown();

    // ======================
    // 5. Validação simples de formulário
    // ======================
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            const email = form.querySelector('input[type="email"]');
            const nome = form.querySelector('input[type="text"]');

            let isValid = true;

            if (nome && nome.value.trim() === '') {
                nome.classList.add('border-red-500');
                isValid = false;
            } else if (nome) {
                nome.classList.remove('border-red-500');
            }

            if (email && !email.value.includes('@')) {
                email.classList.add('border-red-500');
                isValid = false;
            } else if (email) {
                email.classList.remove('border-red-500');
            }

            if (!isValid) {
                e.preventDefault();
                alert('Por favor, preencha todos os campos corretamente.');
            }
        });
    }

    // ======================
    // 6. Botão "Voltar ao topo"
    // ======================
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ======================
    // 7. Efeito de hover em cards (opcional)
    // ======================
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});
