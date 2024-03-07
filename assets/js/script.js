// mb-menu show hide
$("#mb-menu-show").click(function(){
  $(".wrapper").addClass("mb-menu-show")
})
$("#mb-menu-show1").click(function(){
  $(".wrapper").addClass("mb-menu-show")
})
$("#close-mb-menu").click(function(){
  $(".wrapper").removeClass("mb-menu-show")
})
$(".profile-info-div .profile-info-show").click(function(){
  $(".profile-info-div").addClass("profile-info-show")
})
$(".profile-info-div .profile-vector-box .vector-cross img").click(function(){
  $(".profile-info-div").removeClass("profile-info-show")
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


       
function openTab(thisData, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = $($(thisData).parent().parent()).find(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].className = tabcontent[i].className.replace(" show", "")
  }
  tablinks = $($(thisData).parent().parent()).find(".tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).className += " show";
  $(thisData).addClass("active");
}