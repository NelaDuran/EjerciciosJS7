
//Ejercicio 1

let totalEmpresa = 0
for(let i = 0; i <= 10; i++){
    let totalVenta = 0
    const llantas = parseInt(prompt(`Cuantas llantas comrpo la persona ${i}?`))
    if(llantas < 5){
        totalVenta = llantas * 800
    }else{
        totalVenta = llantas * 700
    }
    totalEmpresa = totalEmpresa + totalVenta
}
console.log(`total empresa : ${totalEmpresa}`)
 
 //Ejercicio 2//
 
 do{
     numero = parseInt(prompt("Introduce un número:"))
    if(numero > 0){
        const totalCompra = parseInt(prompt("Ingrese el total de la compra:"))
        let descuento = 0
        if(numero >= 74 ){
            descuento = (totalCompra * 20 )/100
        }else{
            descuento = (totalCompra *  15)/100
        }
        let totalPagar = totalCompra - descuento 
        console.log(`Valor a pagar: ${totalPagar}`)
    }
}while(numero != 0)

//Ejercicio 3//

const numPer=parseInt(prompt("Introduce el numero de personas"))
if(numPer >0){
    for(let i=0;i<numPer;i++){
        const sexo = prompt("Indique su sexo (F) o (M)") 
        let numPulsaciones=0
        if(sexo.toUpperCase() == "F" || sexo.toUpperCase() == "M"){
            const edad= parseInt(prompt("Indique su edad"))
            if(sexo.toUpperCase() == "F"){
                numPulsaciones =  (220-edad)/10
            } else{
                numPulsaciones = (210-edad)/10
            } 
            console.log(`El numero de pulsaciones es ${numPulsaciones}`)
        }else{
            console.log(`El sexo debe ser F o M`)
        } 
    }
}

//Ejercicio 4//

const numClientes=parseInt(prompt("Introduce la cantidad de clientes que tomaran la fianza"))
for(let i=0;i<numClientes;i++){ 
    let coutaPagar=0
    const valorFianza=parseInt(prompt(`Ingrese es el valor de su fianza`))
    if(valorFianza<50000){
        coutaPagar = (valorFianza*3)/100
    }else if(valorFianza>50000){
        coutaPagar = (valorFianza*2)/100
    }
    console.log(`Valor a pagar del  cliente ${i}: ${coutaPagar}`)
}

//Ejercicio 5

for(let i = 0; i < 38; i++){
    const materias = parseInt(prompt(`Introduce el numero de materias del alumno ${i}`))
    const valorMateria = parseInt(prompt(`Introduce el costo de la materia`))
    const promedioAlumno = parseInt(prompt(`Introduce el promedio del alumno ${i} en el ultimo periodo`))
    let pagoTotal = materias * valorMateria
    let descuento = 0
    let valorIva = 0
    if(promedioAlumno >= 9){
        descuento  = (pagoTotal * 30) / 100
    }else{
        valorIva = (pagoTotal * 10) /100
    }
    let valorPagar = (pagoTotal + valorIva) - descuento
    console.log(`Valor a pagar del alumno ${i}: ${valorPagar}`)
}

//Ejercicio 6
let sumImeca = 0
let ganancias = 0
let multaPagar = 0
const dias = 5
for(let i = 0; i < dias ;i ++){
    const gananciaDia = parseInt(prompt(`Introduce la ganancia del dia ${i}`))
    const imecaDia = parseInt(prompt(`Introduce la IMECA del dia ${i}`))
    ganancias = ganancias + gananciaDia
    sumImeca = sumImeca + imecaDia
}
console.log(`Ganancias totales: ${ganancias}`)
let promedioImeca = sumImeca / dias
console.log(`IMECA: ${promedioImeca}`)
if(promedioImeca > 170){
    let valorMulta = (ganancias * 50) / 100
    multaPagar = ganancias - valorMulta
}
console.log(`La multa a pagar: ${multaPagar}`)

//Ejercicio 7
const personas = 1
const años = 3
for(let i = 0; i < personas ;i++){
    const valor = parseInt(prompt(`Introduce el valor del terreno o automovil de la persona ${i} `))
    const porcentajeDevaliacion = parseInt(prompt(`Ingrese el porcentaje de devaluación del automovil`))
    const porcentajeEvaluacion = parseInt(prompt(`Ingrese el porcentaje de evaluación del terreno`))
    let devalucaion = porcentajeDevaliacion / 100
    let evaluacion = porcentajeEvaluacion / 100
    let devaluacionAuto = 0 
    let evaluacionTerreno = 0
    for(let j = 0 ; j < años; j ++){
        devaluacionAuto = devaluacionAuto + (valor -devalucaion)
        evaluacionTerreno = evaluacionTerreno + (valor + evaluacion)
    }
    let incrementoTerreno = evaluacionTerreno - valor
    console.log("incremento "+incrementoTerreno)
    console.log("devaluacion auto "+devaluacionAuto)
    if (devaluacionAuto <= (incrementoTerreno / 2)) {
        console.log("Comprar el automóvil")
    } else {
        console.log("Comprar el terrreno")
    }
}
