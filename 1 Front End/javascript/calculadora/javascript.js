var num1;
var num2;
var total;

function converterParaNumero(){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
}


function entrada(){
    //pega os campos de input da tela
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;

     //converte de texto para números
    converterParaNumero();
    total = document.getElementById("resultado");
}

function somar() {
    entrada();
    total.innerHTML = num1 + num2;
}

function subtrair(){
    entrada();
    total.innerHTML = num1 - num2;
}

function multiplicar(){
    entrada();
    total.innerHTML = num1 * num2;
}

function dividir(){
    entrada();
    total.innerHTML = num1 / num2;
}

function limpar(){

    var total = document.getElementById("resultado");
    total.innerHTML = " ";
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";

}
