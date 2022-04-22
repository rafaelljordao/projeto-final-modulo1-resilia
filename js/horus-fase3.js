function horusFase3() {
    var escolha = prompt("Digite a sua resposta!");
    var c = 0;
    for (var c = 0; c < 2; c++){
        if (escolha == "silencio" || escolha == "Silencio" || escolha == "SILENCIO" || escolha == "silêncio" || escolha == "Silêncio" || escolha == "SILÊNCIO"){
            window.location.href="horus-final.html";
        } else {
            alert("Resposta errada! Tente novamente");
            escolha = prompt("Digite a sua resposta!");
        }
    }
    if (escolha == "silencio" || escolha == "Silencio" || escolha == "SILENCIO" || escolha == "silêncio" || escolha == "Silêncio" || escolha == "SILÊNCIO"){
        window.location.href="horus-final.html";
    } else {
        window.location.href="game-over.html";
    }
}