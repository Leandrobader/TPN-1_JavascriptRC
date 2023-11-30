/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo:  
input: 15 , 3, 9

Output: El 15 es el número más grande */

let num1;
let num2;
let num3;
let mayor;

num1 = parseInt(prompt("Ingrese el primer numero"));
num2 = parseInt(prompt("Ingrese el segundo numero"));
num3 = parseInt(prompt("Ingrese el tercer numero"));

if (num1>=num2 && num1>=num3) {
    document.write("El numero mas grande es el: ", num1);
} else {
    if (num2>=num1 && num2>=num3) {
        document.write("El numero mas grande es el: ", num2);
    } else {
        document.write("El numero mas grande es el: ", num3);
    }
    
}