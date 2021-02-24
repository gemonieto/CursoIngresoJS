function mostrar()
{
	var nota;

	nota=Math.floor(Math.random() * 11);
	nota=parseInt(nota);
	alert(nota);
	if (nota>=9)
	{
		alert("EXCELENTE");
	}
	else if(nota>=4)
	{
		alert("APROBÓ");
	}
	else
	{
		alert("Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN