const menuBtn = document.querySelector('.menu__btn');

let menuOpen = false ;

menuBtn.addEventListener('click', () => {
 if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
 } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
 }


});

let counter = 1;
setInterval(function(){
   document.getElementById('radio' + counter).checked = true;
   counter++;
   if(counter > 4){
      counter = 1;
   }

}, 5000);
