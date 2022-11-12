suma();
let variable = "Hola mundo";
alert(variable);
console.log(variable)

function suma() 
{
 let nombre = "Diego";
 let variable = "Hola " + nombre;   
 alert(variable);
}

function suma2() 
{
   var numero1,numero2,sumanumeros;
   numero1 = parseFloat(prompt("Dame un numero"));
   numero2 = parseFloat(prompt("Dame otro numero"));
   sumanumeros = numero1 + numero2;
   console.log(typeof sumanumeros);
   document.write(sumanumeros);   
}
//suma2();

let numeros = [3,"Diego", true, false, "Hola"];

for (let i = 0; i < numeros.length; i++) {

   console.log(numeros[i]);
   document.write(numeros[i]+ "<br>");
   
}
let vari = true;
if(vari){
document.write(vari);
}

if(vari){
   document.write("Mi variable es true");
}
else{
   document.write("Mi variable es false");
}
if (condition) {

}
else{
   if(condition){

}else{
 }
}

switch (dia) {
   case "Lunes":
      console.log("El dia es Lunes");
      break;
   case "Martes":
      console.log("El dia es Martes");
      break;
   
   default:
      console.log("Es otro dia de la semana");
      break;
}
var x = 1;
while (x <= 10) 
{
   x++;
   document.write(x);
}