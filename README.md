# **Commit: Task IV: Eliminar tareas completadas**

## Objetivo: la funcionalidad al boton complete para quitar una tarea

- Añade un evento onclick en el boton de task.component.html

- Añade un decorador de salida para emitirle a tasks el "id" de una tarea que
  mas adelante borraremos del array tasks[] en tasks.component.ts

- Añade un metodo onCompleteTask() en la clase que emita el id de la tarea
  y bindealo al evento onclick previamente creado

- Crea un metodo onDeleting(id: string) que reasingne tasks a una version de si mismo
  con el metodo filter, para discriminar el id recibido y usa event biding en
  tasks.component.html para capturar el id con "$event"

### VISUALIZACION

- Abre localhost:4200 en el navegador deberias ver:
  ![complete boton](./htmlOutput.png)
  Al pulsar complete deberías ver como desaparece la tarea
