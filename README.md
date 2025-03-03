# **Commit: New-Task V: Añadir las tareas**

cambia "userId?" por una "!" para evitar problemas de tipos

## Objetivo: Exportar los datos del formulario a las tareas para renderizado automatico

- Exporta una interfaz "NewTaskData" que contenga los 3 strings
  en un nuevo archivo new-task.models.ts

- Emite un nuevo evento, crea un evento "add" con el decorador correspondiente
  Crea un metodo onSubmit() que emita el objeto y bindealo al formulario asi

  ```ts
    <form (ngSubmit)="onSubmit()">
  ```

  https://angular.dev/api/forms/NgForm

- En tasks.component bindea el evento "add" recuerda $event a un nuevo metodo
  "onAddTask(taskData: NewTaskData)" que use .push() para añadir la taskData al array
  y asigne isAddingTask a false
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  nota: mirar tambien el metodo .unshift
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

### VISUALIZACION

- Abre localhost:4200 en el navegador deberias ver:
  ![NuevaTarea](./htmlOutput.gif)
