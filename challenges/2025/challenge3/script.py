def drawGift(size, symbol): 
    if size < 2: return "" 
    resultado = f"{symbol * size}"

    for _ in range(0, size - 2): 
        resultado += f"\n{symbol}{" " * (size - 2)}{symbol}"

    resultado += f"\n{symbol * size}"
    return resultado 

# Pruebas
g1 = drawGift(4, '*')
print(g1)
"""
    Salida:
    ****
    *  *
    *  *
    ****
"""

g2 = drawGift(3, '#')
print(g2)
"""
    Salida:
    ###
    # #
    ###
"""

g3 = drawGift(2, '-')
print(g3)
"""
    Salida:
    --
    --
"""

g4 = drawGift(1, '+')
print(g4)      # Salida -------> ""