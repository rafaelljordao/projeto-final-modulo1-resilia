function escolherPersonagem() {
    var escolha = prompt("Digite o número correspondente à sua escolha!");
    while (escolha != 1 && escolha != 2 && escolha != 3) {
        alert("Escolha inválida! Escolha 1, 2 ou 3!");
        escolha = prompt("Digite o número correspondente à sua escolha!");
    }
    if (escolha == 3){
        window.location.href="./anubis-index-f1.html";
    } else if (escolha == 2) {
        window.location.href="./bastet-index-f1.html";
    } else {
        window.location.href="./horus-index-f1.html";
    }
}