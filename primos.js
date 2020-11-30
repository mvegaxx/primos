

var factor = 521665699693; // modificar aqui si quieres numeros mas grandes
//var primoBase = 15024166879; // el numero primo base para comenzar la busqueda
var primoBase = 9007127248378339; // el numero primo base para comenzar la busqueda
var iteraciones = 10000; // encuentra cadenas de numeros primos con mas iteraciones

var primos = 0;
var noPrimos = 0;
var lastPrime = 0;

for (var i = 1; i <= iteraciones; i++) {
    let primeCandidate = isPrime(primoBase + (factor * i));

    if (primeCandidate) {
        lastPrime = primeCandidate;
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

function isPrime(numero) {
   console.log("este es el numero", numero)

    for (var i = 2; i < numero / 2; i++) {

        /*let divisor = 0;
        if (i % 2 === 0) {
            continue
        } else if (i % 3 === 0) {
            continue
        }
        else if (i % 5 === 0) {
            continue

        }
        else {
            divisor = i
        }*/


        //console.log("este es el divisor" , divisor)
        if (numero % i === 0) {
           //console.log("este es el iterador", i)
            return false;
        }

    }
    return numero;;

}
