//Abre e fecha o menu quando clica menu ou x
const nav = document.querySelector('#header nav') //Faz o documento procurar pelo seletor #header nav
const toggle = document.querySelectorAll('nav .toggle')


for(const element of toggle) {
  element.addEventListener('click', function() { //Uma função se inicia ao clicar
    nav.classList.toggle('show')
  })
}

//Quando clica em um item, esconde o menu
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
  link.addEventListener('click', function() { //Uma função se inicia ao clicar
    nav.classList.remove('show')
  })
}

//Mudar o header a página quando der o scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll(){
  // Função para adicionar ou tirar a classe Scroll do header
  if(window.scrollY >= navHeight){ //Scroll maior que a altura do header
      header.classList.add('scroll')
  } else{ //Scroll menor que a altura do header
    header.classList.remove('scroll')
  }
}



//Testimonials swiper - Fazer a paginação

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints:{
    767:{
      slidesPerView: 2, //A partir desse tamanho mostra 2 ao mesmo tempo
      setWrapperSize: true
    }
  }
})

//Scroll Reveal - Mostrar elementos quando der scroll na página

const scrollReveal = ScrollReveal({
origin:'top',
distance: '30px',
duration: 700,
reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,{ interval: 100})

  //Botão voltar para o topo


function backToTop(){
  const backToTopButton = document.querySelector('.back-to-top')
  if(window.scrollY >= 560){
    backToTopButton.classList.add('show')
  } else{
    backToTopButton.classList.remove('show')
  }
}

//Menu ativo conforme a seção visível na página
const sections = document.querySelectorAll('main section[id]') //Seleciona todas as seções que tem um id
function activateMenuAtCurrentSection(){
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
 //Descolamento da janela no eixo y - No cálculo dividiu a janela em 8

for (const section of sections) {
  const sectionTop = section.offsetTop //Seleciona o topo da seção
  const sectionHeight = section.offsetHeight //Seleciona a altura da seção
  const sectionId = section.getAttribute('id') //Seleciona o id da seção

    const checkpointStar = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if(checkpointStar && checkpointEnd) { //Se a rolagem estiver entre o começo e o final de certo id
      document.
      querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.add('active') //Percebe qual id que é e adiciona o active
    } else {
      document.
      querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active')
    }


}


}



//When Scroll

window.addEventListener('scroll', function() {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})




