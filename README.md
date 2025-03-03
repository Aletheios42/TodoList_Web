# **Commit: New-Task II: Boton Cancelar**

## Objetivo: Hacer funcional el botton cancel y el background

- Añade un metodo onCancelAddTask() que setee
  isAddingTask a false

- Añade eventos on click en new-task, en el botton cancel y
  en en div de clase backdrop

- En new-task.component.ts crea un evento<void> de salida llamado cancel
  y metodo onCancel() que lo emita

- Bindea el evento al metodo "onCancelAddTask"

### VISUALIZACION

- Abre localhost:4200 en el navegador deberias ver:
  ![El Fondo y el boton cancel, son dinamicos](./htmlOutput.png)
  Debería verse igual que antes pero cuando pulsas el boton cancel
  del formulario o pinchas en la pantalla fuera del formulario,
  este se debería cerrar
