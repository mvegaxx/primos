import math

#primoBase = 22513583
#9007154355408959
#27093997468432753
#27244239137203931
#134286559156780091
#467737284162897641
#1629063613340779817
#2474644308342814631
#17786017647432497536200811937817548599
#5611651651165132132116513213651656184879849846541321321851987987984654131321165119847027
#158809173895446375831144734148401707861873653839436405804869463960548330057787962508639344452161267206832792283601459527829 
factor = 2 ** 120 

primoBase = 158809173895446375831144734148401707861873653839436405804869463960548330057787962508639344452161267206832792283601459527829

iteraciones = 1000
minimo = math.ceil(math.sqrt(primoBase))/2

print(f"este es el factor: {factor}")

primos = 0
noPrimos = 0
lastPrime = 0 

def isPrime(numero):
    for index in range (2, int(minimo/2)):
        if numero % index == 0:
            return False
    
    return numero




for index in range(1, iteraciones + 1):
    print(primoBase + ( factor * index ))
    primeCandidate = isPrime(primoBase + ( factor * index ) )

    if primeCandidate:
        lastPrime = primeCandidate
        print("este es primo", lastPrime)
        primos += 1
        break
    else:
        noPrimos += 1

    if index == iteraciones:
        print("con ", iteraciones, "el ultimo primo es:", lastPrime)

print("primos", primos)
print("no primos", noPrimos)


