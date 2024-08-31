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
const personas = 70
const años = 3
for(let i = 0; i < personas ;i++){
    const valor = parseInt(prompt(`Introduce el valor del terreno o automovil de la persona ${i} `))
    let devaluacionAuto = 0 
    let evaluacionTerreno = 0
    for(let j = 1 ; j < años; j ++){
        const porcentajeDevaliacion = parseInt(prompt(`Ingrese el porcentaje de devaluación del automovil del año ${j}`))
        const porcentajeEvaluacion = parseInt(prompt(`Ingrese el porcentaje de evaluación del terreno del año ${j}`))
        let devalucaion = porcentajeDevaliacion / 100
        let evaluacion = porcentajeEvaluacion / 100
        devaluacionAuto = devaluacionAuto + (valor -devalucaion)
        evaluacionTerreno = evaluacionTerreno + (valor + evaluacion)
    }
    let incrementoTerreno = evaluacionTerreno - valor
    if (devaluacionAuto <= (incrementoTerreno / 2)) {
        console.log("Comprar el automóvil")
    } else {
        console.log("Comprar el terrreno")
    }
}

//Ejerccicio 8

const clientes = parseInt(prompt(`Ingrese el numero de clientes`))
for(let i = 0 ; i < clientes ; i++){
    const numComputadoras = parseInt(prompt(`Ingrese el numero de computadoras que compro el cliente ${i}`))
    let totalPrecio = numComputadoras * 11000
    let descuento = 0
    let porcentaje = ""
    if(numComputadoras < 5){
        porcentaje = "10%"
        descuento = (totalPrecio * 10)/100
    }
    if(numComputadoras >= 5 && numComputadoras < 10){
        porcentaje = "20%"
        descuento = (totalPrecio * 20)/ 100
    }
    if(numComputadoras > 10){
        porcentaje = "40%"
        descuento = (totalPrecio * 40)/100
    }
    let totalCompra = totalPrecio - descuento
    console.log(`Total sin descuento para el cliente ${i}: ${totalPrecio}`)
    console.log(`Total con descuento de ${porcentaje} para el cliente ${i}: ${totalCompra}`)
}

//Ejercicio 9

const personas = parseInt(prompt(`Ingrese el numero de personas`))
for(let i = 0; i < personas ; i++){
    const llantas = parseInt(prompt(`Ingrese la cantidad de llantas compradas de la persona ${i}`))
    let valorLlanta = 0
    if(llantas < 5){
        valorLlanta = 300
    }
    if(llantas >= 5 && llantas <= 10){
        valorLlanta = 250
    }
    if(llantas > 10){
        valorLlanta = 200
    }

    let totalCompra = valorLlanta * llantas
    console.log(`Valor de la llanta de la persona ${i}: ${valorLlanta}`)
    console.log(`Total de la compra de la persona ${i}: ${totalCompra}`)
 }

//Ejercicio 10

const clientes = parseInt(prompt(`Ingrese el numero de clientes`))
const IVA = parseInt(prompt(`Ingrese el porcentaje de IVA`))
for(let i = 0; i < clientes ; i++){
    const marcaEstereo = prompt(`Ingrese la marca del estero del cliente ${i}`)
    const precio = parseInt(prompt(`Ingrese el precio del estereo`))
    let descuento = 0
    if(precio >= 2000){
        descuento = (precio * 10)/100
    }
    if(marcaEstereo.toUpperCase() == "NOSY"){
        let descuentoNOSY = (precio * 5)/100
        descuento = descuento + descuentoNOSY
    }
    let totalSinIva = precio - descuento
    let valorIva = (totalSinIva * IVA)/100
    let totalConIva = totalSinIva + valorIva
    
    console.log(`Total sin iva del cliente ${i}: ${totalSinIva}`)
    console.log(`Total con iva del cliente ${i}: ${totalConIva}`)
}

//Ejercicio 11

