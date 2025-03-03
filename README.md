# **Commit: Local Storage**

## Objetivo: Guardar el array task del servicio en forma de JSON

- copia este constructor:

```ts
constructor() {
const tasks = localstorage.getItem('tasks');

if (task) {
this.tasks = JSON.parse(tasks);
}
```

- crea un metodo llamado saveTask() {
  localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  y añadelo a los metodos add y remove

### VISUALIZACION

- Abre localhost:4200 en el navegador deberias ver:
  ![complete_button](./htmlOutput.gif)
  deberias poder completar tareas
