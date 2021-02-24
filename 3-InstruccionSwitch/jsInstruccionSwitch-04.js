function mostrar()
{
	var mesDelAño =txtIdMes.value;

	switch (mesDelAño) 
	{
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("31 días");
			break;
		case "Febrero":
			alert("28 días");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert ("30 días");
			break;
	}
}//FIN DE LA FUNCIÓN