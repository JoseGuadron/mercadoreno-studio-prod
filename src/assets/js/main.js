/**
*
*/
window.onscroll = function() {
  let header = document.getElementById('header');
  var y = window.scrollY;
  if(y>300){
    header.classList.add('header-scrolled');
  }else{
    header.classList.remove('header-scrolled');
  }
};