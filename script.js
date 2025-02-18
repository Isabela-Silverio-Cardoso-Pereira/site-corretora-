function Enviar() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

    if (nome !== "" && email.includes("@") && telefone !== "") {
        alert("Dados encaminhados " + nome);
    } else {
        alert("Por favor, digite um nome válido, um e-mail válido e um telefone válido.");
    }
}
