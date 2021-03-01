function mostrar()
{
	var edad;

	edad=txtIdEdad.value;
	edad=parseInt(edad);
	
	while(isNaN(edad)==true || edad<1||edad>99)
	{
		edad=prompt("ingrese edad valida");
	}

	if(edad>=18)
	{
		alert ("Usted es mayor de edad");
	}	
}	
//FIN DE LA FUNCIÓN