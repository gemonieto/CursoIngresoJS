function mostrar()
{
	var edad;

	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if(edad<=13 || edad>=18)
	{
		alert ("Usted NO es adolescente");
	}

}//FIN DE LA FUNCIÓN