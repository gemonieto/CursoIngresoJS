function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destino=txtIdDestino.value;
	var estadía=15000;
	var aumento;
	var descuento;
	var tarifaFinal;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					aumento=0.2;
					descuento=0;
					break;
				case "Cataratas":
				case "Cordoba":
					descuento=0.1;
					aumento=0;
					break;
				case "Mar del plata":
					descuento=0.2;
					aumento=0;
					break;
			}
		break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					descuento=0.2;
					aumento=0;
					break;
				case "Cataratas":
				case "Cordoba":
					aumento=0.1;
					descuento=0;
					break;
				case "Mar del plata":
					aumento=0.2;
					descuento=0;
					break;
			}
		break;
		case "Otoño":
		case "Primavera":
				switch(destino)
				{
					case "Bariloche":
					case "Cataratas":
						aumento=0.1;
						descuento=0;
						break;
					case "Cordoba":
						aumento=0;
						descuento=0;
						break;
					case "Mar del Plata":
						aumento=0.1;
						descuento=0;
						break;
				}
		break;
	}

	tarifaFinal=estadía+(estadía*aumento)-(estadía*descuento)
	alert("El valor de su estadía es de: "+tarifaFinal+" $");



}//FIN DE LA FUNCIÓN