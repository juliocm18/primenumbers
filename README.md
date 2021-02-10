# primenumbers
get prime numbers descending way

# Ejercicio Números Primos:
Realizar un algoritmo que imprima los números primos entre 1 y  un número dado, de forma descendente.
Por ejemplo dado el número 7     se debería imprimir   7,5,3,2,1
Por ejemplo dado el número 15     se debería imprimir   13,11,7,5,3,2,1

--------------------------------------------------------------------------------
Nota:
El proyecto se desarrolló en TypeScript, para su posterior transpilación

Para Transpilar:
- npm run build

Para Correr los Test
- npm run test

Para Transpilar y ejecutar los test
- npm run buildtest

Para crear la imagen de Docker
- docker build -t primosapp .

Para ejecutar la imagen:
- docker run -it -p 3000:3000 primosapp

Para ejecutar el servicio:
- localhost:3000/find/numero

Ejemplo:
- localhost:3000/find/15
