# **Commit: Componentes Reutilizables: Signals II**

echar un ojo a: https://angular.dev/reference/migrations/signal-inputs

## Objetivo: Enseñar todos los usuarios con señales

en el componente user

- trasnforma @Input() en input()
- trasforma el getter de la imagen en un computed(() => {})
- cambia el html para poder leer el string que guarda la señal

lamentablemente esta forma de comunicaicon no permite usar el metodo .set()
ya que estas señales son readonly

## VISUALIZACION

- Abre localhost:4200 en el navegador deberias ver:
  ![Componentes_Reutilizables_Señales](./htmlOutput.png)
