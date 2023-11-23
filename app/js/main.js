$(function () {   
     
    
    document.querySelectorAll('.news__item').forEach(function(item) {
        item.addEventListener('mouseover', function() {
          this.classList.add('rotate');
        });
      
        item.addEventListener('mouseout', function() {
          this.classList.remove('rotate');
        }); 
         
      });   
       

      // Magnific Popup
       
      $('#openPopupBtn').magnificPopup({
        items: {
            src: '#myModal',
            type: 'inline'
        },
        midClick: true,
        closeOnBgClick: true // Дозволяє закривати попап при кліку на чорний фон
    });

    // Опціонально: закрийте модальне вікно після відправки форми
    $('#myForm').submit(function(event) {
        event.preventDefault();
        $.magnificPopup.close();
        // Додайте ваш код для обробки відправки форми
    });

    // Додайте обробник подій для кнопки закриття
    $('.close-popup-btn, #myModal').on('click', function() {
        $.magnificPopup.close();
    });

    // Запобігання закриванню попапу при кліках всередині форми
    $('.mp-form-wrapper').on('click', function(event) {
        event.stopPropagation();
    });

        
});
      

  


  

   
