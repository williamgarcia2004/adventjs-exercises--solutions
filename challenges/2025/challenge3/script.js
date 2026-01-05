function drawGift(size, symbol) {
    if (size < 2 ) return "";
    let resultado = `${symbol.repeat(size)}`;

    for (let i = 1; i <= size - 2; i++) {
        resultado += `\n${symbol}${" ".repeat(size - 2)}${symbol}`;
    };

    resultado += `\n${symbol.repeat(size)}`;
    return resultado;
};

// Pruebas
const g1 = drawGift(4, '*');
console.log(g1);   
/* 
    Salida:
    ****
    *  *
    *  *
    ****
*/

const g2 = drawGift(3, '#');
console.log(g2);
/* 
    Salida:
    ###
    # #
    ###
*/

const g3 = drawGift(2, '-');
console.log(g3);
/* 
    Salida:
    --
    --
*/

const g4 = drawGift(1, '+');
console.log(g4);   // Salida ----> ""