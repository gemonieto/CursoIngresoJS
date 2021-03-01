/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var importeParceado;
	var descuento=.25;
	var resultado;

	importe=txtIdImporte.value;
	importeParceado=parseInt(importe);
	resultado=importeParceado-(importeParceado*descuento);

	txtIdResultado.value=resultado;
}