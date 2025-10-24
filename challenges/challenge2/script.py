def createFrame(names): 
    palabra_mas_larga = max(map(lambda x: len(x), names))  # Se detecta la palabra más larga
    p_frame = ""

    # Creando el marco rectangular superior
    p_frame += "*" * (palabra_mas_larga + 4) 

    # Creando los marcos rectangulares derecho e izquierdo

    for i in range (len(names)): 
        p_frame += "\n"
        p_frame += f"* {names[i]}{" " * (palabra_mas_larga - len(names[i]))} *"

    p_frame += "\n"

    # Creando el marco rectangular inferior
    p_frame += "*" * (palabra_mas_larga + 4) 
    return p_frame

names1 = createFrame(['midu'])
print(names1)
"""
    Salida: 
    ********
    * midu *
    ********
"""

names2 = createFrame(['a', 'bb', 'ccc', 'dddd'])
print(names2)

"""
    Salida 
    ********
    * a    *
    * bb   *
    * ccc  *
    * dddd *
    ********
"""