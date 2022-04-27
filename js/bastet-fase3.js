function bastetFase3() {
    var escolha = prompt("Digite a sua resposta!");
    var c = 0;
    for (var c = 0; c < 2; c++){
        if (escolha == "montanha" || escolha == "Montanha" || escolha == "MONTANHA" || escolha == "morro" || escolha == "Morro" || escolha == "MORRO"){
            window.location.href="./bastet-final.html";
        } else {
            alert("Resposta errada! Tente novamente");
            escolha = prompt("Digite a sua resposta!");
        }
    }
    if (escolha == "montanha" || escolha == "Montanha" || escolha == "MONTANHA" || escolha == "morro" || escolha == "Morro" || escolha == "MORRO"){
        window.location.href="./bastet-final.html";
    } else {
        window.location.href="./game-over.html";
    }
}