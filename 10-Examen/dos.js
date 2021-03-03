/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
d) El promedio de nota por sexo
f) La edad y nombre del que cursa mas materias que no sean en forma remota
*/

function mostrar()
{
    var nombre;
    var tipoCursada;
    var cantidadMaterias;
    var sexo;
    var notaPromedio;
    var edad;
    var respuesta=true;
    

    do
    {
      nombre=prompt("Ingrese nombre");
      while(isNaN(nombre)==false)
      {
        nombre=prompt("Ingrese nombre valido");
      }

      tipoCursada=prompt("Ingrese tipo de cursada libre, presencial, remota");
      while(tipoCursada!="libre"&&tipoCursada!="presencial"&&tipoCursada!="remota")
      {
        tipoCursada=prompt("Ingrese tipo de cursada valido: (libre, presencial, remota)");
      }

      cantidadMaterias=prompt("Ingrese cantidad de materias entre 0 y 8");
      while(isNaN(cantidadMaterias)==true || cantidadMaterias<0 || cantidadMaterias>8)
      {
        cantidadMaterias=prompt("Ingrese cantidad valida de materias entre 0 y 8");
      }

      sexo=prompt("Indique sexo ( femenino , masculino , no binario) ");
      while(sexo!="femenino"&&sexo!="masculino"&&sexo!="no binario")
      {
        sexo=prompt("Indique sexo valido ( femenino , masculino , no binario) ");
      }

      notaPromedio=prompt("Ingrese nota promedio entre 0 y 10");
      while(isNaN(notaPromedio)==true || notaPromedio<0 || notaPromedio>10)
      {
        notaPromedio=prompt("Ingrese nota promedio entre 0 y 10");
      }
      
      edad=prompt("Ingrese edad");
      while(isNaN(edad)==true || edad<1 || edad>99)
      {
        edad=prompt("Ingrese edad valida");
      }
      
      respuesta=confirm("desea continuar?");
    
    }while(respuesta==true);

    




}
