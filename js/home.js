$(document).ready(function () {
  $(".animate-this").css({
    "cursor": "pointer",
  });
  $(".animate-this +").slideUp();
  $(".animate-this").on("click", function (e) {
    $(".animate-this +")
      .not($(e.target).next())
      .each(function (x) {
        if ($(this).css("display") == "block") {
          $(this).slideUp("slow");
        }
        if ($(".animate-this +").not($(e.target).next()).length - 1 == x) {
          $(e.target).next().slideToggle("slow");
        }
      });
  });
  $(function () {
    // Set the date we're counting down to
    var countDownDate = new Date("Jul 19, 2025 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      $(".days").html(days);
      $(".hours").html(hours);
      $(".minutes").html(minutes);
      $(".seconds").html(seconds);

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        $("#duration > div").append(`<div class="text-center mt-2 text-danger bg-color1 rounded-2 opacity-50">EXPIRED</div>`);
      }
    }, 1000);
  });
  $("#message").on("keyup", function () {
    let x = 0;
    $(this)
      .val()
      .split("")
      .map(() => x++);
    let count = 100 - x;
    if (x > 100) $("#charset-count").html("your available character finished");
    else $("#charset-count").html(count);
  });
  $("#side-nav").css({
    "left": `-${$("#side-nav").css("width")}`,
  });
  $("#side-nav-open").on("click", function () {
    $("#side-nav").animate({
      left: `0`,
    });
    $(".sidenav-btn").animate({
      left: `${$("#side-nav").css("width")}`,
    });
  });
  $("#close-btn").on("click", function () {
    $("#side-nav").animate({
      "left": `-${$("#side-nav").css("width")}`,
    });
    $(".sidenav-btn").animate({
      left: `0`,
    });
  });
});
