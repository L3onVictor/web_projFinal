document.getElementById("form-agendamento").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;
    const servico = document.getElementById("servico").value;

    if (!nome || !telefone || !data || !hora || !servico) {
        alert("⚠️ Por favor, preencha todos os campos!");
        return;
    }

    alert(`✅ Agendamento realizado com sucesso!\n📅 Data: ${data} às ${hora}\n💇 Serviço: ${servico}`);
    this.reset(); // Limpa o formulário após o envio
});
