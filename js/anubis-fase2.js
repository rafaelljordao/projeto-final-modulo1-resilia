function anubisFase2() {
    var escolha = prompt("Digite a sua resposta!");
    var c = 0;
    for (var c = 0; c < 2; c++){
        if (escolha == "tempo" || escolha == "TEMPO" || escolha == "Tempo"){
            window.location.href="anubis-f2-f3.html";
        } else {
            alert("Resposta errada! Tente novamente");
            escolha = prompt("Digite a sua resposta!");
        }
    }
    if (escolha == "tempo" || escolha == "TEMPO" || escolha == "Tempo"){
        window.location.href="anubis-f2-f3.html";
    } else {
        window.location.href="game-over.html";
    }
}