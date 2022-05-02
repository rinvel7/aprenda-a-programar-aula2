//Exercício 2: verificando se é maior de 18 anos

//A rede de boates Curtição a Mil necessita de uma funcionalidade no sistema de entrada que faz uma leitura digital da carteira de identidade das pessoas e determina se cada uma delas é ou não é maior de idade. Para a parte de reconhecimento de imagem, eles contrataram pessoas especialistas em processamento de imagens que coletassem a informação de idade direto da carteira de identidade das pessoas. O próximo passo é justamente determinar se a pessoa é maior de idade ou não. Para isso a rede Curtição a Mil contratou você para resolver esse problema.
//As pessoas especialistas em processamento de imagens já deixaram um template de código pra você. Com isso o seu papel é apenas preencher as informações que estão faltando para que o código funcione corretamente. Portanto, copie e cole o código abaixo em um arquivo e depois implemente a solução pedida nos comentários do código:

function legalAgeOrNot (age) {
    // escreva aqui a solução de código que verifica se a idade da pessoa é maior ou não que 18 anos.
    // Se for maior ou igual, você deve exibir na tela "A idade é maior ou igual a 18 anos. Pode entrar na boate.".
    // Se for menor, você deve exibir na tela "A idade é menor que 18 anos, entrada não permitida!"
if (age >= 18) {
    console.log("A idade e maior ou igual a 18 anos. Pode entar na boate")
}else{
    console.log("A idade e menor que 18 anos. Pode entar nao permitida!")
}

}

let age1 = 13
let age2 = 18
let age3 = 20

// chame a função legalAgeOrNot que você construiu logo abaixo deste comentário para cada uma das idades em age1, age2, age3.

legalAgeOrNot(age1)
legalAgeOrNot(age2)
legalAgeOrNot(age3)
