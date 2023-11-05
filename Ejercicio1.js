// Contar la cantidad de palabras en un texto
// Implementa la función 'contarPalabras' que reciba un texto y devuelva la cantidad de 
// palabras que contiene.
// Considera que las palabras están separadas por espacios y puede haber signos de 
// puntuación

function contarPalabras(texto) {
    const r =texto.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?¿!]/g, ' ') 
    let re=r.replace(/ +$/g, '')
    re=re.replace(/ +/g,' ').split(' ')
    let res =re.length
    if(re[0]==''){
       res=res-1 
    }
    console.log('Hay '+res+' palabras en total.')  
}

const texto = '! hola mundo ?'
console.log(texto)
contarPalabras(texto);