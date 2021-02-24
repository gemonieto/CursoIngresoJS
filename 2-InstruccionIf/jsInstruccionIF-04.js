function mostrar()
{
	var edad;

	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if(edad>=13 && edad<=18)
	{
		alert ("Usted es adolescente");
	}
	else
	{
		alert ("Usted no es adolescente");
	}
}//FIN DE LA FUNCIÓN