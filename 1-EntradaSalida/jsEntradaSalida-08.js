/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numero1;
	var numero1Parceado;
	var numero2;
	var numero2Parceado;
	var resultado;

	numero1=txtIdNumeroDividendo.value;
	numero1Parceado=parseInt(numero1);
	numero2=txtIdNumeroDivisor.value;
	numero2Parceado=parseInt(numero2);
	resultado=numero1Parceado%numero2Parceado;

	alert("El resto es: "+resultado);
}
