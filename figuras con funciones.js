//codigo del cuadrado

console.group("Cuadrados")

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden:" + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4
}

// console.log("El perimetro del cuadrado es:" + perimetroCuadrado + "cm");


function areaCuadrado(lado){
    return lado * lado
}
// console.log("El área del cuadrado es:" + areaCuadrado + "cm2") 

console.groupEnd()


//codigo del triangulo

console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const basetriangulo = 4;


// console.log("Los lados del tiangulo miden " 
// + ladoTriangulo1 
// + "cm, " 
// + ladoTriangulo2 
// + "cm, " 
// + basetriangulo
// + "cm" );

// const alturaTriangulo = 5.5;
// console.log ("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm" );


function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
// console.log("El area del triangulo es: " + areaTriangulo + "cm2");


console.groupEnd()

//codigo del circulo

console.group("Circulos")

// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm")

function diametroCirculo(radio){
    return radio * 2;
}
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: "  + diametroCirculo * diametroCirculo + "cm");

const PI = Math.PI;
// 

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI
}

// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

function areaCirculo(radio){
    return (radio * radio) * PI
}

// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El area del circulo es: " + areaCirculo + "cm2");

console.groupEnd()

//Aqui interactuamos con el HTML

function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Calcular tirangulo

function CalcularPerimetroTriangulo(){
    const inputA = document.getElementById("InputTriangulo");
    const inputB = document.getElementById("InputTriangulo2");
    const inputBas = document.getElementById("InputTriangulo3");
    const inputAltura = document.getElementById("InputTriangulo4");

    const value = input.value;
    const value2 = input.value2;
    const value3 = input.value3;
    const value4 = input.value4;

    const perimetro = perimetroTriangulo(value);
    alert(perimetro);


}
function alturaTriangulo(ladoA, ladoB, ladoBase){
    if (ladoA != ladoB) {
        console.error("Los lados a y b no son iguales");
    }
        else {
            let trianguloPequenoLadoA; // PENDIENTE
            const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
            const trianguloPequenoLadoBase = trianguloGrandeLadoA;
            const trianguloGrandeAltura = trianguloPequenoLadoA;
            return trianguloGrandeAltura;
        }
    }
    function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
        if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
            console.error("Los lados a y b no son iguales");
        } else {
            const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
            const trianguloPequenoLadoBase = trianguloGrandeLadoA;
    
            const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
            const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;
    
            const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);
    
            const trianguloGrandeAltura = trianguloPequenoLadoA;
            return trianguloGrandeAltura;
        }
    }

