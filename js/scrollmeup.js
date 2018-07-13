
dyscrollup.init({
    showafter: 0, // displays after scrolling 600 pixels
    scrolldelay: 400,  //in milliseconds
    position: 'right', // position right
    image: 'img/transparent.png', // image applied
    shape: 'circle',
    width:50,
    height: 50
});



$('.dropdown').hover(function(){
  $('.dropdown-toggle', this).trigger('click');
});
