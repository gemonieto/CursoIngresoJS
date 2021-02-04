function mostrar()
{
var precio;
var precioParceado;
var porcentaje;
var porcentajeParceado;
var descuento;
var resultado;

precio=prompt("precio");
precioParceado=parseInt(precio);
porcentaje=prompt("porcentaje");
porcentajeParceado=parseInt(porcentaje);
descuento=porcentajeParceado/100;
resultado=precioParceado-(precioParceado*descuento);

elPrecioFinal.value=("el precio final es: "+resultado);

}
