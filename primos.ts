/// al parecer con numeros pequeños se conserva la cercania


//var factores = 17; // modificar aqui si quieres numeros mas grandes
var factor = 36; // modificar aqui si quieres numeros mas grandes
//var primoBase = 15024166879; // el numero primo base para comenzar la busqueda

/// numero maximo alcanzado en js
var primoBase = 9007199254740997; // el numero primo base para comenzar la busqueda
var iteraciones = 20; // encuentra cadenas de numeros primos con mas iteraciones

var primos = 0;
var noPrimos = 0;
var lastPrime = 0;

console.log("suma", 9007199254740996 + 3)

for (let i = 1; i <= iteraciones ; i++) {
    let primeCandidate = isPrime(9007199254740992 + 6);
    console.log("este es candidato", primoBase + (factor * i))

    if (primeCandidate) {
        lastPrime = primeCandidate;
        console.log("este es primo", lastPrime)

        primos += 1;
    } else {
        noPrimos += 1;
    }

    if (i == iteraciones) {
        console.log("con ", iteraciones, "el ultimo primo es:", lastPrime);
    }
}

console.log("primos", primos)
console.log("no primos", noPrimos)

console.log(factor.toString().length)
console.log(primoBase.toString().length)

function isPrime(numero: number) {
   //console.log("este es el numero", numero)
  
    for (var i = 2; i < 94906266/2; i++) {
        
        // implementar mejor manera de evaluar si es primo

        if (numero % i === 0) {
            return false;
        }

    }
    return numero;;

}
