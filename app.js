
let listaOficial = [];

function agregarAmigo() {
    let nombreAmigoSecreto = document.getElementById('amigo').value.trim(); //Obtener el nombre del amigo a agregar
    if (nombreAmigoSecreto === '') { //Verificar si el input esta vacio
        alert ("Ingrese un nombre valido");
        return;
    }
    if (listaOficial.includes(nombreAmigoSecreto)) { //Verificar si el amigo ya se encuentra en la lista
        alert ("El amigo ya se encuentra en la lista");
        return;
    }
    listaOficial.push(nombreAmigoSecreto) //Agregar el nuevo amigo a la lista
    actualizarListaAmigos();
    document.getElementById('amigo').value = ''; //Limpiar caja
}

function actualizarListaAmigos() {
    let listaOficialElement = document.getElementById("listaAmigos");
    listaOficialElement.innerHTML = '';
    for (let i = 0; i < listaOficial.length; i++) {
        listaOficialElement.innerHTML += `<li>${listaOficial[i]}</li>`;
    }
}

function sortearAmigo() {
    if (listaOficial.length === 0){
        alert ("No hay amigos en la lista");
        return;}
    else if (listaOficial.length < 3){
        alert ("El minimo para sortear son 3 amigos")
        return;}
    else {
        let sorteo = Math.floor(Math.random()*listaOficial.length)
        let amigoSorteado = listaOficial[sorteo]
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `Tu amigo secreto es ${amigoSorteado}`
    }
}
