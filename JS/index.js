var swiper = new Swiper('.mySwiper', {
    loop: true, 
    slidesPerView: 1, 
    spaceBetween: 10,  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 3, 
        spaceBetween: 30,  
      },
      480: {
        slidesPerView: 2, 
        spaceBetween: 20,  
      }
    }
  });
  

function showMenu() {
    const menuList = document.querySelector('.menu-list');
    const closeBtn = document.querySelector('.close-btn');
    menuList.classList.add('active');
    closeBtn.classList.add('active');
}
function hideMenu() {
    const menuList = document.querySelector('.menu-list');
    const closeBtn = document.querySelector('.close-btn');
    menuList.classList.remove('active');
    closeBtn.classList.remove('active');
}

let menuItems = document.querySelectorAll('.menu-list a');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const menuList = document.querySelector('.menu-list');
        menuList.classList.remove('active'); 
    });
});