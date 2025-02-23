document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const tabela = document.getElementById("tabela-agendamentos");
    const mensagem = document.getElementById("mensagem-agendamento");
    const tbody = document.createElement("tbody");
    tabela.appendChild(tbody);

    // Carrega agendamentos salvos
    function carregarAgendamentos() {
        const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

        // Limpa tabela
        tbody.innerHTML = "";

        if (agendamentos.length === 0) {
            mensagem.style.display = "block";
            tabela.style.display = "none";
        } else {
            mensagem.style.display = "none";
            tabela.style.display = "table";
            
            agendamentos.forEach((agendamento, index) => {
                const row = tbody.insertRow();
                row.innerHTML = `
                    <td>${agendamento.servico}</td>
                    <td>${agendamento.nome}</td>
                    <td>${agendamento.data}</td>
                    <td>${agendamento.hora}</td>
                    <td><button class="remover" data-index="${index}">Cancelar</button></td>
                `;
            });
        }
    }

    // Salva um novo agendamento
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const servico = document.getElementById("servico").options[document.getElementById("servico").selectedIndex].text;
        const nome = document.getElementById("nome").value;
        const data = document.getElementById("data").value;
        const hora = document.getElementById("hora").value;

        if (!nome || !data || !hora) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        const novoAgendamento = { servico, nome, data, hora };

        // Adiciona ao localStorage
        const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
        agendamentos.push(novoAgendamento);
        localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

        form.reset();
        carregarAgendamentos();
    });

    // Remove um agendamento
    tabela.addEventListener("click", function (event) {
        if (event.target.classList.contains("remover")) {
            const index = event.target.getAttribute("data-index");
            const agendamentos = JSON.parse(localStorage.getItem("agendamentos"));
            agendamentos.splice(index, 1);
            localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
            carregarAgendamentos();
        }
    });

    // Carregar os agendamentos ao abrir a página
    carregarAgendamentos();
});
