window.addEventListener("load", main)

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
    img: "../images/produtos/",
    nome: "Minoxidil",
    descricao: "Aproveite a promoção: leve 1, pague 2",
    valor: 30.00
},
{
    id: "produto-2",
    img: "../images/produtos/",
    nome: "",
    descricao: "",
    valor: 0.0
},
{
    id: "produto-3",
    img: "../images/produtos/",
    nome: "",
    descricao: "",
    valor: 0.0
},
{
    id: "produto-4",
    img: "../images/produtos/",
    nome: "",
    descricao: "",
    valor: 0.0
},
{
    id: "produto-5",
    img: "../images/produtos/",
    nome: "",
    descricao: "",
    valor: 0.0
},
{
    id: "produto-6",
    img: "../images/produtos/",
    nome: "",
    descricao: "",
    valor: 0.0
},
{
    id: "produto-7",
    img: "../images/produtos/",
    nome: "",
    descricao: "",
    valor: 0.0
},
{
    id: "produto-8",
    img: "../images/produtos/",
    nome: "",
    descricao: "",
    valor: 0.0
},
{
    id: "produto-9",
    img: "../images/produtos/",
    nome: "",
    descricao: "",
    valor: 0.0
},
{
    id: "produto-10",
    img: "../images/produtos/",
    nome: "",
    descricao: "",
    valor: 0.0
},
{
    id: "produto-11",
    img: "../images/produtos/",
    nome: "",
    descricao: "",
    valor: 0.0
},
{
    id: "produto-12",
    img: "../images/produtos/",
    nome: "",
    descricao: "",
    valor: 0.0
},
{
    id: "produto-13",
    img: "../images/produtos/",
    nome: "",
    descricao: "",
    valor: 0.0
}
]

function main() {
    const produtos = document.getElementsByClassName("produtos-carrossel-auto")[0]
    
// Cria os elementos em memoria

    for (let x = 0; x < 9; x ++){
        
            const produto = document.createElement("div");
            const img = document.createElement("img");
            const nome = document.createElement("h3");
            const descricao = document.createElement("p");
            const valor = document.createElement("span");
            const button = document.createElement("button");
        
        // Preencher com as informações dos produtos
        
            img.src = estoque[x].img;
            nome.textContent = estoque[x].nome;
            descricao.textContent = estoque[x].descricao;
            valor.textContent = `Preço: R$ ${estoque[x].valor}0`
        
            button.textContent = `Adicionar ao carrinho`
        
        // Montar a estrutura do DOM e a adiciona ao HTML
        
            produto.appendChild(img)
            produto.appendChild(nome)
            produto.appendChild(descricao)
            produto.appendChild(valor)
            produto.appendChild(button)
            produto.classList.add("produto")
            produtos.appendChild(produto);

    }
}