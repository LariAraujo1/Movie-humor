const movies = {
  feliz: [
    {
      title: "Divertidamente",
      image: "https://th.bing.com/th/id/OIP.KaLAURYp2MBuNqF8lhhRZAHaJQ?rs=1&pid=ImgDetMain"
    },
    {
      title: "Shrek",
      image: "https://acdn.mitiendanube.com/stores/004/687/740/products/pos-01377-08df83af377681b35d17181331394751-1024-1024.jpg"
    },
    {
      title: "Os Incríveis",
      image: "https://br.web.img3.acsta.net/medias/nmedia/18/90/98/38/20123472.jpg"
    },
    {
      title: "Toy Story",
      image: "https://a-static.mlcdn.com.br/1500x1500/poster-cartaz-toy-story-3-c-pop-arte-poster/poparteskins2/15938539967/2439854928f001ae7c84aac7c40c9e83.jpeg"
    },
    {
      title: "Ratatouille",
      image: "https://uauposters.com.br/media/catalog/product/8/9/893420220526-uau-posters-ratatouille-filmes-infantil-3.jpg"
    },
    {
      title: "Moana",
      image: "https://a-static.mlcdn.com.br/1500x1500/poster-cartaz-moana-um-mar-de-aventuras-c-pop-arte-poster/poparteskins2/15938534162/b89eecb1bc669e3898a3fe3f0471f71c.jpeg"
    }
  ],
  triste: [
    {
      title: "À Procura da Felicidade",
      image: "https://images-americanas.b2w.io/produtos/7386988348/imagens/poster-cartaz-a-procura-da-felicidade/7386988559_1_large.jpg"
    },
    {
      title: "Marley & Eu",
      image: "https://br.web.img3.acsta.net/medias/nmedia/18/67/50/76/19049124.jpg"
    },
    {
      title: "Titanic",
      image: "https://acdn.mitiendanube.com/stores/363/165/products/titanic1-c716a97fb4c0b1995f16511079549015-640-0.jpg"
    },
    {
      title: "A Culpa é das Estrelas",
      image: "https://a-static.mlcdn.com.br/1500x1500/poster-cartaz-a-culpa-e-das-estrelas-pop-arte-poster/poparteskins2/15938538737/3c88b2a63ad07036acdd4bc59de87614.jpeg"
    },
    {
      title: "Questão de Tempo",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3705VUVkaZpBp14Pxvpw_kX8WrE8ZevyOEg&s"
    },
    {
      title: "O Jardim Secreto",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LbXkcl2Fjq14DTs7tD-OrNbgM5udADgFjg&s"
    }
  ]
};
// Função que serve pra setar as variaveis/arrays em que os filmes em formato json serão armazenados
function loadMovies() {
  // pega os ids no html e guarda na variavel
  const favoritesGrid = document.getElementById("favoritesGrid");
  const watchedGrid = document.getElementById("watchedGrid");

  // seta essas variaveis como os filmes do json, os favoritos são os felizes e os assistidos são os tristes
  let storedFavorites = movies.feliz;
  let storedWatched = movies.triste;

  // pra cada filme nos arrays ele cria um card (que contem foto e nome do filme) e adiciona esse card no html
  storedFavorites.forEach((movie) => {
    const movieElement = createMovieCard(movie);
    favoritesGrid.appendChild(movieElement);
  });

  storedWatched.forEach((movie) => {
    const movieElement = createMovieCard(movie);
    watchedGrid.appendChild(movieElement);
  });

}
// função pra pegar os card no id do html e adicionar na variavel
function saveToLocalStorage() {
  const favorites = Array.from(document.querySelectorAll("#favoritesGrid .card")).map((card) => {
    return {
      title: card.querySelector("p").textContent,
      image: card.querySelector("img").src
    };
  });

  const watched = Array.from(document.querySelectorAll("#watchedGrid .card")).map((card) => {
    return {
      title: card.querySelector("p").textContent,
      image: card.querySelector("img").src
    };
  });

  // para botar o conteudo da variavel no localstorage
  localStorage.setItem("favorites", JSON.stringify(favorites));
  localStorage.setItem("watched", JSON.stringify(watched));
}

