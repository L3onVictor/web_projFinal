window.addEventListener("load", atualizarVisorQtdItens);

function atualizarVisorQtdItens() {
    const qtdItens = localStorage.getItem("qtd_itens") || 0;
    const visor = document.querySelector(".carrinho");


    if (visor) {
        const visor_span = document.createElement("span");
        visor_span.textContent = qtdItens;
        visor_span.classList.add("totalitens-carrinho");
        visor.appendChild(visor_span)
    }
}


function adicionarProdutoNoCarrinho() {
    let nQtdItens = parseInt(localStorage.getItem("qtd_itens")) || 0;
    nQtdItens++;

    localStorage.setItem("qtd_itens", nQtdItens);

    atualizarVisorQtdItens();
}
