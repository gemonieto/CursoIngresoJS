/*<h2></br>Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
			<br> Tipo validad("arena";"cal";"cemento") 
			<br> Cantidad de bolsas,
	        <br> Precio por bolsa (más de cero ),
	        <br> al terminar la compra el cliente accede a un descuento segun las bolsas en total
	        <br> Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
			<br> Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.	
				<br>a)
				El importe total a pagar , bruto sin descuento y...
				<br>b)
				el importe total a pagar con descuento(solo si corresponde)
				<br>d)
				Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.		
				<br>f)
				El tipo mas caro
*/function mostrar()
{
var tipoBolsa;
var cantidadBolsa;
var precioBolsa;
contadorCompra=0
resouesta=true;

do
{
 
  tipoBolsa=prompt("Que necesita? arena/cal/cemento");
  while(tipoBolsa!="arena"&&tipoBolsa!="cal"&&tipoBolsa!="cemento")
  {
    tipoBolsa=prompt("Ingrese dato valido: arena/cal/cemento");
  }
  cantidadBolsa=prompt("Cantidad bolsas");
  cantidadBolsa=parseInt(cantidadBolsa);
  while(isNaN(cantidadBolsa)==true || cantidadBolsa<0)
  {
    cantidadBolsa=prompt("Ingrese un numero valido");
    cantidadBolsa=parseInt(cantidadBolsa);
  }
  precioBolsa=prompt("Precio por bolsa");
  precioBolsa=parseInt(precioBolsa);
  while(isNaN(precioBolsa)==true || precioBolsa<0)
  {
    precioBolsa=prompt("Ingrese un valor valido");
    precioBolsa=parseInt(precioBolsa);
  }
  respuesta=confirm("desea continuar?");
}while(respuesta==true)

}
