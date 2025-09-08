$(function(){
    

//DEIXANDO A BARRA DE PESQUISA DO PREÇO USAVEL COM O MOUSE

var currentValue = 0; //VALOR INICIAL DA BARRA DE PESQUISA
var isDrag = false; //PARA VER SE ESTAMOS PRESSIONANDO O MOUSE
var precoMax = 80000;
var preco_atual = 0;

$(".pointer-barra").mousedown(function(){ //QUANDO O MOUSE FOR PRESSIONADO
    isDrag = true;
})


$(document).mouseup(function(){ //QUANDO O MOUSE FOR SOLTO
    isDrag = false;
    enableTextSelection(); //HABILITA A SELECAO DE TEXTO QUANDO O MOUSE FOR SOLTO
})

$(".barra-preco").mousemove(function(e){//QUANDO O MOUSE FOR MOVIDO
    if (isDrag == true) {
      disableTextSelection(); //DESABILITA A SELECAO DE TEXTO QUANDO O MOUSE ESTIVER 
      var elBase = $(this); //PEGA O .BARRA-PREÇO
      var mouseX = e.pageX - elBase.offset().left; //PEGA A POSIÇÃO DO MOUSE NO EIXO X
      if (mouseX < 0) { //SE A POSIÇÃO FOR MENOR QUE 0
        mouseX = 0; //A POSIÇÃO SERÁ 0
      }
      if (mouseX > elBase.width()) { //SE A POSIÇÃO FOR MAIOR QUE A LARGURA DO .BARRA-PREÇO
        mouseX = elBase.width(); //O MOUSEX SERÁ A LARGURA DO .BARRA-PREÇO
      }

      $(".pointer-barra").css("left", (mouseX - 13) + "px"); //MUDA A POSIÇÃO DO .POINTER-BARRA // O 13 EH A METADE DO VALOR TOTAL 
      currentValue = (mouseX / elBase.width()) * 100; //CONVERTE A POSIÇÃO DO MOUSE EM PORCENTAGEM
      $(".barra-preco-fill").css("width", currentValue + "%"); //MUDA A LARGURA DO .BARRA-PREÇO-FILL

      
      preco_atual = (currentValue / 100) * precoMax; //CONVERTE A PORCENTAGEM EM PREÇO

      preco_atual = formatarPreco(preco_atual) //FORMATA O PREÇO

      $(".preco_pesquisa").html("R$ " + preco_atual); //MUDA O TEXTO DO .PRECO-PESQUISA
    }

})


function formatarPreco(preco_atual){
  preco_atual = preco_atual.toFixed(2); // O MAXIMO DE NUMEROS DECIMAIS Q EU QUERO APOS A VIRGULA E 2
  preco_array = preco_atual.split("."); //DIVIDE O PREÇO EM DUAS PARTE ANTES DO PONTO E DEPOIS DO PONTO
  
  var novo_preco = formatarTotal(preco_array) //CHAMA A FUNÇAO QUE FORMATA O PREÇO
  return novo_preco //RETORNA O PREÇO FORMATADO
}


function formatarTotal(preco_array){ //FUNÇAO QUE FORMATA O PREÇO
  
    if(preco_array[0] < 1000){ //SE O PRIMEIRO VALOR D INDICE 0 FOR MENOR QUE 1000
     return preco_array[0] + ',' + preco_array[1] //RETORNA O PREÇO COM O SEGUNDO VALOR
    }else if(preco_array[0] < 10000){ //SE O PRIMEIRO VALOR FOR MENOR QUE 10000
      return preco_array[0][0] + "." + preco_array[0].substr(1, preco_array[0].length) + "," + preco_array[1] 
    }else{
      return preco_array[0][0] + preco_array[0][1] + "." + preco_array[0].substr(2, preco_array[0].length) + "," + preco_array[1]
    }

  }  








//FUNÇAO PARA DESABILITAR A SELECAO DE TEXTO
function disableTextSelection(){
    $("body").css("-webkit-user-select", "none");
    $("body").css("-moz-user-select", "none");
    $("body").css("-ms-user-select", "none");
    $("body").css("user-select", "none");
    $("body").css("-o-user-select", "none");
}

//FUNÇAO PARA HABILITAR A SELECAO DE TEXTO
function enableTextSelection(){
    $("body").css("-webkit-user-select", "auto");
    $("body").css("-moz-user-select", "auto");
    $("body").css("-ms-user-select", "auto");
    $("body").css("user-select", "auto");
    $("body").css("-o-user-select", "auto");
}










//VALIDANDO FORMULARIO

var nome = $("#contact #formulario input[type='text']");
var email = $("#contact #formulario input[type='email']");
var telefone = $("#contact #formulario input[type='tel']");
var mensagem = $("#contact #formulario textarea[name='mensagem']");
var submit = $("#contact #formulario input[type=submit]");

$(".contact #formulario input[type='text'], .contact #formulario input[type='email'], .contact #formulario input[type='tel']").focus(function(){
    resetarEstilos($(this));
})


$("#contact #formulario").ajaxForm({
    dataType:'json',
    beforeSubmit: function(){

        var inputNome = $(".contact #formulario input[name='nome']").val();
        var inputEmail = $(".contact #formulario input[name='email']").val();
        var inputTelefone = $(".contact #formulario input[name='telefone']").val();
        var inputMensagem = $(".contact #formulario textarea[name='mensagem']").val();



        if(!validarNome(inputNome,nome)){
            campoInvalido(nome);
            return false
        }else if(!validarEmail(inputEmail,email)){
            campoInvalido(email);
            return false
        }else if(!validarTelefone(inputTelefone,telefone)){
            campoInvalido(telefone);
            return false
        }else if(!validarTextArea(inputMensagem,mensagem)){
            campoInvalido(mensagem);
            return false
        }

        submit.prop("disabled",true).animate({
            opacity: 0.4
        });
        submit.attr("value","Enviando...")
        return true

            }, 
            success: function(){
                limpandoCampos(nome,email,telefone,mensagem);
                alert('Formulario enviado com sucesso!');
                submit.prop("disabled",false).animate({
                    opacity: 1
                });
                submit.attr("value","Enviar")
            },error : function(){
                alert("Erro ao enviar o formulario");
            }
})



//FUNÇAO PARA VALIDAR O NOME
function validarNome(inputNome,nome){

    var splitStr = inputNome.trim().split(' ');
    var amt = splitStr.length;


    if(inputNome == ""){
        campoInvalido(nome);
        return false;
    }

    if(amt < 2){
        campoInvalido(nome);
        return false;
    }

    for(var i =0; i < amt; i++){

        var palavra = splitStr[i];
        var palavraMinuscula = palavra.toLowerCase();

        if(palavraMinuscula == "de" || palavraMinuscula == "da" || palavraMinuscula == "do" || palavraMinuscula == "das" || palavraMinuscula == "dos"){
            continue;
        }

        if(!palavra.match(/^[A-ZÀ-Ú][a-zà-ú]+([ '-][A-Za-zÀ-ú]+)*$/)){
            campoInvalido(nome);
            return false
        }

    }

    return true
}






//FUNÇA PARA VALIDAR EMAIL
function validarEmail(inputEmail,email){
    if(inputEmail == ""){
    campoInvalido(email);
    return false;
}

if(!inputEmail.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i)){
    campoInvalido(email);
    return false;
}
return true


}



//FUNÇAO PARA VALIDAR TELEFONE
function validarTelefone(inputTelefone,telefone){
var alerta = $(".alerta");

if(inputTelefone == ""){
    campoInvalido(telefone);
    return false;
}

if(!inputTelefone.match(/^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/)){
    campoInvalido(telefone);
    alerta.html("Digite no formato (99) 99999-9999");
    return false;
}else{
    alerta.html("");
}
return true

    
}


function validarTextArea(inputMensagem,mensagem){
    
    if(inputMensagem == ""){
        campoInvalido(mensagem);
        return false;
    }

    return true
}







//FUNÇOES DA VALIDACAO
function campoInvalido(el){
    el.css("border", "2px solid red");
    el.css("color", "red");
}

function resetarEstilos(el){
    el.css("border-color", "");
    el.css("color", "black");
}

function limpandoCampos(el1,el2,el3,el4){
    el1.val("");
    el2.val("");
    el3.val("");
    el4.val("");
}




})



/* 

 CODIGO COMPLETO COMENTADO 
  $(function(){

    // VARIÁVEL QUE ARMAZENA A PORCENTAGEM ATUAL DA BARRA (INICIALMENTE 0)
    var currentValue = 0;

    // VARIÁVEL PARA VERIFICAR SE O USUÁRIO ESTÁ ARRASTANDO O PONTEIRO
    var isDrag = false;

    // PREÇO MÁXIMO CONFIGURADO NA BARRA
    var precoMax = 80000;

    // VARIÁVEL PARA GUARDAR O VALOR DO PREÇO ATUAL BASEADO NA PORCENTAGEM
    var preco_atual = 0;

    // EVENTO AO PRESSIONAR O BOTÃO DO MOUSE SOBRE O PONTEIRO
    $(".pointer-barra").mousedown(function(){
        isDrag = true; // ATIVA O ARRASTO
    });

    // EVENTO AO SOLTAR O BOTÃO DO MOUSE (EM QUALQUER LUGAR DA TELA)
    $(document).mouseup(function(){
        isDrag = false; // DESATIVA O ARRASTO
        enableTextSelection(); // HABILITA A SELEÇÃO DE TEXTO NOVAMENTE
    });

    // EVENTO PARA DETECTAR O MOVIMENTO DO MOUSE SOBRE A BARRA
    $(".barra-preco").mousemove(function(e){
        if (isDrag == true) {
            disableTextSelection(); // DESABILITA A SELEÇÃO DE TEXTO DURANTE O ARRASTO

            var elBase = $(this); // REFERÊNCIA AO ELEMENTO .BARRA-PRECO
            var mouseX = e.pageX - elBase.offset().left; // CALCULA A POSIÇÃO DO MOUSE RELATIVA À BARRA

            if (mouseX < 0) {
                mouseX = 0; // LIMITA À ESQUERDA
            }
            if (mouseX > elBase.width()) {
                mouseX = elBase.width(); // LIMITA À DIREITA
            }

            // POSICIONA O PONTEIRO NA POSIÇÃO CALCULADA, AJUSTANDO PARA O CENTRO
            $(".pointer-barra").css("left", (mouseX - 13) + "px");

            // CONVERTE A POSIÇÃO DO MOUSE EM PORCENTAGEM
            currentValue = (mouseX / elBase.width()) * 100;

            // AJUSTA A LARGURA DO PREENCHIMENTO DA BARRA COM BASE NA PORCENTAGEM
            $(".barra-preco-fill").css("width", currentValue + "%");

            // CALCULA O VALOR EM REAIS BASEADO NA PORCENTAGEM ATUAL
            preco_atual = (currentValue / 100) * precoMax;

            // FORMATA O PREÇO PARA EXIBIÇÃO
            preco_atual = formatarPreco(preco_atual);

            // EXIBE O PREÇO ATUAL NA INTERFACE
            $(".preco_pesquisa").html("R$ " + preco_atual);
        }
    });

    // FUNÇÃO QUE RECEBE O VALOR E CHAMA A FORMATADOR FINAL
    function formatarPreco(preco_atual){
        preco_atual = preco_atual.toFixed(2); // MANTÉM DUAS CASAS DECIMAIS
        preco_array = preco_atual.split("."); // DIVIDE EM INTEIRO E DECIMAL
        var novo_preco = formatarTotal(preco_array); // CHAMA A FORMATAÇÃO FINAL
        return novo_preco; // RETORNA O PREÇO FORMATADO
    }

    // FUNÇÃO QUE ADICIONA PONTO E VÍRGULA NO PREÇO CONFORME O TAMANHO
    function formatarTotal(preco_array){
        if(preco_array[0] < 1000){
            return preco_array[0] + ',' + preco_array[1]; // EX: 999,00
        } else if(preco_array[0] < 10000){
            return preco_array[0][0] + "." + preco_array[0].substr(1) + "," + preco_array[1]; // EX: 8.000,00
        } else {
            return preco_array[0][0] + preco_array[0][1] + "." + preco_array[0].substr(2) + "," + preco_array[1]; // EX: 80.000,00
        }
    }

    // FUNÇÃO PARA DESABILITAR A SELEÇÃO DE TEXTO DURANTE O ARRASTO
    function disableTextSelection(){
        $("body").css("-webkit-user-select", "none");
        $("body").css("-moz-user-select", "none");
        $("body").css("-ms-user-select", "none");
        $("body").css("user-select", "none");
        $("body").css("-o-user-select", "none");
    }

    // FUNÇÃO PARA HABILITAR A SELEÇÃO DE TEXTO APÓS ARRASTO
    function enableTextSelection(){
        $("body").css("-webkit-user-select", "auto");
        $("body").css("-moz-user-select", "auto");
        $("body").css("-ms-user-select", "auto");
        $("body").css("user-select", "auto");
        $("body").css("-o-user-select", "auto");
    }

});
  
*/