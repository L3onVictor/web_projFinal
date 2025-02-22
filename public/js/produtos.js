window.addEventListener("load", main)

let carrinho = []

const estoque = [
    {
        id: "produto-0",
        img: "../images/produtos/espuma.jpg",
        nome: "Espuma de Barbear",
        descricao: "Promoção de espuma de barbear.",
        valor: 18.90
    },
    {
        id: "produto-1",
        img: "../images/produtos/minoxidil-low.jpg",
        nome: "Minoxidil",
        descricao: "Aproveite a promoção: leve 1, pague 2",
        valor: 50.90
    },
    {
        id: "produto-2",
        img: "../images/produtos/tintura4.jpg",
        nome: "Tintura Clássica Biocolor",
        descricao: "Excelente tintura para o seu cabelo",
        valor: 40.00
    },
    {
        id: "produto-3",
        img: "../images/produtos/tesoura.jpg",
        nome: "Tesoura de Prata",
        descricao: "A melhor tesoura do mercado.",
        valor: 40.00
    },
    {
        id: "produto-4",
        img: "../images/produtos/tesoura-medium.png",
        nome: "Tesoura Cromada",
        descricao: "Um par de tesouras cromadas.",
        valor: 59.90
    },
    {
        id: "produto-5",
        img: "../images/produtos/tintura5.jpg",
        nome: "Tintura Econômica Cor&Ton",
        descricao: "Sachê economica castanho escura.",
        valor: 29.90
    },
    {
        id: "produto-6",
        img: "../images/produtos/espuma-low.jpg",
        nome: "Espuma de Barbear",
        descricao: "Espuma premium para um barbear suave.",
        valor: 39.90
    },
    {
        id: "produto-7",
        img: "../images/produtos/minoxidil.jpg",
        nome: "Minoxidil",
        descricao: "Tratamento eficaz para o crescimento da sua barba.",
        valor: 89.90
    },
    {
        id: "produto-8",
        img: "../images/produtos/tesoura-low.jpg",
        nome: "Tesoura Simples",
        descricao: "Tesoura simples, acabamento de plástico.",
        valor: 20.00
    },
    {
        id: "produto-9",
        img: "../images/produtos/tintura1.jpg",
        nome: "Tinta Capilar",
        descricao: "Tintura branca, nevou ai?",
        valor: 38.90
    },
    {
        id: "produto-10",
        img: "../images/produtos/tintura2.jpg",
        nome: "Tinta Capilar Premium",
        descricao: "Tinta castanho especial para cabelos crespos.",
        valor: 50.90
    }
]

function main() {
    const produtos_estoque = document.getElementsByClassName("produtos-promocao")[0]
    // Cria os elementos em memoria

    for (let x = 0; x <= 10; x++) {

        const produto = document.createElement("div");
        const img = document.createElement("img");
        const nome = document.createElement("h3");
        const descricao = document.createElement("p");
        const valor = document.createElement("span");
        const button = document.createElement("button");

        // Preencher com as informações dos produtos

        produto.id = estoque[x].id;

        img.src = estoque[x].img;
        nome.textContent = estoque[x].nome;
        descricao.textContent = estoque[x].descricao;
        valor.textContent = `Preço: R$ ${estoque[x].valor}`

        button.textContent = `Adicionar ao carrinho`

        button.addEventListener("click", adicionarProdutoNoCarrinho);

        // Montar a estrutura do DOM e a adiciona ao HTML

        produto.appendChild(img)
        produto.appendChild(nome)
        produto.appendChild(descricao)
        produto.appendChild(valor)
        produto.appendChild(button)
        produto.classList.add("produto")
        produtos_estoque.appendChild(produto);

    }

    function adicionarProdutoNoCarrinho (evento) {
        const produto_id = evento.target.parentElement.id;
        const item = obterProdutoPorId(produto_id);

        carrinho.push(item);
    }

    function obterProdutoPorId (id){
        for (let produto of estoque){
            if (produto.id === id){
                return produto
            }
        }
        return null;
    }
}