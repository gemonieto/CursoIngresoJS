//Germán Nieto
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
function CalcularPrecio () 
{
 	var cantidadLamparitas;
    var descuento;
    var precioFinal;
    var precioUnitarioLampara = 35;
    var marcaLampara;
    var descuentoFinal;
    var importeTotal;

    cantidadLamparitas = txtIdCantidad.value;
    cantidadLamparitas = parseInt(cantidadLamparitas);

    marcaLampara = Marca.value;

    if(cantidadLamparitas>5)
    {
        //Mayor 5
        //aplicar descuento del 50%.3
        descuento = 50;
    }
    else
    {
        //Menor o = 5
        //Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
        if(cantidadLamparitas == 5)
        {
            if(marcaLampara == "ArgentinaLuz")
            {
                descuento = 40;
            }
            else
            {
               descuento = 30;
            }
        }
        else
        {
            if(cantidadLamparitas==4)
            {
                if(marcaLampara=="ArgentinaLuz" || marcaLampara == "FelipeLampara")
                {
                    descuento = 25;
                }
                else
                {
                    descuento = 20;
                }
            }
            else
            {
                if(cantidadLamparitas==3)
                {
                    
                    if(marcaLampara=="ArgentinaLuz")
                    {
                        descuento = 15;
                    }
                    else if(marcaLampara=="FelipeLampara")
                    {
                        descuento = 10;
                    }
                    else
                    {
                        descuento = 5;
                    }
                }
                else
                {
                    descuento = 0;
                }
     
            }
        }
    }
    precioFinal = cantidadLamparitas * precioUnitarioLampara;
    descuentoFinal = precioFinal * descuento / 100;
    importeTotal = precioFinal - descuentoFinal;

    if(importeTotal > 120)
    {
        alert()
    }
    txtIdprecioDescuento.value = importeTotal;
}