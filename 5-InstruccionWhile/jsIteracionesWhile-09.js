/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var flagMaximo;
	var flagMinimo;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var numeroIngresado
	//iniciar variables
	flagMaximo=true;
	flagMinimo=true;
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
		
	
		if(flagMaximo==true)
		{
			numeroMaximo=numeroIngresado;
			flagMaximo=false;
		}
		else if (numeroIngresado>numeroMaximo)
		{
			numeroMaximo=numeroIngresado;
		}

		if(flagMinimo==true)
		{
			numeroMinimo=numeroIngresado;
			flagMinimo=false;
		}
		else if (numeroIngresado<numeroMinimo)
		{
			numeroMinimo=numeroIngresado;
		}		

		respuesta=confirm("desea continuar?");

	}while(respuesta==true);

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN