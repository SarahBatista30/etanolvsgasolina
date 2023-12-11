//alert('Js carregado');

//no java script não se declara o tipo de variável
/*
var nome= "maria";
var idade = "88"

console.log(nome);
console.log("ola, javascript");
console.log("nome:"+ nome);
console.log("idade:" + idade);
parsefloat= faz uma soma. 
*/

function calcular() {
    //console.log("função acionada!");//
    var etanol = document.querySelector("#etanol");
    var gasolina = document.querySelector("#gasolina");

    console.log("etanol:" + etanol.value);
    console.log("gasolina:" + gasolina.value);

    if (etanol.value != '' && gasolina.value != '') {


        var resultado = etanol.value / gasolina.value;

        console.log(resultado);
        var result = document.querySelector("#result");
        result.style.display = "block";

        if (resultado > 0.7) {
            // alert("abasteça com gasolina")//
            result.innerHTML = "abasteça com <br> Gasolina";
        }

        else {
            //alert('abasteça com etanol');//
            result.innerHTML = "abasteça com <br> Etanol";
        }
    }
    else {
        alert("preencha todos os campos!");
    }

}
