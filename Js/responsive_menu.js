$(function () {
  
  //FUNÇAO PARA ABRIR E FECHAR O MENU MOBILE
  function startMobileMenu() {
    $("nav.mobile ").click(function () {
      $(this).find("ul").slideToggle();
    });
  }

  startMobileMenu();
});