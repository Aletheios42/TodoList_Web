# **Commit: trabajando con type alias**

nota. https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript/52682220#52682220

## Objetivo: Sintetizar el codigo con type alias

para evitar definir el objeto en linea se usa type <nombre del tipo>
type User = {
id: string;
name: string;
avatar: string;
};
añade esto en tu user.component.ts y da el tipo User a user

## VISUALIZACION

- Abre localhost:4200 en el navegador deberias ver:
  ![Tasks_SetUp](./htmlOutput.png)
  cada vez que pulsas en un usuario deberias ver como cambia el nombre
