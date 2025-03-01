# **Commit: trabajando con objetos**

## Objetivo: Sintetizar el codigo

- modifica los inputs de user.component.ts por:
  @Input({ required: true }) user!: {
  id: string;
  name: string;
  avatar: string;
  };
  y ajusta, los metodos de la clase, para acceder correctamente avatar, id y name(html)
- en app.component, modifica los binding, ahora solo <app-user[user]="users[i]"> en los 6

## VISUALIZACION

- Abre localhost:4200 en el navegador deberias ver:
  ![Tasks_SetUp](./htmlOutput.png)
  cada vez que pulsas en un usuario deberias ver como cambia el nombre
