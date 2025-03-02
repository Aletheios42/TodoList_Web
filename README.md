# **Commit: Task III: Mostrar data**

## Objetivo: Conectar los datos del array task con el componente task

en task.component.ts

- define una interfaz Task.
  interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
  }
- recibe task: Task con @Input() y bindealo en el html de tasks, {required: true}
- haz string interpolation en el template html de task para enseñar:
  task.title, task.summary, task.dueDate

### VISUALIZACION

- Abre localhost:4200 en el navegador deberias ver:
  ![Tareas por usuario](./htmlOutput.png)
  Deberias ver que los usuarios tienen sus tareas personalizadas asociadas
