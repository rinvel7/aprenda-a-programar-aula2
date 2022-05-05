/* const calculoIMC = (peso, altura) => {
    //insira sua lógica aqui do ex. 1 aqui.
    

}

const resultadoIMC = (indiceIMC) => {
    // insira sua lógica do ex.2 aqui.
    // dica, lembre-se que quando queremos que duas condições sejam verdadeiras, usamos o operador &&
    // neste caso, conforme vimos em aula, caso a pessoa precise estar 
    // acima de um imc E abaixo de outro, podemos fazer algo como 
    // if (x > 5 && x < 10) {
    // }

    // não esqueça de retornar o texto da faixa do IMC.
    if (indiceIMC >= 18.5 && indiceIMC <= 24.9) {
        return "Normal"
    } else if (indiceIMC >= 25 && indiceIMC <= 29.9){
        return "Sobrepeso"
    } else if (indiceIMC >= 30 && indiceIMC <= 39.9){
        return "Obecidade"
    } else if (indiceIMC >= 40) {
        return "Obecidade Grave"
    } else {
        return "Faixa nao definida"
    }
}

const mostrarResultadoIMC = () => {
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)
    let imc = calculoIMC(peso, altura)
    document.getElementById("resultado").innerText = "O seu IMC é: " + imc.toFixed(2)

    let faixaIMC = resultadoIMC(imc)
    alert("Sua faixa de IMC é: " + faixaIMC);
} */


function calcularIMC() {
    var nome = document.getElementById('nome').value;
    var alturaEnCentimetros = parseInt(document.getElementById('altura').value);
    var alturaEnMetros = alturaEnCentimetros / 100;
    var pesoEnKilos = parseInt(document.getElementById('peso').value);
  
    var imc = Math.round(pesoEnKilos / (alturaEnMetros * alturaEnMetros));
    var clasificacion;
    
    if (imc < 18.5) {
      clasificacion = 'esta muito esbelto';
    } else if (imc < 25) {
      clasificacion = 'e saludable';
    }else if (imc < 30) {
        clasificacion = 'tem sobrepeso';
    } else if (imc < 40) {
        clasificacion = 'tem obesidade';
    } else {
      clasificacion = 'tem obesidade grave';
    }
  
    var respuesta = 'Oi, ' + nome + ' seu IMC e ' + imc + ' e voce ' + clasificacion;
    alert(respuesta);
  }
  