$(function(){

//CRIANDO SISTEMA DE SLIDER DA GALERIA 

var imgShow = 3; /* QUANTAS IMGS QUERO MOSTRAR */
var maxIndex = Math.ceil($(".mini-img-wraper").length / 3) - 1; //MAIOR INDEX Q POSSO MOSTRAR, O CEIL PRA TIRAR A CASA DECIMAL
var valorAtual = 0; //IMG ATUAL



function initSlider(){
    navegationSlider();
    var amt = $(".mini-img-wraper").length * 33.3; /* QUANTAS IMGS EXISTEM NO CASO 33.3% PQ NAO 3 IMGS */
    var elScroll = $(".nav-galeria-wraper"); /* DIV QUE CONTÉM AS IMGS */
    var elSingle = $(".mini-img-wraper") /* IMGS INDIVIDUAIS */
    
    elScroll.css("width", amt + "%"); /* LARGURA DA DIV QUE CONTÉM AS IMGS EM PORCENTAGEM */
    elSingle.css("width" , 33.3*(100 / amt) + "%"); /* LARGURA DAS IMGS INDIVIDUAIS EM PORCENTAGEM */
}
    
initSlider();



//FUNÇAO PARA NAVEGAR NO SLIDER
function navegationSlider(){

    // QUANDO CLICAR NA SETA DIREITA
    $(".arrow-right-nav").click(function(){
        // SE O VALOR ATUAL FOR MENOR QUE O MÁXIMO INDEX PERMITIDO
        if(valorAtual < maxIndex){
            valorAtual++; // AVANÇA PARA O PRÓXIMO CONJUNTO DE IMAGENS

            // CALCULA O DESLOCAMENTO PARA A PRÓXIMA IMAGEM BASEADO NA POSIÇÃO
            var elOffset = $(".mini-img-wraper").eq(valorAtual * 3).offset().left - $(".nav-galeria-wraper").offset().left;

            // ANIMA O SCROLL DA GALERIA PARA A PRÓXIMA IMAGEM
            $(".nav-galeria").animate({scrollLeft: elOffset + "px"});
        }else{
            //console.log("FIM"); // CASO JÁ ESTEJA NO FINAL
        }
    });

    // QUANDO CLICAR NA SETA ESQUERDA
    $(".arrow-left-nav").click(function(){
        // SE O VALOR ATUAL FOR MAIOR QUE ZERO
        if(valorAtual > 0){
            valorAtual--; // VOLTA PARA O CONJUNTO ANTERIOR DE IMAGENS

            // CALCULA O DESLOCAMENTO PARA A IMAGEM ANTERIOR BASEADO NA POSIÇÃO
            var elOffset = $(".mini-img-wraper").eq(valorAtual * 3).offset().left - $(".nav-galeria-wraper").offset().left;

            // ANIMA O SCROLL DA GALERIA PARA A IMAGEM ANTERIOR
            $(".nav-galeria").animate({scrollLeft: elOffset + "px"});
        }else{
            //console.log("FIM"); // CASO JÁ ESTEJA NO INÍCIO
        }
    });   
}







//FUNÇAO PARA A MINI-IMG APARECER NO FOTO DESTAQUE 
function selectimgDestaque(){
   $(".mini-img").click(function(){ //QUANDO CLICAR NA MINI-IMG
       var bgImg = $(this).css("background-image"); //PEGA O BACKGROUND-IMAGE DA MINI-IMG
      
       $(".foto-destaque").css("background-image", bgImg); //COLOCA O BACKGROUND-IMAGE DA MINI-IMG NO FOTO-DESTAQUE

       $(".mini-img").css('border-color','white'); //MUDA A BORDA DA MINI-IMG
       $(this).css('border-color','#ccc'); //MUDA A BORDA DA MINI-IMG
        

   }) 
}
selectimgDestaque();










})