/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadNegativos=0;
	var cantidadPositivos=0;
	var cantidadCeros=0;
	var cantidadPares;
	var promNegativos;
	var promPositivos;

	respuesta=true;

	do
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Ingrese un numero valido");
			numeroIngresado=parseInt(numeroIngresado);
		}
		respuesta=confirm("Desea continuar?")

		if (numeroIngresado<0)
		{
			sumaNegativos=numeroIngresado+sumaNegativos;
			cantidadNegativos=cantidadNegativos+1;
			
		}
		else if(numeroIngresado==0)
		{
			cantidadCeros=cantidadCeros+1
		}
		else
		{
			sumaPositivos=numeroIngresado+sumaPositivos;
			cantidadPositivos=cantidadPositivos+1;
	
		}

		promNegativos=sumaNegativos/cantidadNegativos;
		promPositivos=sumaPositivos/cantidadPositivos;

	}while (respuesta==true);
	
//fin del while

	document.writeln("la suma de negativos es :"+sumaNegativos);
	document.writeln("la suma de positivos es:"+sumaPositivos);
	document.writeln("la cantidad de negativos es :"+cantidadNegativos);
	document.writeln("la canitdad de positivos es :"+cantidadPositivos);
	document.writeln("la canitdad de numeros 0 es :"+cantidadCeros);
	document.writeln("la canitdad de numeros pares es :"+cantidadPares);
	document.writeln("el promedio de numeros negativos es :"+promNegativos);
	document.writeln("el promedio de numeros positivos es :"+promPositivos);

}//FIN DE LA FUNCIÓN