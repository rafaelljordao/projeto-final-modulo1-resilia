function bastetFase2() {
    var escolha = prompt("Digite a sua resposta!");
    var c = 0;
    for (var c = 0; c < 2; c++){
        if (escolha == "humano" || escolha == "Humano" || escolha == "HUMANO" || escolha == "homem" || escolha == "Homem" || escolha == "HOMEM" || escolha == "mulher" || escolha == "Mulher" || escolha == "MULHER"){
            window.location.href="./bastet-f2-f3.html";
        } else {
            alert("Resposta errada! Tente novamente");
            escolha = prompt("Digite a sua resposta!");
        }
    }
    if (escolha == "humano" || escolha == "Humano" || escolha == "HUMANO" || escolha == "homem" || escolha == "Homem" || escolha == "HOMEM" || escolha == "mulher" || escolha == "Mulher" || escolha == "MULHER"){
        window.location.href="./bastet-f2-f3.html";
    } else {
        window.location.href="./game-over.html";
    }
}