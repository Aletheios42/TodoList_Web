# **Commit: renderizado dinamico deprecated **

## Objetivo: Sintetizar el codigo con control de flujo de angular ngFor ngIf ngElse

https://v17.angular.io/api/common/NgFor
https://v17.angular.io/api/common/NgIf

### Renderizado dínamico y condicional

importa en app.component.ts NgFor, NgIf
sustituye @For @If @else por esta nomeclatura antigua
si selectedUser.name te da problemas "!" es tu amigo

### VISUALIZACION

- Abre localhost:4200 en el navegador deberias ver:
  ![dinamic_render](./htmlOutput.png)
  deberias verlo exactamente igual que antes

### Fallback

dejalo todo como antes, con el control de flujo moderno "@"
