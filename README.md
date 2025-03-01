# **Commit: renderizado dinamico **

## Objetivo: Sintetizar el codigo con control de flujo de angular @for @if @else

### Renderizado dínamico

https://angular.dev/api/core/@for

- en app.component.html podemos hacer un bucle para renderizar los <li></li>
  en vez de repitir 6 veces el mismo trozo de codigo
  track necesita identificadores unicos, en nuestro proyecto,nuestro id es perfecto

```ts
@for (user of "users"; track user.id){
<li>
<app-user [user]="user" (select)="onSelectUser($event)"/>
</li>
}
```

- en la clase de AppComponent, cambia la linea de selectedUserId por:

```ts
selectedUserId?: string;
```

para agregar la funcionalidad de que, pueda **o no** estar selecionado

### VISUALIZACION

- Abre localhost:4200 en el navegador deberias ver:
  inspeciona task, y veras que renderiza pero no enseña codigo

### Renderizado Condicional

https://angular.dev/api/core/@if

asi que cambia el ternario por:

```ts
  @if (selectedUser) {
    <app-tasks [name]="selectedUser.name"></app-tasks>
  } @else {
    <p id="fallback">Select User to see their Tasks!</p>
  }
```

### VISUALIZACION

- Abre localhost:4200 en el navegador deberias ver:
  ![dinamic_render](./htmlOutput.png)
  y si seleccionas cualquier user, veras su nombre en vez de el mensaje
