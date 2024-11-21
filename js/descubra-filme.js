// Lista de filmes por humor
const filmesPorHumor = {
    alegria: {
        nome: "O Rei Leão",
        capa: "/assets/o-rei-leao.jpg",
        sinopse: "A história de Simba, um leão jovem que deve enfrentar seu destino para se tornar rei."
    },
    reflexivo: {
        nome: "A Vida é Bela",
        capa: "/assets/a-vida-e-bela.jpg",
        sinopse: "Um pai faz o impossível para proteger seu filho durante o Holocausto, usando sua imaginação."
    },
    melancolico: {
        nome: "As Vantagens de Ser Invisível",
        capa: "/assets/as-vantagens-de-ser-invisivel.jpg",
        sinopse: "A vida de um adolescente introvertido muda quando ele começa a fazer amigos na escola."
    },
    nostalgico: {
        nome: "De Volta para o Futuro",
        capa: "/assets/de-volta-para-o-futuro.jpg",
        sinopse: "Marty McFly viaja no tempo e encontra sua juventude, causando um grande impacto no futuro."
    },
    inspirador: {
        nome: "À Procura da Felicidade",
        capa: "/assets/a-procura-da-felicidade.jpg",
        sinopse: "A inspiradora história de um homem que luta para dar uma vida melhor para seu filho."
    },
    sonolento: {
        nome: "O Segredo de uma Vida",
        capa: "/assets/o-segredo-de-uma-vida.jpg",
        sinopse: "Um filme lento e introspectivo sobre a busca pela paz interior e aceitação."
    },
    sombrio: {
        nome: "Coraline",
        capa: "/assets/coraline.jpg",
        sinopse: "Uma menina encontra uma realidade paralela que parece ser melhor que a sua, mas esconde segredos sombrios."
    },
    aleatorio: {
        nome: "Pulp Fiction",
        capa: "/assets/pulp-fiction.jpg",
        sinopse: "Um filme de Quentin Tarantino, cheio de histórias entrelaçadas que misturam violência e humor."
    }
};

// Função para alterar o filme sugerido
function sugerirFilme(humor) {
    const filme = filmesPorHumor[humor];

    // Exibindo o título, imagem e sinopse do filme sugerido
    document.querySelector(".card-below-img img").src = filme.capa;
    document.querySelector(".card-below-img img").alt = filme.nome;
    document.querySelector(".movie h2").textContent = filme.nome;
    document.querySelector(".sinopse p").textContent = filme.sinopse;
}

// Adicionando evento de clique nas opções de humor
document.getElementById("joy").addEventListener("click", () => sugerirFilme("alegria"));
document.getElementById("reflexivo").addEventListener("click", () => sugerirFilme("reflexivo"));
document.getElementById("melancolico").addEventListener("click", () => sugerirFilme("melancolico"));
document.getElementById("nostalgico").addEventListener("click", () => sugerirFilme("nostalgico"));
document.getElementById("inspirador").addEventListener("click", () => sugerirFilme("inspirador"));
document.getElementById("sonolento").addEventListener("click", () => sugerirFilme("sonolento"));
document.getElementById("sombrio").addEventListener("click", () => sugerirFilme("sombrio"));
document.getElementById("aleatorio").addEventListener("click", () => sugerirFilme("aleatorio"));
