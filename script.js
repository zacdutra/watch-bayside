//Left & Right buttons
$('.controlR').click(function() {
    event.preventDefault();
    $(this).animate({
      marginLeft: "+=400px"
    }, "fast");
 });

 $('.controlL').click(function() {
    event.preventDefault();
    $(this).animate({
      marginRight: "+=400px"
    }, "fast");
 });

//Header change color on scroll

 $(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".page-top").addClass("active");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $(".page-top").removeClass("active");
      }
  });
});
