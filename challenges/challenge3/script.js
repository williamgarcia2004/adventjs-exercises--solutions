function organizeInventory (inventory) {
    return inventory.reduce((acc, curr) => {
        acc[curr.category] ??= {}
        acc[curr.category][curr.name] = (acc[curr.category][curr.name] || 0) + curr.quantity
        return acc
    }, {})
}

let inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
]

// console.log(organizeInventory(inventory))

/*
    Salida
    {
        toys: { doll: 5, car: 5 },
        sports: { ball: 2, racket: 4 }
    }
*/

const inventory2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
]

console.log(organizeInventory(inventory2))
/*
    Salida
    {
        education: { book: 15 },
        art: { paint: 3 }
    }
*/ 