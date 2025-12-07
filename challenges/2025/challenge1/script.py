def filterGifts (gifts): 
    return list(filter(lambda x: "#" not in x, gifts))

# Pruebas
resultado1 = filterGifts(['car', 'doll#arm', 'ball', '#train'])
print(resultado1)      # Salida -----> ['car', 'ball']

resultado2 = filterGifts(['#broken', '#rusty'])
print(resultado2)      # Salida -----> []

resultado3 = filterGifts([])
print(resultado3)      # Salida -----> []