function prepareGifts(gifts) {
    // Definimos un nuevo conjunto (para evitar los duplicados)
    const conjunto = new Set(gifts); 

    // Se convierte el set a un array para usar el método de ordenamiento sort
    const newArray = [...conjunto];
    newArray.sort((a, b) => a - b);

    // Retornamos el array ordenado y sin duplicados
    return newArray;  
};

// Pruebas 
const gifts1 = [3, 1, 2, 3, 4, 2, 5];
const preparedGifts1 = prepareGifts(gifts1);
console.log(preparedGifts1);    // Salida -----> [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5];
const preparedGifts2 = prepareGifts(gifts2);
console.log(preparedGifts2);   //  Salida -----> [5, 6]

const gifts3 = [];
const preparedGifts3 = prepareGifts(gifts2);
console.log(preparedGifts2);   // Salida -----> []  no hay regalos