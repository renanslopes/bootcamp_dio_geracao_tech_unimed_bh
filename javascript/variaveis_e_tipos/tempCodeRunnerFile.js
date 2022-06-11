// Função que substitui os números pares por 0, e caso o array base esteja vazio (ou null, ou undefined), é retornado -1.

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