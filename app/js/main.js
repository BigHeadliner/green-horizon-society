$(function () {   
     
    
    document.querySelectorAll('.news__item').forEach(function(item) {
        item.addEventListener('mouseover', function() {
          this.classList.add('rotate');
        });
      
        item.addEventListener('mouseout', function() {
          this.classList.remove('rotate');
        }); 
         
      });   
       
                //MAGNIFIC POPUP     
      // Magnific Popup
       
      function initMagnificPopup(popupId) {
        $('#openPopupBtn' + popupId).magnificPopup({
            items: {
                src: '#myModal' + popupId,
                type: 'inline'
            },
            midClick: true,
            closeOnBgClick: true
        });
    
        $('#myForm' + popupId).submit(function(event) {
            event.preventDefault();
            $.magnificPopup.close();
            // Додайте ваш код для обробки відправки форми
        });
    
        $('.close-popup-btn, #myModal' + popupId).on('click', function() {
            $.magnificPopup.close();
        });
    
        $('.mp-form-wrapper').on('click', function(event) {
            event.stopPropagation();
        });
    }
    
    // Викликати функцію для ініціалізації Magnific Popup для першого попапу
    initMagnificPopup(''); 
    initMagnificPopup('1');
    
    // Викликати функцію для ініціалізації Magnific Popup для другого попапу
    // initMagnificPopup('1'); 
     
    const counterUp = window.counterUp.default

    const callback = entries => {
        entries.forEach(entry => {
            const el = entry.target
            if (entry.isIntersecting && !el.classList.contains('is-visible')) {
                counterUp(el, {
                    duration: 2000,
                    delay: 16,
                })
                el.classList.add('is-visible')
            }
        })
    }
   
    const IO1 = new IntersectionObserver(callback, { threshold: 1 })
    const IO2 = new IntersectionObserver(callback, { threshold: 1 })
    const IO3 = new IntersectionObserver(callback, { threshold: 1 })
    
   
    const el1 = document.querySelector('.journey__number-title1')
    const el2 = document.querySelector('.journey__number-title2')
    const el3 = document.querySelector('.journey__number-title3')

    IO1.observe(el1)
    IO2.observe(el2)
    IO3.observe(el3)
    

    
});
      

  


  

   
