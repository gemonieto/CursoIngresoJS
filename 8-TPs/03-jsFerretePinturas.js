/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
var temperatura;
var temperaturaNumerico;
var gradosFahrenheit;

temperatura=txtIdTemperatura.value;
temperaturaNumerico=parseInt(temperatura);
gradosFahrenheit=(temperaturaNumerico*9/5)+32;

alert("Equivale a: "+gradosFahrenheit+" grados Fahrenheit");


}

function CentigradosFahrenheit () 
{
var temperatura;
var temperaturaNumerico;
var gradosCelcius;

temperatura=txtIdTemperatura.value;
temperaturaNumerico=parseInt(temperatura);
gradosCelcius=(temperaturaNumerico-32)*5/9;

alert("Equivale a: "+gradosCelcius+" grados Celcius");	
}
