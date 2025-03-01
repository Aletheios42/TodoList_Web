# **Commit: Tasks SetUp **

## Objetivo: Enseñar el componente de las tareas cuando se clicke en un user

en App.component.ts:

- cambia el nombre de onSelectTask por onSelectUser
- crea la propiedad selectedUserId = 'u1'; (para inicializar, relacionado con "!" del find)
- cambia el metodo onSelectTask para que simplemente asigne el id recibido, a la nueva
  propiedad
- añade un nuevo metodo:
  get selectedUser() {
  return this.users.find((user) => this.selectedUserId === user.id)!;
  }
- crea un componente llamado tasks
- añade <app-tasks [name]="selectedUser"> en app.component.html dentro del <main>, abajo del todo
- Construye un componente llamado task Que reciba como Input() una propiedad name
- muestra en tasks.component.html name con string interpolation

## VISUALIZACION

- Abre localhost:4200 en el navegador deberias ver:
  ![Tasks_SetUp](./htmlOutput.png)
  cada vez que pulsas en un usuario deberias ver como cambia el nombre