const clientes = parseInt(prompt(`Ingrese el numero de clientes`))
const valorKilo = 10000
for(let i = 0 ; i < clientes ; i++){
    const kilosManzana = parseFloat(prompt(`Ingrese el numero de kilos de manzanas del cliente ${i}`))
    let descuento = 0
    if(kilosManzana >= 2.01 && kilosManzana <= 5.0){
        descuento = (valorKilo * 10)/100
    }

    if(kilosManzana >= 5.01 && kilosManzana <= 10.0){
        descuento = (valorKilo * 15)/100
    }

    if(kilosManzana >= 10.1){
        descuento = (valorKilo * 20)/100
    }

    let valorPagar = (valorKilo * kilosManzana) - descuento
    console.log(`Valor a pagar: ${valorPagar} de la person ${i}`)
}

//Ejercicio 12

const preparatoria = 1
const profesional = 2
const alumnos = parseInt(prompt(`Ingrese la cantidad de alumnos`))
for(let i = 0 ; i < alumnos ; i++){
    const promedio = parseFloat(prompt(`Ingrese promedio del alumno ${i}`))
    const nivel =  parseInt(prompt(`Ingrese 1 preparatoria o 2 profesional del alumno ${i}`))
    const materiasReprobadas = parseInt(prompt(`Ingrese las materias reprobadas del alumno ${i}`))
    if(nivel == preparatoria || nivel == profesional){
        let unidades;
        let descuentoPorcentaje = 0;
        let costoPorUnidad;
        let nombreNivel = "preparatoria"
        if (nivel === preparatoria) {
            if (promedio >= 9.5) {
                unidades = 55
                descuentoPorcentaje = 25
            } else if (promedio >= 9 && promedio < 9.5) {
                unidades = 50
                descuentoPorcentaje = 10
            } else if (promedio > 7 && promedio < 9) {
                unidades = 50
            } else if (promedio <= 7) {
                if (materiasReprobadas <= 3) {
                    unidades = 45
                } else {
                    unidades = 40
                }
            }
            costoPorUnidad = 50000 / 5
        } else if (nivel === profesional) {
            nombreNivel = "profesional"
            if (promedio >= 9.5) {
                unidades = 55
                descuentoPorcentaje = 20
            } else {
                unidades = 55
            }
            costoPorUnidad = 80000 / 5
        } 
    
        const costoBase = unidades * costoPorUnidad;
        const descuento = (costoBase * descuentoPorcentaje)/100
        const totalPagar = costoBase - descuento;
        
        console.log(`Valor a pagar es de ${totalPagar} del alumno ${i} de nivel ${nombreNivel}`)
    }else{
        alert("Nivel educativo no valido ingrese 1 o 2")
    }
}

//Ejercicio 13
do
{
    numero1=parseInt(prompt(`Ingresa el primer número`))
    if(numero1 > 0 ){
        numero2=parseInt(prompt(`Ingresa el segundo número`))
        numero3=parseInt(prompt(`Ingresa el tercer número`))
        if(numero1>numero2 && numero1>numero3){
            if(numero2>3) {
                console.log(`${numero2} es el número medio.`)
            }else {
                console.log(`${numero3} es el número medio.`)
            }
        }else {
            if (numero1<numero2 && numero1<numero3){
                if (numero2<numero3){
                    console.log(`${numero2} es el número medio.`)
                }else{
                    console.log(`${numero3} es el número medio.`)
                }
            }else{
                console.log(`${numero1} es el número medio.`)
            }
        }
    }
} while(numero1 != 0)

// Ejercicio 14

let count = 1;
while(true){
    const pasajeros = parseInt(prompt(`Ingrese el numero de pasajeros`))
    if(pasajeros > 0){
        const valorPasaje = parseFloat(prompt(`Ingrese el valor pasaje`))
        const valorPagar  = pasajeros * valorPasaje
        console.log(`El valor total del microbus ${count} es de ${valorPagar}`)
        count++
    }else{
        break
    }
}

//Ejercicio 15

const conversionCOP = 3550
do{
    cantidadDolar = parseInt(prompt(`Ingrese la cantidad de dolares`))
    if(cantidadDolar > 0){
        const valorCOP = cantidadDolar * conversionCOP
        console.log(`El valor del dolar a pesos es de COP ${valorCOP}`)
    }
}while(cantidadDolar > 0 )