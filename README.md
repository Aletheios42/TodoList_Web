# **Commit: User_II**

## Objetivo: Mostrar información dínamica en user

importa dummy-user en user
crea una propiedad selectedUser que sea igual azarosamente,
a uno de los usuarios del array importado
pista:

```ts
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
```

Añade en el user.component.html:

- en el span, añade el nombre del usuario seleccionado por string interpolation
- en la imagen , haz property binding a la ruta.
  pista: "'string_literal' + string_var"

haz que la etiqueta de app-user este envuelta con una etiqueta main
crea una lista con el atributo id="users"
y envuelve app-user en el elemento lista

## VISUALIZACION

- Abre localhost:4200 en el navegador deberias ver:
  ![User_II_Layout](./htmlOutput.png)
  cada vez que recargas la pagina deberia aparecer un
  user aleatorio.
