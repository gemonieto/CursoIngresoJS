Germán Nieto Ejercicio Switch 10

function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value;

	switch (estacionIngresada)
	{
		case "Verano":
		switch (destinoIngresado)
		{
			case "Mar del Plata":
				alert ("Se viaja");
			break;
			case "Cataratas":
				alert ("Se viaja");
			break;
			default:
				alert ("No se viaja");
		}
		break;

		case "Invierno":
		switch (destinoIngresado)
		{
			case "Bariloche":
				alert ("Se viaja");
			break;
			default:
				alert ("No se viaja");
		}
		break;

		case "Primavera":
		switch (destinoIngresado)
		{
			case "Bariloche":
				alert ("No se viaja");
			break;
			default:
				alert ("Se viaja");
		}
		break;

		case "Otoño":
			alert ("Se viaja");
		break;
	}
}//FIN DE LA FUNCIÓN