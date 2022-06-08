// $(document).ready(function(){
  
// });

function toggleSidebar () {
    $('#sideMenuWrapper').toggleClass('show');
    if(!$('#sideMenuWrapper').hasClass('show')){
        $('.toggler').removeClass('show');
        $('.items').slideUp();
    }
}

function showItems(toggler, items) {
    $(toggler).toggleClass('show');
    $('#'+ items).slideToggle();
}