/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var sueldoParceado;
	var aumento=10;
	var resultado;

	sueldo=txtIdSueldo.value;
	sueldoParceado=parseInt(sueldo);
	resultado=((sueldoParceado*aumento)/100)+sueldoParceado;

	txtIdResultado.value=resultado;
}