/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numerIngresado
	var sumaPositivos=0;
	var multiplicacionNegativos=1;
	respuesta=true;

	do
	{
		numerIngresado=prompt("Ingrese un numero");
		numerIngresado=parseInt(numerIngresado);
		respuesta=confirm("desea continuar?");
	
		if(numerIngresado<0)
		{
			multiplicacionNegativos=numerIngresado*multiplicacionNegativos;
		}
		else
		{
			sumaPositivos=numerIngresado+sumaPositivos;
		}
	}while(respuesta==true);

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN