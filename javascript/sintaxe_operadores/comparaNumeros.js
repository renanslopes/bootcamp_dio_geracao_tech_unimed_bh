// Atividade
// Crie uma função que recebe dois números como parâmetros.
// Confira se os números são iguais.
// Confira se a soma dos números é maior que 10 ou menor que 20.
// Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
// Exemplo:

// Input: 1, 2
// Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.


function comparaNumeros(n1, n2) {
    let soma = n1 + n2;

    if (n1 == n2) {
        console.log(`Os numeros ${n1} e ${n2} são iguais.`);
    } else {
        console.log(`Os numeros ${n1} e ${n2} não são iguais.`);
    } if (soma < 10 && soma < 20) {
        console.log(`Sua soma é menor que 10 e menor que 20, sendo ${soma}`);
    } if (soma > 10 && soma > 20) {
        console.log(`Sua soma é maior que 10 e maior que 20, sendo ${soma}`);
    } else {
        console.log(`Sua soma é maior que 10 e menor que 20, sendo ${soma}`);
    }

}

comparaNumeros(10, 6);