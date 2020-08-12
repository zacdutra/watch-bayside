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
  
