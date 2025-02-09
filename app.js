let amigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function exibirNomeNaLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    if (amigos.length === 0) {
        ul.innerHTML = "<li>Nenhum amigo na lista.</li>";
    } else {
        for (let i = 0; i < amigos.length; i++) {
            let li = document.createElement("li");
            li.textContent = amigos[i];
            ul.appendChild(li);
        }
    }
}

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();

    if (nome !== "") {
        amigos.push(nome);
        document.getElementById("amigo").value = "";
        exibirNomeNaLista();
    } else {
        alert("Por favor, insira um nome.");
    }

}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        resultado.innerHTML = "<li>Não há amigos para sortear.</li>";
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    resultado.innerHTML = `<li>Amigo Sorteado foi: <strong>${amigoSorteado}</strong></li>`;

    amigos = [];
    exibirNomeNaLista();
}