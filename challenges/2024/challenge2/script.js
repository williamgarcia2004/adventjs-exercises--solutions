function createFrame(names) {
    // Se detecta la palabra más larga
    const palabra_mas_larga = Math.max(...names.map(name => name.length)); 
    
    // Creando el marco rectangular superior
    let p_frame = `${"*".repeat(palabra_mas_larga + 4)}`;

    // Creando los marcos rectangulares derecho e izquierdo
    for (let i = 0; i < names.length; i++) {
        p_frame += `\n* ${names[i]}${" ".repeat(palabra_mas_larga - names[i].length)} *`;
    };

    // Creando el marco rectangular inferior
    p_frame += `\n${"*".repeat(palabra_mas_larga + 4)}`;
    return p_frame;
}

// Pruebas
const names1 = createFrame(['midu', 'madeval', 'educalvolpz']);
console.log(names1);
/*
    Salida: 
    ***************
    * midu        *
    * madeval     *
    * educalvolpz *
    ***************
*/ 

const names2 = createFrame(['midu']);
console.log(names2);
/*
    Salida:
    ********
    * midu *
    ********
*/ 

const names3 = createFrame(['a', 'bb', 'ccc']);
console.log(names3);
/*
    Salida:
    *******
    * a   *
    * bb  *
    * ccc *
    *******
*/

const names4 = createFrame(['a', 'bb', 'ccc', 'dddd']);
console.log(names4);

/*
    Salida: 
    ********
    * a    *
    * bb   *
    * ccc  *
    * dddd *
    ********
*/ 