/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio1Numerico;
	var precio2;
	var precio2Numerico;
	var precio3;
	var precio3Numerico;
	var suma;
	var sumaParceada;

	precio1=txtIdPrecioUno.value;
	precio1Numerico=parseInt(precio1);
	precio2=txtIdPrecioDos.value;
	precio2Numerico=parseInt(precio2);
	precio3=txtIdPrecioTres.value;
	precio3Numerico=parseInt(precio3);
	suma=precio1Numerico+precio2Numerico+precio3Numerico;
	sumaParceada=parseInt(suma);

	alert("La suma es: "+sumaParceada);



	
}
function Promedio () 
{
	var precio1;
	var precio1Numerico;
	var precio2;
	var precio2Numerico;
	var precio3;
	var precio3Numerico;
	var promedio;

	precio1=txtIdPrecioUno.value;
	precio1Numerico=parseInt(precio1);
	precio2=txtIdPrecioDos.value;
	precio2Numerico=parseInt(precio2);
	precio3=txtIdPrecioTres.value;
	precio3Numerico=parseInt(precio3);
	promedio=(precio1Numerico+precio2Numerico+precio3Numerico)/3;

	alert("El promedio es: "+promedio);
	
}
function PrecioFinal () 
{
	var precio1;
	var precio1Numerico;
	var precio2;
	var precio2Numerico;
	var precio3;
	var precio3Numerico;
	var suma;
	var IVA;
	var precioFinal

	precio1=txtIdPrecioUno.value;
	precio1Numerico=parseInt(precio1);
	precio2=txtIdPrecioDos.value;
	precio2Numerico=parseInt(precio2);
	precio3=txtIdPrecioTres.value;
	precio3Numerico=parseInt(precio3);
	suma=precio1Numerico+precio2Numerico+precio3Numerico;
	IVA=suma*0.21;
	precioFinal=suma+IVA;


	alert("El precio final es: "+precioFinal);

	
}