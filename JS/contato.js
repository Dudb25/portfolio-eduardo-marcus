
document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault(); // impede envio automático

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const erro = document.getElementById("erro");

    if (!nome || !email || !mensagem){
        erro.innerText = "Por favor, preencha todos os campos";
        erro.style.display = "block";
        return;
    }

    erro.style.display = "none";
    alert("Formulário enviado com sucesso!");
})