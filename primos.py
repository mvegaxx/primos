import math

#primoBase = 22513583
#9007154355408959
#9007154355408959
#27093997468432753
#27244239137203931
#134286559156780091
#467737284162897641
#1629063613340779817
#2474644308342814631

# 3 numeros primos multiplicados 250331645303 * 703543935079 * 286045185552852247
#50378080940451067059758625928896697456439

factor = 2**116
#factor = 162906361521467179184028995001944951

primoBase = 17786017647432497536200811937817548599

iteraciones = 20
minimo = math.ceil(math.sqrt(primoBase))/2

print(r"este es el factor: {factor}")

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


