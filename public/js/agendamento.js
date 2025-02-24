document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const tabela = document.getElementById("tabela-agendamentos");
    const mensagem = document.getElementById("mensagem-agendamento");
    const tbody = document.createElement("tbody");
    tabela.appendChild(tbody);

    
    async function carregarAgendamentos() {
        try {
            const response = await fetch("/api/agendamento"); 
            const agendamentos = await response.json();

            
            tbody.innerHTML = "";

            if (agendamentos.length === 0) {
                mensagem.style.display = "block";
                tabela.style.display = "none";
            } else {
                mensagem.style.display = "none";
                tabela.style.display = "table";

                agendamentos.forEach((agendamento) => {
                    const row = tbody.insertRow();
                    row.innerHTML = `
                        <td>${agendamento.servico}</td>
                        <td>${agendamento.nome}</td>
                        <td>${agendamento.data}</td>
                        <td>${agendamento.hora}</td>
                        <td>${agendamento.telefone}</td>
                        <td>${agendamento.observacao}</td>
                        <td><button class="remover" data-id="${agendamento.id}">Cancelar</button></td>
                    `;
                });
            }
        } catch (error) {
            console.error("Erro ao carregar agendamentos:", error);
        }
    }

    
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const servico = document.getElementById("servico").options[document.getElementById("servico").selectedIndex].text;
        const nome = document.getElementById("nome").value;
        const data = document.getElementById("data").value;
        const hora = document.getElementById("hora").value;
        const telefone = document.getElementById("telefone").value;
        const observacao = document.getElementById("observacoes").value;

        if (!nome || !data || !hora || !telefone) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        const novoAgendamento = { servico, nome, data, hora, telefone, observacao };

        try {
            const response = await fetch("/api/agendamento", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(novoAgendamento),
            });

            if (response.ok) {
                form.reset();
                carregarAgendamentos();
            } else {
                alert("Erro ao agendar. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao salvar agendamento:", error);
        }
    });

    
    tabela.addEventListener("click", async function (event) {
        if (event.target.classList.contains("remover")) {
            const id = event.target.getAttribute("data-id");

            try {
                const response = await fetch(`/api/agendamento/${id}`, { method: "DELETE" });

                if (response.ok) {
                    carregarAgendamentos();
                } else {
                    alert("Erro ao cancelar o agendamento.");
                }
            } catch (error) {
                console.error("Erro ao remover agendamento:", error);
            }
        }
    });

    function definirServico() {
        const params = new URLSearchParams(window.location.search);
        const servicoSelecionado = params.get("servico");
        if (servicoSelecionado) {
            document.getElementById("servico").value = servicoSelecionado;
        }
    }

    definirServico();
    carregarAgendamentos();
});
