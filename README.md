# Amigo Secreto

Este es un sistema simple para organizar un juego de "Amigo Secreto". Permite a los usuarios agregar nombres de amigos y sortear un amigo secreto al azar.

## Estructura del Proyecto

. ├── app.js ├── assets/ │ ├── amigo-secreto.png │ ├── play_circle_outline.png ├── index.html └── style.css


- `app.js`: Contiene la lógica de la aplicación en JavaScript.
- `assets/`: Carpeta que contiene las imágenes utilizadas en el proyecto.
- `index.html`: Archivo HTML principal que estructura la página web.
- `style.css`: Archivo CSS que define los estilos de la página.

## Funcionalidades

### Agregar Amigo

Permite agregar nombres de amigos a una lista.

```javascript
function agregarAmigo() {
    listaAmigos.push(document.getElementById("amigo").value);
    asignarTextoAElemento('#listaAmigos', mostrarAmigos());
    limpiarCampo();
}

Mostrar Amigos
Muestra los nombres de los amigos agregados en una lista.

function mostrarAmigos() {
    let texto = "";
    listaAmigos.forEach(amigo => {
        texto += `<li>${amigo}</li>`;
    });
    return texto;
}

Sortear Amigo
Sortea un amigo secreto al azar de la lista de amigos.

function sortearAmigo() {
    if (listaAmigos.length == 0) {
        asignarTextoAElemento('#resultado', 'No hay amigos para sortear');
        return;
    } else {
        let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        asignarTextoAElemento('#resultado', 'Tu amigo secreto es ' + amigoSorteado);
    }
}

Cómo Usar
Clona el repositorio.
Abre index.html en tu navegador.
Agrega nombres de amigos en el campo de texto y haz clic en "Añadir".
Una vez que hayas agregado todos los nombres, haz clic en "Sortear amigo" para seleccionar un amigo secreto al azar.


Créditos:
Autor: [Victor Escobar]
Email: [vjve15@gmail.com]

Licencia:
Este proyecto está bajo la Licencia MIT.