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
c) El promedio de nota por sexo
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
    var flagPrimerNotaNoMasculino=true;
    var mayorNotaNoMasculino;
    var nombreMayorNotaNoMasculino;
    var flagPrimerLibre=true;
    var nombreMasJovenLibre;
    var edadMasJovenLibre;
    var contadorMasculino=0;
    var acumuladorNotaMasculino=0;
    var contadorFemenino=0;
    var acumuladorNotaFemenino=0;
    var contadorNoBinario=0;
    var acumuladorNotaNoBinario=0;
    var promedioMasculino;
    var promedioFemenino;
    var promedioNoBinario;

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
      
      switch (sexo)
      {
        case "masculino":
          contadorMasculino=contadorMasculino+1
          acumuladorNotaMasculino=acumuladorNotaMasculino+nota;
          break;
        case "femenino":
          contadorFemenino++;
          acumuladorNotaFemenino=acumuladorNotaFemenino+nota;
          break;
        case "no binario":
          contadorNoBinario++;
          acumuladorNotaNoBinario=acumuladorNotaNoBinario+nota;
          break;
      }
      
      if(sexo!="masculino")
      {
        if(flagPrimerNotaNoMasculino==true)
        {
          mayorNotaNoMasculino=notaPromedio;
          nombreMayorNotaNoMasculino=nombre;
          flagPrimerNotaNoMasculino=false;
        }
      else if (nota>mayorNotaNoMasculino)
        {
          mayorNotaNoMasculino=notaPromedio;
          nombreMayorNotaNoMasculino=nombre;
        }

      if (tipoCursada=="libre")
      {
        if (flagPrimerLibre==true)
        {
          edadMasJovenLibre=edad;
          nombreMasJovenLibre=nombre;
          banderaPrimerLibre=false;
        }
        else if (edad<edadMasJovenLibre)
        {
            nombreMasJovenLibre=nombre;
        }
      }
    
    respuesta=confirm("desea continuar?");
    
    }while(respuesta==true);


    promedioMasculino=acumuladorNotaMasculino/contadorMasculino;
    promedioFemenino=acumuladorNotaFemenino/contadorFemenino;
    promedioNoBinario=acumuladorNotaNoBinario/contadorNoBinario;

    document.writeln("a) El nombre del mejor promedio que no sea masculino" + mayorNotaNoMasculino);
    document.writeln("b) El nombre del mas joven de los alumnos entre los que la dan libre" + nombreMasJovenLibre);
    document.writeln("c) El promedio de nota por sexo masculino"+promedioMasculino+" femenino " + promedioFemenino + "no binario" + promedioNoBinario);

}
