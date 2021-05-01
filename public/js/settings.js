(function($) {
  'use strict';
  $(function() {
    $(".nav-settings").on("click", function() {
      $("#right-sidebar").toggleClass("open");
    });
    $(".settings-close").on("click", function() {
      $("#right-sidebar,#theme-settings").removeClass("open");
    });

    $("#settings-trigger").on("click" , function(){
      $("#theme-settings").toggleClass("open");
    });


    //background constants
    var navbar_classes = "navbar-danger navbar-success navbar-warning navbar-dark navbar-light navbar-primary navbar-info navbar-pink";
    var sidebar_classes = "sidebar-light sidebar-dark";
    var $body = $("body");

    //sidebar backgrounds
    $("#sidebar-light-theme").on("click" , function(){
      $body.removeClass(sidebar_classes);
      $(".navbar").removeClass(navbar_classes);
      $body.addClass("sidebar-light");
      $(".navbar").addClass("navbar-light");
      $(".tiles").removeClass("selected");
      $(".sidebar-bg-options").removeClass("selected");
      $(this).addClass("selected");
    });
    $("#sidebar-dark-theme").on("click" , function(){
      $(".navbar").removeClass(navbar_classes);
      $body.removeClass(sidebar_classes);
      $body.addClass("sidebar-dark");
      $(".navbar").addClass("navbar-dark");
      $(".tiles").removeClass("selected");
      $(".sidebar-bg-options").removeClass("selected");
      $(this).addClass("selected");
    });
  });
})(jQuery);
