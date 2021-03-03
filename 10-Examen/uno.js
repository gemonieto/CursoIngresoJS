/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos
*/
function mostrar()
{
	var nombreProducto;
	var tipoProducto;
	var precioProducto;
	var cantidadProducto;
	var tipoInflamableProducto;
	var marcaProducto;
	var contador=0;
	var contadorAlcohol=0;
	var acumuladorAlcohol=0;
	var promedioAlcohol;
	var contadorIAC=0;
	var acumuladorIAC=0;
	var promedioIAC;
	var contadorQUAT=0;
	var acumuladorQUAT=0;
	var promedioQUAT;
	var contadorIgnifugo=0;
	var contadorCombustible=0;
	var contadorExplosivo=0;
	var InflamableMasCantidadProducto;
	var unidadesIACmenosDoscientosCompradas;
	var precioMasCaroProducto;
	var marcaMasCaraProducto;
	var tipoMasCaroProducto;


	for (contador=0; contador<5; contador=contador+1)
	{
		nombreProducto=prompt("Ingrese nombre producto");
		while(isNaN(nombreProducto)==false)
		{
			nombreProducto=prompt("Ingrese nombre valido producto");
		}

		tipoProducto=prompt("Ingrese alcohol, IAC o QUAT");
		while(tipoProducto!="alcohol"&&tipoProducto!="IAC"&&tipoProducto!="QUAT")
		{
			tipoProducto=prompt("Ingrese alcohol, IAC o QUAT tal cual escrito en este cuadro");
		}

		precioProducto=prompt("Ingrese precio producto entre 100 y 300");
		precioProducto=parseInt(precioProducto);
		while(isNaN(precioProducto)==true || precioProducto<100 || precioProducto>300)
		{
			precioProducto=parseInt("Ingrese precio producto valido entre 100 y 300");
			precioProducto=parseInt(precioProducto);
		}

		cantidadProducto=prompt("Ingrese cantidad de productos");
		while(isNaN(cantidadProducto)==true || cantidadProducto<1 || cantidadProducto>1000)
		{
			cantidadProducto=parseInt("Ingrese cantidad productos validas entre 1 y 1000");
			cantidadProducto=parseInt(cantidadProducto);
		}

		tipoInflamableProducto=prompt("Ingrese tipo de inflamable: (ignifugo, combustible, explosivo)");
		while(tipoInflamableProducto!="ignifugo"&&tipoInflamableProducto!="combustible"&&tipoInflamableProducto!="QUAT")
		{
			tipoInflamableProducto=prompt("Ingrese tipo de inflamable: (ignífugo, combustible, explosivo) tal cual escrito en este cuadro");
		}

		marcaProducto=prompt("Ingrese marca");
		while(isNaN(marcaProducto)==false)
		{
			marcaProducto=prompt("Ingrese marca valida");
		}

		switch(tipoProducto)
		{
			case "alcohol":
				contadorAlcohol=contadorAlcohol+1;
				acumuladorAlcohol=acumuladorAlcohol+cantidadProducto;
				break;
			
			case "IAC":
				contadorIAC=contadorIAC+1;
				acumuladorIAC=acumuladorIAC+cantidadProducto;
				if (precioProducto <= 200)
				{
					unidadesIACmenosDoscientosCompradas=unidadesIACmenosDoscientosCompradas+1;
				}
				break;
			
			case "QUAT":
				contadorQUAT=contadorQUAT+1;
				acumuladorQUAT=acumuladorQUAT+cantidadProducto;
				break;
		}

		switch(tipoInflamableProducto)
		{
			case "ignifugo":
				contadorIgnifugo=contadorIgnifugo+1;
				break;
			
			case "combustible":
				contadorCombustible=contadorCombustible+1;
				break;

			case "explosivo":
				contadorExplosivo=contadorExplosivo+1;
		}
	
		if (contador == 0)
		{
			marcaMasCaraProducto = marcaProducto;
			tipoMasCaroProducto = tipoProducto;
		}
		else if (precioProducto > precioMasCaroProducto)
		{
			marcaMasCaraProducto = marcaProducto;
			tipoMasCaroProducto = tipoProducto;
		}
	
	}

	promedioAlcohol=acumuladorAlcohol/contadorAlcohol;
	promedioIAC=acumuladorIAC/contadorIAC;
	promedioQUAT=acumuladorQUAT/contadorQUAT

	if(contadorIgnifugo>contadorCombustible&&contadorIgnifugo>contadorExplosivo)
	{
		InflamableMasCantidadProducto="Ignifugo";
	}
	if(contadorCombustible>contadorIgnifugo&&contadorCombustible>contadorExplosivo)
	{
		InflamableMasCantidadProducto="Combustible";
	}
	if(contadorExplosivo>contadorIgnifugo&&contadorExplosivo>contadorIgnifugo)
	{
		InflamableMasCantidadProducto="Explosivo";
	}





	document.writeln("a) El promedio de cantidad por tipo de producto -Alcohol: " + promedioAlcohol + " - IAC: " + promedioIAC + " - QUAT: " + promedioQUAT);
	document.writeln("b) El tipo de inflamable con más cantidad de unidades en total de la compra es: " + InflamableMasCantidadProducto);
	document.writeln("c) Unidades de IAC con precios menos a 200 (inclusive) se compraron en total: "+ unidadesIACmenosDoscientosCompradas);
	document.writeln("d) la marca y tipo del más caro de los productos:" + marcaMasCaraProducto + " y " + tipoMasCaroProducto);
	
}