def manufactureGifts(giftsToProduce): 
    from itertools import chain

    giftsFilter = filter(lambda x: type(x["quantity"]) == int and x["quantity"] > 0, giftsToProduce)
    giftsMapped = list(map(lambda x: [x["toy"] for _ in range(x["quantity"])], giftsFilter))
    return list(chain.from_iterable(giftsMapped))

production1 = [
    { "toy": 'car', "quantity": 3 },
    { "toy": 'doll', "quantity": 1 },
    { "toy": 'ball', "quantity": 2 }
]

result1 = manufactureGifts(production1)
print(result1)  ## Salida ------> ['car', 'car', 'car', 'doll', 'ball', 'ball']

production2 = [
    { "toy": 'train', "quantity": 0 }, 
    { "toy": 'bear', "quantity": -2 }, 
    { "toy": 'puzzle', "quantity": 1 }
]

result2 = manufactureGifts(production2)
print(result2)    # Salida -----> ['puzzle']

production3 = []
result3 = manufactureGifts(production3)
print(result3)   # Salida ------> []