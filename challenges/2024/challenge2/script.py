def createFrame(names): 
    # Se detecta la palabra más larga
    palabra_mas_larga = max(map(lambda x: len(x), names))  

    # Creando el marco rectangular superior
    p_frame = f"{"*" * (palabra_mas_larga + 4)}"

    # Creando los marcos rectangulares derecho e izquierdo
    for i in range (len(names)): 
        p_frame += f"\n* {names[i]}{" " * (palabra_mas_larga - len(names[i]))} *"

    # Creando el marco rectangular inferior
    p_frame = f"\n{"*" * (palabra_mas_larga + 4)}"
    return p_frame

# Pruebas
names1 = createFrame(['midu', 'madeval', 'educalvolpz'])
print(names1)
"""
    Salida: 
    ***************
    * midu        *
    * madeval     *
    * educalvolpz *
    ***************
"""

names2 = createFrame(['midu'])
print(names2)
"""
    Salida 
    ********
    * midu *
    ********
"""

names3 = createFrame(['a', 'bb', 'ccc'])
print(names3)
"""
    Salida:
    *******
    * a   *
    * bb  *
    * ccc *
    *******
"""

names4 = createFrame(['a', 'bb', 'ccc', 'dddd'])
print(names4)
"""
    Salida: 
    ********
    * a    *
    * bb   *
    * ccc  *
    * dddd *
    ********
"""