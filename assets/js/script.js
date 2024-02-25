// mb-menu show hide
$("#mb-menu-show").click(function(){
  $(".wrapper").addClass("mb-menu-show")
})
$("#close-mb-menu").click(function(){
  $(".wrapper").removeClass("mb-menu-show")
})



// promotion page carousels
jQuery(".promotion-carousel").owlCarousel({
  autoplay: false,
  rewind: false,
  loop: false,
  margin: 20, 
  responsiveClass: true,
  autoHeight: true,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 2
    },

    1024: {
      items: 4
    },

    1366: {
      items: 4
    }
  }
});
// index page carousels
jQuery(".hero-carousel").owlCarousel({
    autoplay: false,
    rewind: false,
    loop: false,
    margin: 20, 
    responsiveClass: true,
    autoHeight: true,
    nav: true,
    dots: true,
    items: 1
});
$( ".owl-prev").html('<i class="fa fa-chevron-circle-left"></i>');
$( ".owl-next").html('<i class="fa fa-chevron-circle-right"></i>');


       
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].className = tabcontent[i].className.replace(" show", "")
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).className += " show";
  evt.currentTarget.className += " active";
}