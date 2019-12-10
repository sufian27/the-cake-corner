function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



(function($) {

  // Menu filer
  $("#menu-flters li a").click(function() {
    $("#menu-flters li a").removeClass('active');
    $(this).addClass('active');

    var selectedFilter = $(this).data("filter");
    //  $("#menu-wrapper").fadeTo(100, 0);

    $(".menu-restaurant").fadeOut();

    setTimeout(function() {
      $(selectedFilter).slideDown();
      //$("#menu-wrapper").fadeTo(300, 1);
    }, 300);
  });

  // Add smooth scrolling to all links in navbar + footer link
  $(".sidenav a").on('click', function(event) {
    var hash = this.hash;
    if (hash) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {
        window.location.hash = hash;
      });
    }

  });

  $(".sidenav a").on('click', function() {
		closeNav();
	});

})(jQuery);

// var slideIndex = 0;
// carousel(); 

// function carousel() {
//   var x = document.getElementById("banner");
//   var[3] img;
//   switch(slideIndex) {
//     case 0:
//       //$('#banner').css('background', 'url(../img/home-bg.jpg)');
//       //x.style.background = "url(../img/home-bg.jpg) no-repeat center top";
//       break;
//     case 1: 
//       //x.style.background = "url(../img/event-bg.jpg) no-repeat center top";
//       break;
//     case 2: 
//       //x.style.background = "url(../img/journey-bg.jpg) no-repeat center top";
//       break;
//   }
//   //slideIndex = (slideIndex+1)%3;
//   console.log(x.style.background);
//   setTimeout(carousel, 3000); // Change image every 2 seconds
// }
