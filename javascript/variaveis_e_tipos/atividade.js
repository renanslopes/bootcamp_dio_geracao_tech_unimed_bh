// Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.
// Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)

let texto = "abas";
// let texto = "ecov es-adof";
function inverteLetras(texto) {
    // VALIDA SE A STRING ESTÁ VAZIA, UNDEFINED OU NULLA
    if (texto == "" || !texto) return "String vazia";

    let texto_dividido = texto.split(" ");
    let texto_invertido = []
    let texto_resultante

    // IF -> VERIFICA SE A STRING POSSUI MAIS DE UMA PALAVRA
    if (texto_dividido.length > 1) {
        // FOR -> ITERA SOBRE O ARRAY "texto_dividido"
        for (i = 0; i < texto_dividido.length; i++) {
            texto_invertido.push(texto_dividido[i].split("").reverse().join(""));
            texto_resultante = texto_invertido.join(" ");
        }
        return texto_resultante;
    } else {
        // console.log("Antes da inversão", texto_dividido)
        texto_dividido.push(texto.split("").reverse().join(""));
        texto_resultante = texto_dividido.pop();
        return texto_resultante;
    }
}

if (texto === inverteLetras(texto)) {
    console.log("Esse texto é um palíndromo!");
} else {
    console.log("Não se trata de um palíndromo!");
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

// let array_base = []
let array_base = [1, 2, 3, 4, 5, 6, 343, 54464, 343, 2325, 768, 86878, 4543, 2323, 12232, 4657, 455768, 96, 658, 9]
function trocaPares(valor, indice, array) {
    if (array) {
        if (array[indice] % 2 === 0) {
            array[indice] = valor * 0;
        }
    }
    else {
        return "-1";
    }
}

array_base.forEach(trocaPares);
let resposta = array_base.length > 0 ? console.log(array_base) : console.log("-1")
