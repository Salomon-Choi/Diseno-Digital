// Encontrar duplicados
// Implementa la función 'encontrarDuplicados' que reciba un arreglo de números y 
// devuelva un nuevo arreglo
// con los números que se repiten en el arreglo original

const n =[1,2,2,3,4,4,3,5,2];

function encontrarDuplicados(n) {
    let respuesta=[]
    let repite = false
    for (let i= 0; i< n.length; i++){
        console.log(n[i])
        for(let j=0; j<n.length; j++){
            if(i!=j){
                if(n[i]==n[j]){
                   repite=true
                }
            }
        }
        if(repite){
            respuesta.push(n[i])
        }
        repite = false
    }
    console.log('El listado de los números que se repiten son:')
    console.log(respuesta)

   }

encontrarDuplicados(n)