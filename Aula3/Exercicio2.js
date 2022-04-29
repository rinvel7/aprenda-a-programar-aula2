//Um cliente que vende produtos internacionais e nacionais conseguiu extrair alguns dados de seu programa financeiro. O problema é que esse programa retorna os dados na forma de mapas e traz apenas o valor do produto e se ele é internacional ou nacional, mas não calcula os impostos.
//Dada essa situação, ele contratou você para criar um programa que, ao receber o mapa de um produto, verifica se ele é nacional ou internacional e aplica 20% de impostos caso seja de outro país e 12% caso seja brasileiro. Uma vez aplicado o imposto, o programa imprime na tela o valor total do produto.
//Base de dados que o cliente passou para você:

let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

if (produtoA.internacional == false){
    let valorImpostos = produtoA.valor * 1.12
    console.log("O produto é nacional")
    console.log("As " + produtoA.nome, "tem um valor de " + valorImpostos)
}else{
    let valorImpostos = produtoA.valor * 1.2
    console.log("O produto é internacional")
    console.log("As " + produtoA.nome, "tem um valor de " + valorImpostos)
}


if (produtoB.internacional == false){
    let valorImpostos = produtoB.valor * 1.12
    console.log("O produto é nacional")
    console.log("Os " + produtoB.nome, "tem um valor de " + valorImpostos)
}else{
    let valorImpostos = produtoB.valor * 1.2
    console.log("O produto é internacional")
    console.log("Os " + produtoB.nome, "tem um valor de " + valorImpostos)
}

//Usamos o condiconal para testar se a chave internacional do mapa produtoA é true ou false.
if (produtoC.internacional == true) {
    //para deixar o código organizado, podemos clarar uma variável que recebe o resultado do calculo de impostos. 
    //Isso deixa o progrmaa mais legível sobre o que está acontecendo.
    let valorImpostos = produtoC.valor * 1.2
    //Podemos adiconar um console.log com uma mensagem que será útil para verificarmos se o programa funcionou corretamente.
    console.log("O produto é internacional")
    console.log("As " + produtoC.nome, "tem um valor de " + valorImpostoss)

} else {
    let valorImpostos = produtoC.valor * 1.12
    console.log("O produto é nacional")
    console.log("As " + produtoC.nome, "tem um valor de " + valorImpostos)   
}