// função pra criar os cards adicionar os elementos
function createMovieCard(movie) {
  const movieElement = document.createElement("div");
  movieElement.classList.add("card");

  const img = document.createElement("img");
  img.src = movie.image;
  img.alt = movie.title;

  const title = document.createElement("p");
  title.textContent = movie.title;

  movieElement.appendChild(img);
  movieElement.appendChild(title);

  return movieElement;
}
// função para o pop up do adicionar lista aparecer
function adicionarLista() {
  const botao = document.getElementById("novalista");
  if (botao.style.display === "none") {
    botao.style.display = "flex";
  } else {
    botao.style.display = "none";
  }
}
  // função para fechar o pop up ao clicar no X
function fecharAdd() {
  const botao = document.getElementById("novalista");
  if (botao.style.display === "flex") {
    botao.style.display = "none";
  }
}

//função pra criar a lista
function createNewList() {
  //seta a variavel para o input q o usuario colocar
  const listName = document.getElementById("listNameInput").value;
  if (listName.trim() === "") {
    alert("Por favor, insira um nome para a nova lista.");
    return;
  }

  // seta as variaveis para criar uma section e um h2
  const newSection = document.createElement("section");
  const newTitle = document.createElement("h2");
  //seta o conteudo de h2 como o input q o usuario digitou
  newTitle.textContent = listName;

  //cria uma div com a classe grid
  const newGrid = document.createElement("div");
  newGrid.classList.add("grid");

  //adiciona o titulo h2 e a div com a classe grid na section
  newSection.appendChild(newTitle);
  newSection.appendChild(newGrid);

  // adiciona a div de novo filme na lista criada
  const novoFilme = document.createElement("div");
  novoFilme.classList.add("novoFilme");
  const button = document.createElement("button");
  button.textContent = "+";
  novoFilme.appendChild(button);

  newGrid.appendChild(novoFilme);

  //array que guarda o conteudo da nova lista
  const newList = {
    title: listName,
    items: [],
  };

  //salva a lista no localstory quando cria a lista
  document.querySelector("main").appendChild(newSection);
  const lists = JSON.parse(localStorage.getItem("lists")) || [];
  lists.push(newList);
  localStorage.setItem("lists", JSON.stringify(lists));
}

//Carrega as listas criadas
function loadLists() {
  const lists = JSON.parse(localStorage.getItem("lists")) || [];

  const mainContainer = document.querySelector("main");

  lists.forEach((list) => {
    // Cria a seção para cada lista
    const newSection = document.createElement("section");

    // Cria o título da lista
    const h2 = document.createElement("h2");
    h2.textContent = list.title;

    // Cria a grade para os itens da lista
    const newGrid = document.createElement("div");
    newGrid.classList.add("grid");

    // Cria o elemento para adicionar novos filmes
    const novoFilme = document.createElement("div");
    novoFilme.classList.add("novoFilme");
    const button = document.createElement("button");
    button.textContent = "+";
    novoFilme.appendChild(button);

    // Adiciona os elementos à seção
    newSection.appendChild(h2);
    newSection.appendChild(newGrid);
    newSection.appendChild(novoFilme);

    // Adiciona a seção ao container principal
    mainContainer.appendChild(newSection);
  });
} 

// Adiciona as funções aos botões
document.getElementById("createListButton").addEventListener("click", () => {
  saveToLocalStorage();
  createNewList();
});
document.getElementById("adicionarLista").addEventListener("click", () => {
  adicionarLista();
});
document.getElementById("fecharDiv").addEventListener("click", () => {
  fecharAdd();
});



// Função para remover uma lista
function removeList(event) {
  const section = event.target.closest("section");
  const listTitle = section.querySelector("h2").textContent;

  // Remove a seção do DOM
  section.remove();

  // Remove a lista do localStorage
  const lists = JSON.parse(localStorage.getItem("lists")) || [];
  const updatedLists = lists.filter(list => list.title !== listTitle);
  localStorage.setItem("lists", JSON.stringify(updatedLists));
}

// Adiciona a função de remoção aos botões criados para remover
function removeButtons() {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    const removeButton = document.createElement("button");
    removeButton.classList.add("button");

    removeButton.textContent = "Remover Lista";
    removeButton.addEventListener("click", removeList);
    section.appendChild(removeButton);
  });
}

// Chama a função para adicionar botões de remoção quando o conteúdo da página é carregado
document.addEventListener("DOMContentLoaded", () => {
  removeButtons();
  loadMovies();
  loadLists();
});
