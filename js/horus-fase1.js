function horusFase1() {
    var escolha = prompt("Digite a sua resposta!");
    var c = 0;
    for (var c = 0; c < 2; c++){
        if (escolha == "sombra" || escolha == "Sombra" || escolha == "SOMBRA"){
            window.location.href="horus-fase2.html";
        } else {
            alert("Resposta errada! Tente novamente");
            escolha = prompt("Digite a sua resposta!");
        }
    }
    if (escolha == "sombra" || escolha == "Sombra" || escolha == "SOMBRA"){
        window.location.href="horus-fase2.html";
    } else {
        window.location.href="game-over.html";
    }
}