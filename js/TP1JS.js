//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
alert("Hola Mundo");

//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write("Hello World");

//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
document.write("<br>", 3+5);

/*4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
Ejemplo:  
input: Coder 
Output: Hola Coder*/
let nomUsuario;

nomUsuario = prompt("Ingrese el nombre de usuario");
document.write("<br>", "Hola ", nomUsuario);

//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
let numero1;
let numero2;
let suma;

numero1 = parseInt(prompt("ingrese el primer numero a sumar"));
numero2 = parseInt(prompt("ingrese el segundo numero a sumar"));

suma = numero1 + numero2 //No es necesaria ya que se pueden sumar directo en el document.write

document.write("<br>","El resultado de sumar los dos numeros ingresados es de: ", numero1+numero2);

/*6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo:  
input: 15 , 3
Output: El 15 es el número más grande*/

let num1;
let num2;

num1 = parseInt(prompt("Ingrese el primer numero a comparar"));
num2 = parseInt(prompt("Ingrese el segundo numero a comparar"));

if (num1>num2) {
    document.write("<br>","El numero mayor es el: ", num1);
} else {
    if (num2>num1) {
        document.write("<br>","El numero mayor es el: ", num2);
    }else document.write("<br>","Ambos numeros son iguales")
}


