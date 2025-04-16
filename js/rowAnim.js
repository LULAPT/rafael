document.addEventListener('DOMContentLoaded', function() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          // Opcional: parar de observar o elemento após a animação
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(handleIntersect, options);
  
    // Selecionando todos os elementos que queremos animar (incluindo os novos)
    const animatedElements = document.querySelectorAll(
      '.hero, .hero h1, .hero p, .input-container, .showcase, .showcase img, ' +
      '.features-section, .features-column, .feature-card, ' +
      '.small-feature, .stats .stat-item, ' +
      '.prices, .prices h1, .prices .basic, .prices .VIP, ' +
      '.user-carousel, .user-carousel-item'
    );
  
    // Adicionar cada elemento ao observer
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  });
  