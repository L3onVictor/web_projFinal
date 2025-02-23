window.addEventListener("load", atualizarVisorQtdItens);

function atualizarVisorQtdItens() {
    const qtdItens = localStorage.getItem("qtd_itens") || 0; // Se não houver no localStorage, assume 0
    const visor = document.querySelector(".carrinho");

    // Atualiza a quantidade de itens no visor
    if (visor) {
        const visor_span = document.createElement("span");
        visor_span.textContent = qtdItens;
        visor_span.classList.add("totalitens-carrinho");
        visor.appendChild(visor_span)
    }
}

// Chama essa função sempre que a quantidade de itens mudar no carrinho (dentro de cada página de produto)
function adicionarProdutoNoCarrinho() {
    let nQtdItens = parseInt(localStorage.getItem("qtd_itens")) || 0;
    nQtdItens++;

    // Salva a quantidade atualizada no localStorage
    localStorage.setItem("qtd_itens", nQtdItens);

    // Atualiza o visor
    atualizarVisorQtdItens();
}
