/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo1;
var largoNumerico1;
var ancho1;
var anchoNumerico1;
var rectangulo;

largo1=txtIdLargo.value;
largoNumerico1=parseInt(largo1);
ancho1=txtIdAncho.value;
anchoNumerico1=parseInt(ancho1);
rectangulo=largoNumerico1*2*3+anchoNumerico1*2*3;

alert("Rectangulo de alambre: "+rectangulo);

}
function Circulo () 
{
var radio;
var radioNumerico;
var pi=3.1415;
var piNumerico;
var alambreCirculo;

radio=txtIdRadio.value;
radioNumerico=parseInt(radio);
alambreCirculo=(2*piNumerico*radioNumerico)*3;

alert("Circulo de alambre: "+circulo);
}
function Materiales () 
{
var largo2;
var largoNumerico2;
var ancho2;
var anchoNumerico2;
var area2;
var areaNumerico2;
var cemento;
var cal;

largo2=txtIdLargo.value;
largoNumerico2=parseInt(largo2);
ancho2=txtIdAncho.value;
anchoNumerico2=parseInt(ancho2);
area2=largoNumerico2*anchoNumerico2;
areaNumerico2=parseInt(area2);
cemento=areaNumerico2*2;
cal=areaNumerico2*3;

alert("Los materiales que necesita son: "+cemento+" bolsas de cemento y "+cal+" bolsas de cal.");


}