def prepareGifts(gifts): 
    # Definimos un nuevo conjunto (para evitar los duplicados)
    conjunto = set(gifts)

    # Se convierte el conjunto a una lista para ordenar 
    newLista = list(conjunto)
    newLista.sort()

    # Retornamos la lista ordenada y sin duplicados 
    return newLista

# Pruebas

gifts1 = [3, 1, 2, 3, 4, 2, 5]
preparedGifts1 = prepareGifts(gifts1)
print(preparedGifts1)  # Salida --> [1, 2, 3, 4, 5]

gifts2 = []
preparedGifts2 = prepareGifts(gifts2)
print(preparedGifts2)  # Salida --> []  no hay regalos