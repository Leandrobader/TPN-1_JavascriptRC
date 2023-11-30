/**
 * 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:



input: Hola mundo
Output: oauo

 */

let frase = prompt("Ingrese una frase");
//console.log(frase);

let arrayFrase = frase.split("");
let arrayVocales=[];
//console.log(arrayFrase);

for (let i = 0; i < arrayFrase.length; i++) {
    if (arrayFrase[i]==="a" || arrayFrase[i]==="e" || arrayFrase[i]==="i" || arrayFrase[i]==="o" || arrayFrase[i]==="u" || arrayFrase[i]==="A" || arrayFrase[i]==="E" || arrayFrase[i]==="I" || arrayFrase[i]==="O" || arrayFrase[i]==="U") {
        arrayVocales.push(arrayFrase[i]);
    }
    //console.log(vocales);
}

let vocales = arrayVocales.join("");
document.write("<h1>Las vocales de la frase ingresada son: ",vocales);