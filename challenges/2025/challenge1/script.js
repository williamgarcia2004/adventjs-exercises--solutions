function filterGifts(gifts) {
    return gifts.filter(gift => !gift.includes("#"))
}

let resultado1 = filterGifts(['car', 'doll#arm', 'ball', '#train'])
console.log(resultado1)   // Salida -----> ['car', 'ball']

let resultado2 = filterGifts(['#broken', '#rusty'])
console.log(resultado2)   // Salida -----> []

let resultado3 = filterGifts([])      
console.log(resultado3)   // Salida -----> []

