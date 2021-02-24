function mostrar()
{
	var edad;

	edad=txtIdEdad.value;
	edad=parseInt(edad);
	if(edad>=18)
	{
		alert("Es mayor");
	}
	else
	{
		if(edad<13)
		{
		alert("Es menor");
		}
		else
		{
		alert("Es adolescente");
		}
	}	
}//FIN DE LA FUNCIÓN