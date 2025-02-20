// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    let amigos = [];

    window.agregarAmigo = function () {
        const nombre = input.value.trim();
        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
    };

    function actualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach(nombre => {
            const li = document.createElement("li");
            li.textContent = nombre;
            listaAmigos.appendChild(li);
        });
    }

    window.sortearAmigo = function () {
        if (amigos.length === 0) {
            alert("La lista está vacía. Agrega nombres antes de sortear.");
            return;
        }
        const indice = Math.floor(Math.random() * amigos.length);
        resultado.innerHTML = `<li>El amigo secreto es: ${amigos[indice]}</li>`;
    };
});
