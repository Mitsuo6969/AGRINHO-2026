document.addEventListener('DOMContentLoaded', () => {

    // 1. Menu Responsivo (Hambúrguer)
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fecha o menu ao clicar em qualquer link (útil para mobile)
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 2. Validação e Feedback do Formulário de Contato
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('formSuccess');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        // Captura de dados (Pode ser integrado com API de e-mail no futuro)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if(name && email && message) {
            // Exibe mensagem de sucesso visualmente bonita
            successMessage.style.display = 'block';
            contactForm.reset(); // Limpa os campos

            // Esconde a mensagem após 5 segundos
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }
    });
});
