

var factor = 104146167919; // modificar aqui si quieres numeros mas grandes
//var primoBase = 15024166879; // el numero primo base para comenzar la busqueda
var primoBase = 1992386014139; // el numero primo base para comenzar la busqueda
var iteraciones = 20; // encuentra cadenas de numeros primos con mas iteraciones

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

    if (i  == iteraciones){
        console.log("con ", iteraciones, "el ultimo primo es:", lastPrime);
    }
}



console.log("primos", primos)
console.log("no primos", noPrimos)

function isPrime(numero) {
    console.log("este es el numero",  numero)
    for (var i = 2; i < numero / 2; i++) {
        //console.log(numero/1308)
        if (numero % i === 0 || i % 2 === 1) {
            console.log("este es el iterador", i)

            return false;
        }

    }
    return numero;;

}
