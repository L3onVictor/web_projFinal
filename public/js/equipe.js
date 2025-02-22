window.addEventListener("load", main)

const equipe = [
    {
        id: "barbeiro-1",
        img: "../images/equipe/barbeiro1.jpg",
        nome: "João Barbeiro",
        descricao: "Especialista em cortes clássicos e modernos."
    },
    {
        id: "barbeiro-2",
        img: "../images/equipe/barbeiro2.jpg",
        nome: "Pedro Estilista",
        descricao: "Perito em barba e design de cortes."
    },
    {
        id: "barbeiro-3",
        img: "../images/equipe/barbeiro3.jpg",
        nome: "Lucas Fade",
        descricao: "Fade perfeito e cortes degradê impecáveis."
    }
]

function main(){
    const membros = document.getElementsByClassName("equipe-container")[0]

    for (let x = 0; x <= 2; x++){

        const membro = document.createElement("div");
        const img = document.createElement("img");
        const nome = document.createElement("h3");
        const descricao = document.createElement("p");

        membro.id = equipe[x].id;
        img.src = equipe[x].img;
        nome.textContent = equipe[x].nome;
        descricao.textContent = equipe[x].descricao;

        membro.appendChild(img)
        membro.appendChild(nome)
        membro.appendChild(descricao)
        membro.classList.add("membro")
        membros.appendChild(membro);
    }
}