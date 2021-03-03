/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{
	var tipoProducto;
	var precioProducto;
	var cantidadUnidadesProducto;
	var marcaProducto;
	var fabricanteProducto;
	var contador;
	var alcoholMasBarato;
	var fabricanteAlcoholMasBarato;
	var contadorAlcohol=0;
	var contadorJabon=0;
	var tipoProductoMasUnidades;

	for (contador=0;contador<5;contador=contador+1)
	{
		tipoProducto=prompt("Tipo Producto? barbijo/jabon/alcohol: ");
		while(tipoProducto!="barbijo"&&tipoProducto!="jabon"&&tipoProducto!="alcohol")
		{
			tipoProducto=prompt("Ingrese producto valido: barbijo/jabon/alcohol: ");
		}

		precioProducto=prompt("Precio producto (entre 100 y 300): ");
		while(isNaN(precioProducto)==true || precioProducto<100 || precioProducto>300)
		{
			precioProducto=prompt("Ingrese un precio valido entre 100 y 300: ");
		}

		cantidadUnidadesProducto=prompt("Ingrese cantidad entre 1 y 1000: ")
		while(isNaN(cantidadUnidadesProducto)==true  || cantidadUnidadesProducto<0 || cantidadUnidadesProducto>1000)
		{
			cantidadUnidadesProducto=prompt("Ingrese cantidad valida entre 1 y 1000: ");
		}

		marcaProducto=prompt("Ingrese marca producto");
		fabricanteProducto=prompt("Ingrese fabricante producto");

		switch (tipoProducto)
		{
			case "alcohol":
			{
				if(contadorAlcohol==0)
				{
					alcoholMasBarato=precioProducto;
				}
				else if (precioProducto<contadorAlcohol)
				{
					alcoholMasBarato=precioProducto;
				}
				contadorAlcohol=contadorAlcohol+1;
				fabricanteAlcoholMasBarato=fabricanteProducto;

			break;
			}
			case"jabon":
			{
				contadorJabon=contadorJabon+1;
			}
			break;
		}

		if(tipoProductoMasUnidades==0)
		{
			tipoProductoMasUnidades=tipoProducto;
		}
		else if(tipoProducto>tipoProductoMasUnidades)
		{
			tipoProductoMasUnidades=tipoProducto;
		}
			



	}
}
