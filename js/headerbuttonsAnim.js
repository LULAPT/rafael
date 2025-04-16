// Função para navegação suave com ajuste específico para a seção de features
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links de navegação
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Adiciona um evento de clique para cada link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link
            
            const targetId = this.textContent.toLowerCase(); // Obtém o texto do link em lowercase
            let targetSection;
            let additionalOffset = 0; // Offset adicional para ajustes específicos
            
            // Mapeia cada texto do link para a seção correspondente
            switch(targetId) {
                case 'home':
                    // Rola para o topo da página
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                    return;
                case 'features':
                    targetSection = document.querySelector('.features-section');
                    additionalOffset = 100; // Adiciona 100px a mais para a seção de features
                    break;
                case 'preços':
                    targetSection = document.querySelector('.prices');
                    additionalOffset = -30; // Adiciona 100px a mais para a seção de features
                    break;
                case 'faq':
                    targetSection = document.querySelector('.faq-container');
                    break;
                default:
                    return; // Se não encontrar nenhuma correspondência, não faz nada
            }
            
            // Se a seção alvo foi encontrada, rola até ela
            if (targetSection) {
                // Calcula a posição Y da seção com os ajustes
                const yOffset = -80 + additionalOffset; // Ajuste base + ajuste específico
                const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                
                // Faz a rolagem suave
                window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Adiciona funcionalidade para destacar o link ativo durante a rolagem
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Define as posições das seções
        const homeSection = 0;
        const featuresSection = document.querySelector('.features-section')?.offsetTop - 200 || 0;
        const pricesSection = document.querySelector('.prices')?.offsetTop - 200 || 0;
        const faqSection = document.querySelector('.faq-container')?.offsetTop - 200 || 0;
        
        // Remove a classe ativa de todos os links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Adiciona a classe ativa ao link correspondente à seção atual
        if (scrollPosition >= faqSection) {
            navLinks[3].classList.add('active'); // FAQ
        } else if (scrollPosition >= pricesSection) {
            navLinks[2].classList.add('active'); // Preços
        } else if (scrollPosition >= featuresSection) {
            navLinks[1].classList.add('active'); // Features
        } else {
            navLinks[0].classList.add('active'); // Home
        }
    });
});