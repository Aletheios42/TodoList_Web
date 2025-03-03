# **Commit: New-Task I: Añadir Tareas**

## Objetivo: Hacer funcional el botton add task desplegando un formulario New-Task

- Crea un nuevo componente New-Task dentro de Task

```ts
ng g c task/new-task --skip-tests
```

y copia el html y el css en el nuevo componente e importalo a tasks

En el componente Task:

- Añade un evento click al boton Add Task en tasks.component.html
- Crea una nueva propiedad isAddingTask y asignalo a false
- Añade un nuevo metodo onStartAddTask() que asigne isAddingTask a true
- Utiliza el boleano para renderizar el nuevo componente o el resto del template

### VISUALIZACION

- Abre localhost:4200 en el navegador deberias ver:
  ![Formulario de new-task](./htmlOutput.png)
  al hacer click en el boton addtask deberás verlo así,
  pero para salir del formulario tendrás que recargar la página
