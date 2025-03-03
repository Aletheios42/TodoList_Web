# **Commit: Pipelines , servicios y dependency injection**

https://angular.dev/guide/templates/pipes

## Objetivo: Formatea la fecha y crea un servicio

- usa la pipe date en task.component.html,
  recuerda importarla

- crea un servicio

```bash
ng g s tasks/tasks --skip-tests
```

crea una propiedad y 3 metodos en el sevicio:

recuerda limpiar $event en el html y el input de los metodos

- corta el array tasks de tasks.component.ts y pegalo en la clase del servicio
- "getUserTasks(userId:string)" que ejecuta la logica de get selectedUserTasks()
- "addTask(taskdata: NewTaskData, userId: string)" que ejecuta la logica de onAddTask()
- "removeTask(id: string) que ejecuta la logica de onDeletingTask()

- importa el servicio en tasks.component.ts asi:

```ts
constructor(private tasksService: TaskService) {}
```

al poner el tipo, angular sabe qué servicio ha de ser instanciado

ahora ya estamos en posicion de injectar nuestro servicio en new-task.component.ts

```ts
private taskServiece = inject(TaskService);
```

nota: no usamos new, por lo que si es la misma instancia

- en new-task Cambia el metodo onSumbit para que use .addTask() de nuestro servicio
  emite al final el evento close(mirar 2 tareas mas abajo)

```ts
@Input({required: true}) userId: string
```

y invocalo en el selector de task.component.html con property binding

- podemos borrar el evento add, y su binding ya no lo necesitamos con este enfoque
- Vamos a renombrar cancel por close, ya que se seguira encargando de cerrar
  el dialog cuando pulsemos el fondo

### VISUALIZACION

- Abre localhost:4200 en el navegador deberias ver:
  ![Service y pipeline](./htmlOutput.gif)
  fijate como ha cambiado el formato de la fecha
