# **Commit: Modelos y Css binding**

## Objetivo: migrar interfazces a model, y css binding

- corta la interfaz user, y pegala een un nuevo archivo llamado,
  user.model.ts recuerda poner export a la interfaz, importala en user.component.ts
- haz lo mismo con la interfaz Task
  pista: puedes añadir "type" al import

- añade un propiedad Input en user.component.ts, de tipo booleano llamado "selected"
- bindeala en app.component.html [selected]="user.id == selectedUserId"

- añade este atributo al boton de user.component.html
  [class.active]="selected"

- añade a <app-user/> el binding de selected app.component.html
  [selected]="user.id == selectedUserId"

### VISUALIZACION

- Abre localhost:4200 en el navegador deberias ver:
  ![hover activo](./htmlOutput.png)
  deberias ver como se queda seleccionado un usuario al pinchar
