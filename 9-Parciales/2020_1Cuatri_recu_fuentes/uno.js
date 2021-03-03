/*</br>	Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio, <br>
			de cada una debo obtener los siguientes datos: <br>
			el tipo de producto (validar "barbijo" , "jabón" o "alcohol") , <br>
			el precio (validar entre 100 y 300),<br>
			la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), <br>
			 la Marca y el fabricante. <br>
			Se debe Informar al usuario lo siguiente:<br>

			a) Del más caro de los jabones, la cantidad de unidades y el fabricante<br>
			b) Del tipo de producto con más unidades en total de la compra, el promedio por compra <br>
			c) Cuántas unidades de Barbijos se compraron en total <br><br>
		</h2>
*/
function mostrar()
{
	var tipoProducto;
	var precioProducto;
	var cantidadUnidadesProducto;
	var marcaProducto;
	var fabricanteProducto;
	var maximoJabon;
	var contador;
	var contadorJabon;

	for(contador=0;contador<=5;contador=contador+1)
	{
		tipoProducto=prompt("Tipo de Producto: barbijo, jabon o alcohol");
		while(tipoProducto!="barbijo" && tipoProducto!="jabon" && tipoProducto!="alcohol")
		{
			tipoProducto=prompt("Ingrese un producto valido");
		}
		precioProducto=prompt("Precio de Producto entre 100 y 300");
		precioProducto=parseInt(precioProducto);
		while(precioProducto<100 || precioProducto>300)
		{
			precioProducto=prompt("Ingrese un valor valido");
			precioProducto=parseInt(precioProducto);
		}
		cantidadUnidadesProducto=prompt("Cantidad de Unidades (máximo 1000)");
		cantidadUnidadesProducto=parseInt(cantidadUnidadesProducto);
		while(cantidadUnidadesProducto<0||cantidadUnidadesProducto>1000)
		{
			cantidadUnidadesProducto=prompt("Ingrese cantidad valida");
			cantidadUnidadesProducto=parseInt(cantidadUnidadesProducto);
		}
		marcaProducto=prompt("Ingrese Marca");
		fabricanteProducto=prompt("Ingrese fabricante");
	}
		if(tipoProducto="jabon")
		{
		contadorJabon++;
		if(contadorJabon==1)
		{
			maximoJabon=precioProducto;
		}
		else if(precioProducto>maximoJabon)
		{
			maximoJabon=precioProducto;
		}
		}
		if()



	}
	
	
}

