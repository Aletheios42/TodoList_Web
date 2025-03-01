# **Commit: Eventos Personalizados**

Deja el proyecto como en Componente Reutilizable IV, vamos a seguir sin señales

## Objetivo: Enseñar el componente de las tareas cuando se clicke en un user

- en user.componet.ts Recibe id como @Input() y ve a app.component.html y bindea [id]
- en user.componet.ts crea un evento llamado select personalizado con @Output()
- En el metodo onSelectUser() utiliza el metodo emit, para
  emitir el id del usuario clicado por el usuario.
- en app.component crea metodo llamado onSelectShowTask, que enseñe por
  consola, el id del usuario, y bindea el event del compoente user
  en las 6 etiquetas de <app-user> con la variable global
  de comunicacion de eventos (select)="onSelectShowTask($event)"

## VISUALIZACION

- Abre localhost:4200 en el navegador deberias ver:
  ![Output_Eventos](./htmlOutput.png)
  al abrir la consola de desarrollo y clickar en los usuarios deberia salir el id
