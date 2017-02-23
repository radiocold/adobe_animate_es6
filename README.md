# Adobe Animate + JavaScript ES6

La explicación está en el video:

https://youtu.be/cUcgVOnEuhk

El proyecto es en resumen la utilización de webpack y los archivos que genera Adobe Animate , webpack es usado para empaquetar y transpilar el código Javascript ES6 a Javascript ES5 , Adobe Animate es usado para generar las animaciones y recursos gráficos.

Requisito : Tener instalado NodeJS

Para poder iniciarlo localmente , debes descargar todo el proyecto y en la carpeta ejecutar el comando:

<code>npm install</code>

Con ello instalará todos los utilizarios necesarios para el proyecto, internamente leerá el archivo package.json.

Luego debes escribir en la consola:

<code>webpack</code>

Con ello generará el archivo "bundle.js" dentro de la carpeta "deploy".

Para visualizarlo en el browser te recomiendo usar el programa Brackets , ubicar el archivo "deploy/index.html" y hacer click en el botón "live".



