//codigo del cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden:" + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es:" + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado
console.log("El área del cuadrado es:" + areaCuadrado + "cm2") 

console.groupEnd()


//codigo del triangulo

console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const basetriangulo = 4;


console.log("Los lados del tiangulo miden " 
+ ladoTriangulo1 
+ "cm, " 
+ ladoTriangulo2 
+ "cm, " 
+ basetriangulo
+ "cm" );

const alturaTriangulo = 5.5;
console.log ("La altura del triangulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + basetriangulo;
console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm" );


const areaTriangulo = (basetriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm2");


console.groupEnd()

//codigo del circulo

console.group("Circulos")

const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm")


const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: "  + diametroCirculo * diametroCirculo + "cm");

const PI = Math.PI;
console.log("PI es igual a: " +  Math.PI);

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + "cm2");

console.groupEnd()



