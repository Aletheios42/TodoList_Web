# **Commit: Componentes Reutilizables: User_IV**

deja el estado como en el commit USER_III, no vamos
a trabajar con señales

## Objetivo: Enseñar todos los usuarios

en el componente user:

- Limpia la clase de user borra todo, solo deja onSelectUser() y el getter de la imagen
- importa @Input y marca la propiedad avatar, es un string.
  pista: para indicar a angular, que la propiedad va a ser asignada fuera
  del componente usar "!", no hace falta constructor, no obstante, vamos a elegir
  utilizar
- Haz lo propio con la propiedad nombre

sustituye en el html de user, los nuevas formas de llamar a la imagen y al name,
pero olvida uno de los nombres

en app.component, importamos DUMMYUSERS, y lo asignamos a la propiedad users
en el html, extiende la lista a 6 elementos, y bindea la propiedad \[avatar\],
en la etiqueta \<li> \<app-user \[avatar]="user\[0\].avatar" y asi con todos \</li>

a pesar de que en @Input ?, funciona utiliza este formato para tu proyecto:
@Input({ required: true }) avatar!: string; ya que es mas seguro, para comprobarlo
borra [name]="users[2].name" y prueba de las 2 maneras con "?" y con el required y la !

## VISUALIZACION

- Abre localhost:4200 en el navegador deberias ver:
  ![Componentes_Reutilizables](./htmlOutput.png)
