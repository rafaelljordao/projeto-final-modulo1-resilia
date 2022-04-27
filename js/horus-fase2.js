function horusFase2() {
    var escolha = prompt("Digite a sua resposta!");
    var c = 0;
    for (var c = 0; c < 2; c++){
        if (escolha == "rio" || escolha == "Rio" || escolha == "RIO"){
            window.location.href="./horus-f2-f3.html";
        } else {
            alert("Resposta errada! Tente novamente");
            escolha = prompt("Digite a sua resposta!");
        }
    }
    if (escolha == "rio" || escolha == "Rio" || escolha == "RIO"){
        window.location.href="./horus-f2-f3.html";
    } else {
        window.location.href="./game-over.html";
    }
}