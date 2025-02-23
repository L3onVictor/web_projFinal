document.addEventListener("DOMContentLoaded", function () {
    const carrinhoContainer = document.querySelector(".total-itens");
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let nQtdItens = parseInt(localStorage.getItem("qtd_itens")) || 0;

    function agruparCarrinho() {
        let carrinhoAgrupado = {};
        carrinho.forEach(produto => {
            if (carrinhoAgrupado[produto.id]) {
                carrinhoAgrupado[produto.id].quantidade++;
            } else {
                carrinhoAgrupado[produto.id] = { ...produto, quantidade: 1 };
            }
        });
        return Object.values(carrinhoAgrupado);
    }

    function renderizarCarrinho() {
        carrinhoContainer.innerHTML = "";
        let carrinhoAgrupado = agruparCarrinho();

        if (carrinhoAgrupado.length === 0) {
            carrinhoContainer.innerHTML = "<p>Seu carrinho está vazio.</p>";
            localStorage.setItem("qtd_itens", 0);
            return;
        }

        carrinhoAgrupado.forEach(produto => {
            const produtoElemento = document.createElement("div");
            produtoElemento.classList.add("produto-carrinho");
            produtoElemento.innerHTML = `
                <p><strong>${produto.nome}</strong> - R$ ${produto.valor.toFixed(2)}</p>
                <span class="quantidade">Quantidade: ${produto.quantidade}</span>
                <button class="adicionar-produto" data-id="${produto.id}">+</button>
                <button class="remover-produto" data-id="${produto.id}">-</button>
            `;
            carrinhoContainer.appendChild(produtoElemento);
        });

        adicionarEventosManipulacao();
    }

    function adicionarEventosManipulacao() {
        document.querySelectorAll(".adicionar-produto").forEach(botao => {
            botao.addEventListener("click", function () {
                const id = this.getAttribute("data-id");
                const produto = carrinho.find(produto => produto.id === id);
                if (produto) {
                    carrinho.push(produto);
                    nQtdItens++;
                }
                localStorage.setItem("carrinho", JSON.stringify(carrinho));
                localStorage.setItem("qtd_itens", nQtdItens);
                renderizarCarrinho();
            });
        });

        document.querySelectorAll(".remover-produto").forEach(botao => {
            botao.addEventListener("click", function () {
                const id = this.getAttribute("data-id");
                const index = carrinho.findIndex(produto => produto.id === id);
                if (index !== -1) {
                    carrinho.splice(index, 1);
                    nQtdItens = Math.max(0, nQtdItens - 1);
                }
                localStorage.setItem("carrinho", JSON.stringify(carrinho));
                localStorage.setItem("qtd_itens", nQtdItens);
                renderizarCarrinho();
            });
        });
    }

    renderizarCarrinho();
});
