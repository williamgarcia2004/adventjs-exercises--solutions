function createFrame(names) {
    const palabra_mas_larga = Math.max(...names.map(name => name.length))  // Se detecta la palabra más larga
    let p_frame = ""

    // Creando el marco rectangular superior
    p_frame += "*".repeat(palabra_mas_larga + 4) 

    // Creando los marcos rectangulares derecho e izquierdo
    for (let i = 0; i < names.length; i++) {
        p_frame += "\n"
        p_frame += `* ${names[i]}${" ".repeat(palabra_mas_larga - names[i].length)} *`
    }

    p_frame += "\n"

    // Creando el marco rectangular inferior
    p_frame += "*".repeat(palabra_mas_larga + 4) 
    return p_frame
}

// Pruebas
const names1 = createFrame(['midu'])
console.log(names1)
/*
    Salida: 
    ********
    * midu *
    ********
*/ 

const names2 = createFrame(['a', 'bb', 'ccc', 'dddd'])
console.log(names2)

/*
    Salida 
    ********
    * a    *
    * bb   *
    * ccc  *
    * dddd *
    ********
*/ 