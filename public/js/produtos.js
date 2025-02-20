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
    img: "../images/produtos/minoxidil-low.jpg",
    nome: "Minoxidil",
    descricao: "Aproveite a promoção: leve 1, pague 2",
    valor: 50.90
},
{
    id: "produto-2",
    img: "../images/produtos/cadeira-low.jpg",
    nome: "Cadeira de Barbearia",
    descricao: "Preço mais em conta para iniciantes.",
    valor: 799.90
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
    img: "../images/produtos/cadeira.jpg",
    nome: "Cadeira Premium",
    descricao: "Confortável e resistente, ideal para sua barbearia.",
    valor: 1299.90
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
},
{
    id: "produto-11",
    img: "../images/produtos/tintura3.jpg",
    nome: "Tintura Clássica",
    descricao: "Tintura clássica castanho escuro",
    valor: 30.90
},
{
    id: "produto-12",
    img: "../images/produtos/tintura4.jpg",
    nome: "Tintura Clássica Biocolor",
    descricao: "Excelente tintura para o seu cabelo",
    valor: 40.00
},
{
    id: "produto-13",
    img: "../images/produtos/tintura5.jpg",
    nome: "Tintura Econômica Cor&Ton",
    descricao: "Sachê economica castanho escura.",
    valor: 29.90
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