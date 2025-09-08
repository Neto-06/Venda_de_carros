$(function () {
  //SISTEMA DE SCROLL PARA A PÁGINA DE CONTATO
  function scroollToContact() {
    $("header nav a[href='#contact']").click(function (e) {
      e.preventDefault();

      var href = $(this).attr("href"); //PEGANDO O HREF
      var offSetTop = $(href).offset().top; //PEGANDO O HREF E PEGANDO A POSIÇÃO
      $("html, body").animate({ scrollTop: offSetTop }, 1000); //ANIMANDO O SCROLL

      //RESETANDO AS CORES DO MENU
      $("header nav a").css("color", "black");
      $("footer nav a").css("color", "#fff");

      //APLICANDO A COR APENAS NO LINK QUE ESTÁ NA PÁGINA DE CONTATO, QUANDO CLICADO
      $(this).css("color", "#eb2d2d");
      $("footer nav a[href='#contact']").css("color", "#eb2d2d");
    });
  }

  scroollToContact();

  function scroollToContactFooter() {
    $("footer nav a[href='#contact'] ").click(function (e) {
      e.preventDefault();

      var href = $(this).attr("href"); //PEGANDO O HREF
      var offSetTop = $(href).offset().top; //PEGANDO O HREF
      $("html, body").animate({ scrollTop: offSetTop }, 1000); //ANIMANDO O SCROLL

      //RESETANDO AS CORES DO MENU
      $("header nav a").css("color", "black");
      $("footer nav a").css("color", "#fff");

      //APLICANDO A COR APENAS NO LINK QUE ESTÁ NA PÁGINA DE CONTATO, QUANDO CLICADO
      $(this).css("color", "#eb2d2d");
      $("header nav a[href='#contact']").css("color", "#eb2d2d");
    });
  }

  scroollToContactFooter();

  //SE EU ESTIVER NUMA PAGINA Q N TEM O #CONTACT ELE VAI REDIRECIONAR PARA A HOME E DESCER ATE CONTATO
  $(document).on("click", "a[href*='#contact']", function (e) {
    e.preventDefault();

    if ($("#contact").length) {
      /* $("#contact").length retorna quantos elementos com id="contact" existem na página atual.

       Se for 1 (ou mais) → significa que a seção existe → ele faz o scroll até a seção.

       Se for 0 → significa que a seção não está na página → ele redireciona para home#contact, ou seja, abre a home e vai direto para a seção de contato. */
      $("html, body").animate({ scrollTop: $("#contact").offset().top }, 1000); 
    } else {
      location.href = "home#contact";
    }
  });

  //SISTEMA DE COR NO MENU DE ACORDO COM A PÁGINA
  function menuColor() {
    var url = location.href.split("/");
    var page = url[url.length - 1] || "home"; //PEGA O ULTIMO ITEM DA URL COM BASE NO / E O HOME CASO NAO TENHA /

    $("header nav a").css("color", "black");
    $("footer nav a").css("color", "#fff");

    // Se tiver hash #contact, prioriza ele
    if (location.hash === "#contact") {
      $("header nav a[href='#contact']").css("color", "#eb2d2d");
      $("footer nav a[href='#contact']").css("color", "#eb2d2d");
      return; // não processa outros links
    }

    if (page === "home") {
      //CASO SEJA SO  DOMINIO
      $("header nav a[href='home']").css("color", "#eb2d2d");
      $("footer nav a[href='home']").css("color", "#eb2d2d");
    }

    if (page === "vendas") {
      $("header nav a[href='vendas']").css("color", "#eb2d2d");
      $("footer nav a[href='vendas']").css("color", "#eb2d2d");
    }

    if (page === "sobre") {
      $("header nav a[href='sobre']").css("color", "#eb2d2d");
      $("footer nav a[href='sobre']").css("color", "#eb2d2d");
    }
  }

  menuColor();
});
