/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var numero1;
var numero2;

numero1=txtIdNumeroUno.value;
numero1=parseInt(numero1);
numero2=txtIdNumeroDos.value;
numero2=parseInt(numero2);

function sumar()

{	
suma=numero1+numero2;

alert("la suma es: "+suma)
}

function restar()
{
resta=numero1-numero2;

alert("la resta es: "+resta)
}

function multiplicar()
{ 
multiplicacion=numero1*numero2	

alert("la multiplicacion es: "+multiplicacion)
}

function dividir()
{
division=numero1/numero2;	

alert("la division es: "+division)
}