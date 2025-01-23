//Esta función se encarga de asignar un texto a un elemento del HTML
function asignarTextoAElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

let listaAmigos = [];

//Esta función se encarga de mostrar los amigos en una lista
function mostrarAmigos()
{
    let texto = "";
    listaAmigos.forEach(amigo => {
        texto += `<li>${amigo}</li>`;
    });
    return texto;
}

//Esta función se encarga de limpiar el campo de texto
function limpiarCampo(){
    let input = document.querySelector('input');
    input.value = '';
}

//Esta función se encarga de agregar un amigo a la lista
function agregarAmigo()
{
    listaAmigos.push(document.getElementById("amigo").value);
    asignarTextoAElemento('#listaAmigos' , mostrarAmigos())
    limpiarCampo();
}

//Esta función se encarga de sortear un amigo
function sortearAmigo(){
    if(listaAmigos.length == 0){
        asignarTextoAElemento('#resultado', 'No hay amigos para sortear');
        return;}
        else{
    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    asignarTextoAElemento('#resultado', 'Tu amigo secreto es ' + amigoSorteado);}
}