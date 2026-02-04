// Animacoes usando anime.js
// Seletores em portugues para compatibilidade com style.css

// Animacao da navegacao
anime({
  targets: '.navegacao-lista-ul .navegacao-item-li',
  translateY: [-50, 0],
  opacity: [0, 1],
  delay: anime.stagger(100),
  duration: 1000,
  easing: 'easeOutQuad',
});

// Animacao do titulo h1
anime({
  targets: '.recipiente-chamada h1',
  translateX: [-300, 0],
  opacity: [0, 1],
  duration: 1200,
  easing: 'easeOutQuad',
});

// Animacao do paragrafo
anime({
  targets: '.recipiente-chamada p',
  translateX: [300, 0],
  opacity: [0, 1],
  delay: 500,
  duration: 1200,
  easing: 'easeOutQuad',
});

// Animacao da logo
anime({
  targets: '.recipiente-logo img',
  translateY: [-100, 0],
  opacity: [0, 1],
  duration: 1500,
  easing: 'easeOutBounce',
});

// Animacao do rodape
anime({
  targets: 'footer',
  translateY: [100, 0],
  opacity: [0, 1],
  duration: 1500,
  easing: 'easeOutQuad',
});

// Hover nos itens de navegacao
document.querySelectorAll('.navegacao-item-li i').forEach((item) => {
  item.addEventListener('mouseover', () => {
    anime({
      targets: item,
      scale: 1.2,
      duration: 300,
      easing: 'easeInOutQuad',
    });
  });

  item.addEventListener('mouseout', () => {
    anime({
      targets: item,
      scale: 1.0,
      duration: 300,
      easing: 'easeInOutQuad',
    });
  });
});

// Hover na logo
const logo = document.querySelector('.recipiente-logo img');

if (logo) {
  logo.addEventListener('mouseover', () => {
    anime({
      targets: logo,
      scale: 1.1,
      duration: 300,
      easing: 'easeInOutQuad',
    });
  });

  logo.addEventListener('mouseout', () => {
    anime({
      targets: logo,
      scale: 1.0,
      duration: 300,
      easing: 'easeInOutQuad',
    });
  });
}

// Menu cortina
const menuItem = document.querySelector('.item-menu');
const menuCortina = document.querySelector('.menu-cortina');
const menuCortinaLista = document.querySelectorAll('.menu-cortina-lista li');

if (menuItem && menuCortina) {
  menuItem.addEventListener('click', () => {
    const isOpen = menuCortina.classList.contains('aberto');
    
    if (!isOpen) {
      menuCortina.classList.add('aberto');
      menuCortina.style.display = 'block';
      
      anime({
        targets: menuItem.querySelector('i'),
        rotate: '1turn',
        duration: 500,
        easing: 'easeInOutQuad',
      });

      anime({
        targets: menuCortina,
        opacity: [0, 1],
        scaleY: [0, 1],
        duration: 400,
        easing: 'easeOutQuad',
      });

      anime({
        targets: menuCortinaLista,
        opacity: [0, 1],
        translateX: [-50, 0],
        delay: anime.stagger(100),
        duration: 400,
        easing: 'easeOutQuad',
      });
    } else {
      anime({
        targets: menuItem.querySelector('i'),
        rotate: '0turn',
        duration: 500,
        easing: 'easeInOutQuad',
      });

      anime({
        targets: menuCortinaLista,
        opacity: [1, 0],
        translateX: [0, -50],
        duration: 300,
        easing: 'easeInQuad',
      });

      anime({
        targets: menuCortina,
        opacity: [1, 0],
        scaleY: [1, 0],
        duration: 400,
        easing: 'easeInQuad',
        complete: () => {
          menuCortina.style.display = 'none';
          menuCortina.classList.remove('aberto');
        },
      });
    }
  });
}

// Pre-carregador
window.addEventListener('load', () => {
  const preCarregador = document.getElementById('pre-carregador');
  if (preCarregador) {
    setTimeout(() => {
      preCarregador.classList.add('ocultar');
      setTimeout(() => {
        preCarregador.style.display = 'none';
      }, 500);
    }, 2000);
  }
});
