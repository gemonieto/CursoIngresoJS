/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var importeParceado;
	var descuento=25;
	var descuentoParceado;
	var resultado;
	var resultadoParceado;

	importe=txtIdImporte.value;
	importeParceado=parseInt(importe);
	descuentoParceado=parseInt(descuento);
	resultado=importeParceado-((importeParceado*descuentoParceado)/100);
	resultadoParceado=parseInt(resultado);

	txtIdResultado.value=resultado;
}