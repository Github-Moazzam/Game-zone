const swiper = new Swiper('.swiper', {
 
    autoplay: {
      delay: 3000,
      disableOnInteraction:false,
    },
  
    loop: true,
  
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  
  });


  function filterProducts(category) {
    const products = document.querySelectorAll('.cards');
   
    
    products.forEach(product => {
        if (category === 'all') {
            product.classList.add('active');
            console.log("if");
        } else {
            product.classList.toggle('active', product.getAttribute('data-category') === category);
            console.log("else");

        }
    });
}

// Initially show all products
filterProducts('all');



