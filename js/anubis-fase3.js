function anubisFase3() {
    var escolha = prompt("Digite a sua resposta!");
    var c = 0;
    for (var c = 0; c < 2; c++){
        if (escolha == "morte" || escolha == "Morte" || escolha == "MORTE"){
            window.location.href="anubis-fase2.html";
        } else {
            alert("Resposta errada! Tente novamente");
            escolha = prompt("Digite a sua resposta!");
        }
    }
    if (escolha == "morte" || escolha == "Morte" || escolha == "MORTE"){
        window.location.href="anubis-final.html";
    } else {
        window.location.href="game-over.html";
    }
}