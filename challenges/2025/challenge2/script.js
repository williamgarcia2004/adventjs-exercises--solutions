function manufactureGifts(giftsToProduce) {
    const giftsFilter = giftsToProduce.filter(gift => typeof gift.quantity === "number" && gift.quantity > 0);
    return giftsFilter.map(gift => Array(gift.quantity).fill(gift.toy)).flat();
};

const production1 = [
    { toy: 'car', quantity: 3 },
    { toy: 'doll', quantity: 1 },
    { toy: 'ball', quantity: 2 }
];
const result1 = manufactureGifts(production1);
console.log(result1);    // Salida ------> ['car', 'car', 'car', 'doll', 'ball', 'ball']

const production2 = [
    { toy: 'train', quantity: 0 }, 
    { toy: 'bear', quantity: -2 }, 
    { toy: 'puzzle', quantity: 1 }
];
const result2 = manufactureGifts(production2);
console.log(result2);     // Salida -----> ['puzzle']

const production3 = [];
const result3 = manufactureGifts(production3);
console.log(result3);    // Salida ------> []