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
	var aumentoParceado;
	var resultado;
	var resultadoParceado;

	sueldo=txtIdSueldo.value;
	sueldoParceado=parseInt(sueldo);
	aumentoParceado=parseInt(aumento);
	resultado=((sueldoParceado*aumentoParceado)/100)+sueldoParceado;
	resultadoParceado=parseInt(resultado)

	txtIdResultado.value=resultadoParceado;

}
