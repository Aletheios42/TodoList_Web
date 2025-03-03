# **Commit: New-Task IV: señales y 2way-binding**

## Objetivo: trasnformar las propiedades strings a señales

- Borra el parrafo duplicado

- trasforma enteredTitle en una señal

```ts
enteredTitile = signal("");
```

- Fijate que no hace falta leer la señal

```ts
/*Seria un error, no hay que leer la señal,
simplemente dejarlo sin partentesis*/
[ngModel] = "enteredTitile()";
```

- Añade las señales: enteredSummary y enteredDate y bindealas
  con [(ngModel)] en los inputs de sus parrafos correspondientes del html

### VISUALIZACION

- Abre localhost:4200 en el navegador deberias ver:
  ![Display](./htmlOutput.png)
