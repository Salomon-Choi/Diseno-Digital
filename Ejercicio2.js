// Calcular el promedio de notas
// Implementa la función 'calcularPromedioNotas' que reciba un arreglo de objetos que 
// representan estudiantes.
// Cada estudiante tiene una propiedad 'nombre' (string) y 'notas' (arreglo de números).
// La función debe devolver un nuevo objeto que contenga el nombre del estudiante y el 
// promedio de sus notas


const estudiantes = [{nombre: "Juan",notas: [98, 96, 87, 88],},{nombre: "María",notas: 
[94, 95, 86, 87]},{nombre: "Daniel",notas: [98, 96, 93, 99],}];

function calcularPromedioNotas(estudiantes) {
    const r =estudiantes.length
    const respuesta =[];

    for (let i = 0; i < r; i++) {
        const re= estudiantes[i].notas.length
        let promedio=0
        for(let j=0; j<re; j++){
            promedio=promedio+estudiantes[i].notas[j]
        }

        respuesta.push({Nombre: estudiantes[i].nombre, Promedio:promedio/re} )

    }
    console.log(respuesta)
   }

   calcularPromedioNotas(estudiantes)