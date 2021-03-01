/*Germán Nieto ejercicio 7
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numerIngresado;
	contador=0;
	acumulador=0;
	respuesta=true;

	do
	{
		numerIngresado=prompt("Ingrese un numero");
		numerIngresado=parseInt(numerIngresado);
		acumulador=numerIngresado+acumulador;
		contador=contador+1;
		respuesta=confirm("desea continuar?");
	}while(respuesta==true)

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;//me divide por el primer numero que pongo como contador

	
}//FIN DE LA FUNCIÓN