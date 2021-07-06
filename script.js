$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(".nav-menu").slideToggle();
  });

  $(".lissandra-button").click(function () {
    $(".dr-lissandra-info").slideToggle();
  });

  $(".alex-button").click(function () {
    $(".dr-alex-info").slideToggle();
  });

  $(".trump-button").click(function () {
    $(".dr-trump-info").slideToggle();
  });

  $("button").click(function () {
    $(this).toggleClass("buttonCss");
  });
});
