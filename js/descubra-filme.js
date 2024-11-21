document.addEventListener('DOMContentLoaded', () => {
    // Lista de filmes por humor
    const filmesPorHumor = {
        alegria: {
            nome: "Happy Feet",
            capa: "./assets/happyfeet.jpg",
            sinopse: "Happy Feet é uma animação encantadora que acompanha Mano, um jovem pinguim-imperador que não sabe cantar como os outros de sua espécie, mas possui um talento especial para sapatear. Em sua jornada para se encontrar e conquistar seu lugar na colônia, Mano enfrenta desafios, descobre amizades inusitadas e aprende a importância de ser fiel a si mesmo."
        },
        reflexivo: {
            nome: "A Sociedade dos Poetas Mortos",
            capa: "./assets/asociedade.jpg",
            sinopse: "A Sociedade dos Poetas Mortos é um drama inspirador que acompanha um grupo de alunos de um rígido colégio interno que têm suas vidas transformadas pelo professor de literatura John Keating. Com métodos de ensino pouco convencionais, Keating os incentiva a pensar de forma independente e a "aproveitar o dia". A redescoberta de paixões e sonhos, no entanto, os leva a confrontar as expectativas da escola e de suas famílias, resultando em lições profundas sobre liberdade e autoconhecimento."
        },
        melancolico: {
            nome: "As Vantagens de Ser Invisível",
            capa: "/assets/melancolico.jpg",
            sinopse: "A vida de um adolescente introvertido muda quando ele começa a fazer amigos na escola."
        },
        nostalgico: {
            nome: "De Volta para o Futuro",
            capa: "/assets/nostalgic.jpg",
            sinopse: "Marty McFly viaja no tempo e encontra sua juventude, causando um grande impacto no futuro."
        },
        inspirador: {
            nome: "À Procura da Felicidade",
            capa: "/assets/inspirador.jpg",
            sinopse: "A inspiradora história de um homem que luta para dar uma vida melhor para seu filho."
        },
        sonolento: {
            nome: "O Segredo de uma Vida",
            capa: "/assets/sonolento.jpg",
            sinopse: "Um filme lento e introspectivo sobre a busca pela paz interior e aceitação."
        },
        sombrio: {
            nome: "Coraline",
            capa: "/assets/sombrio.jpg",
            sinopse: "Uma menina encontra uma realidade paralela que parece ser melhor que a sua, mas esconde segredos sombrios."
        },
        aleatorio: {
            nome: "Pulp Fiction",
            capa: "/assets/aleatorio.jpg",
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
    document.getElementById("happy").addEventListener("click", () => sugerirFilme("alegria"));
    document.getElementById("reflexivo").addEventListener("click", () => sugerirFilme("reflexivo"));
    document.getElementById("melancolico").addEventListener("click", () => sugerirFilme("melancolico"));
    document.getElementById("nostalgico").addEventListener("click", () => sugerirFilme("nostalgico"));
    document.getElementById("inspirador").addEventListener("click", () => sugerirFilme("inspirador"));
    document.getElementById("sonolento").addEventListener("click", () => sugerirFilme("sonolento"));
    document.getElementById("sombrio").addEventListener("click", () => sugerirFilme("sombrio"));
    document.getElementById("aleatorio").addEventListener("click", () => sugerirFilme("aleatorio"));
});
