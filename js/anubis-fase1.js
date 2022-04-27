function anubisFase1() {
    var escolha = prompt("Digite a sua resposta!");
    var c = 0;
    for (var c = 0; c < 2; c++){
        if (escolha == "memória" || escolha == "memoria" || escolha == "Memória" || escolha == "Memoria" || escolha == "MEMORIA" || escolha == "MEMÓRIA"){
            window.location.href="./anubis-f1-f2.html";
        } else {
            alert("Resposta errada! Tente novamente");
            escolha = prompt("Digite a sua resposta!");
        }
    }
    if (escolha == "memória" || escolha == "memoria" || escolha == "Memória" || escolha == "Memoria" || escolha == "MEMORIA" || escolha == "MEMÓRIA" ){
        window.location.href="./anubis-f1-f2.html";
    } else {
        window.location.href="./game-over.html";
    }
}