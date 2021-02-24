function mostrar()
{
	var numeroRandom;
	
	numeroRandom=Math.floor(Math.random() * 99)+1;
	numeroRandom=parseInt(numeroRandom);
	if (numeroRandom<=10)
	{
		alert(numeroRandom);
	}	
}//FIN DE LA FUNCIÓN