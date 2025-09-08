$(function(){

//SLIDER PARA PARTE DE DEPOIMENTOS 
var amt = $(".depoimento-single").length
var indiceAtual = 0;
var delay = 3000;
var zerarTimer; //PARA PARAR O TIMER QUANDO CLICAR NAS SETAS ESQUERDA E DIREITA

 //FUNÇAO PARA DEFINIR O TAMANHO DO SLIDER EM PORCENTAGEM
function sliderDepoimentos(){

    
    var containerWidth = 100 * amt;
    var containerWidthSingle = 100 / amt


    $(".equip-depoimento-wraper").css("width", containerWidth + "%");
    $(".depoimento-single").css("width", containerWidthSingle + "%");
    
}
sliderDepoimentos();







 //FUNÇAO PARA FAZER A ROLAGEM DE DEPOIMENTOS
function goToSliderDepoimentos(){

    var offSetX = $(".depoimento-single").eq(indiceAtual).offset().left - $(".equip-depoimento-wraper").offset().left;

    $(".equip-depoimento").animate({scrollLeft: offSetX + "px"});

}
goToSliderDepoimentos();






//FUNÇAO PARA TROCAR DE IMGS NO SLIDER DE DEPOIMENTOS AUTOMATICAMENTE
function autoSliderDepoimento(){

  zerarTimer =  setInterval(function(){

        indiceAtual++;

        if(indiceAtual == amt){
            indiceAtual = 0;
        }
        goToSliderDepoimentos(indiceAtual);
    }, delay);
}
autoSliderDepoimento();
        

   



//FUNÇAO PARA CLICAR NO ARROW IMG E O SLIDER TROCAR 
function trocarSliderClick(){

    $(".arrow img").eq(0).click(function(){
      //QUANDO CLICAR NA SETA ESQUERDA

      if (indiceAtual == 0) { //SE O INDICE ATUAL FOR IGUAL A 0 
        indiceAtual = amt - 1; //VOLTE PARA O ULTIMO INDICE
      } else {
        indiceAtual--;
      }
      goToSliderDepoimentos(indiceAtual);

      clearInterval(zerarTimer); //ZERAR O TIMER QUANDO CLICAR NA SETA ESQUERDA
      autoSliderDepoimento();
    })  




    $(".arrow img").eq(1).click(function(){ //QUANDO CLICAR NA SETA DIREITA
        

        if(indiceAtual == amt - 1){ //SE O INDICE ATUAL FOR IGUAL AO ÚLTIMO INDICE
            indiceAtual = 0; //VOLTE PARA O PRIMEIRO INDICE
          } else {
            indiceAtual++;
          }
        goToSliderDepoimentos(indiceAtual);

        clearInterval(zerarTimer); //ZERAR O TIMER QUANDO CLICAR NA SETA DIREITA
        autoSliderDepoimento();
    })  
    


}
trocarSliderClick();








//FUNÇAO PARA NAO CORTAR SLIDE DE DEPOIMENTOS QUANDO REDIMENCIONO 
function resizeDepoimentos(){

$(window).resize(function(){

    $(".equip-depoimento").stop().animate({ //PARA N FICAR PARADO QUANDO REDIMENCIONAR A TELA
        "scrollLeft": 0
    })

})

}
resizeDepoimentos();




})