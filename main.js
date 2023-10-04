function adicionarContato() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;

    let tabelaContatos = document.getElementById("tabelaContatos");
    
    let newRow = tabelaContatos.insertRow();
    
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    
    cell1.innerHTML = nome;
    cell2.innerHTML = telefone;
    
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}

document.getElementById("formularioContato").addEventListener("submit", function(event) {
    event.preventDefault();
    adicionarContato(); 
});


