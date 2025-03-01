# **Commit: Mejorando el typescript**

## Objetivo: Mejorar detalles en el codigo

- añade el tipo al evento @Output() select = new EventEmitter<string>();
- Quita "!" del find permitiendo que de valores undefined,
  pero soportando no encontrar usuario. (flexibilidad para futuro update)
- cambia en name! de tasks por name?, para aceptar este comportamiento del find
- cambia el [name]="selectedUser ? selectedUser.name : "" "
  ya que name? tiene 2 posibles tipos string o undefined,
  el ternario comprueba y selecciona la opcion adecuada

  nota "?" es quivaliten a pone ": string | undefined" en el tipo union

## VISUALIZACION

- Abre localhost:4200 en el navegador deberias ver:
  ![Tasks_SetUp](./htmlOutput.png)
  cada vez que pulsas en un usuario deberias ver como cambia el nombre
