# **Commit: Signlas I**

## Objetivo: Cambiar el estado a traves de señales

echale un ojo: https://angular.dev/guide/signals

- Importa la clase signals,
- Trasforma la propiedad selectedUser en una señal
- En el metodo onSelecUser() utiliza set, para asignar el nuevo valor aleatorio
- el metodo imagePath, sera una funcion computed para actualizar la imagen
  pista: imagePath = computed(() => 'assest/users/' + this.selectedUser().avatar);
- Recuerda, selectedUser ahota es una señal para leerla como un string usa "()"

El resto del proyecto no se hará con señales asi que para el siguiente commit,
no se tenfra encuenta esta nueva actualizacion.

El alumno deberá volver a dejar el proyecto como esta en el commit User_III

## VISUALIZACION

- Abre localhost:4200 en el navegador deberias ver:
  ![Signals_I](./htmlOutput.png)
  cada vez que clickas en el usuario deberia cambiar aleatoriamente
