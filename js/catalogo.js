const movies = {
    feliz: [
      {
        title: "Divertidamente",
        image:
          "https://th.bing.com/th/id/OIP.KaLAURYp2MBuNqF8lhhRZAHaJQ?rs=1&pid=ImgDetMain",
        emotion: "feliz",
      },
      {
        title: "Shrek",
        image:
          "https://acdn.mitiendanube.com/stores/004/687/740/products/pos-01377-08df83af377681b35d17181331394751-1024-1024.jpg",
        emotion: "feliz",
      },
      {
        title: "Os Incríveis",
        image:
          "https://br.web.img3.acsta.net/medias/nmedia/18/90/98/38/20123472.jpg",
        emotion: "feliz",
      },
      {
        title: "Toy Story",
        image:
          "https://a-static.mlcdn.com.br/1500x1500/poster-cartaz-toy-story-3-c-pop-arte-poster/poparteskins2/15938539967/2439854928f001ae7c84aac7c40c9e83.jpeg",
        emotion: "feliz",
      },
      {
        title: "Ratatouille",
        image:
          "https://uauposters.com.br/media/catalog/product/8/9/893420220526-uau-posters-ratatouille-filmes-infantil-3.jpg",
        emotion: "feliz",
      },
      {
        title: "Moana",
        image:
          "https://a-static.mlcdn.com.br/1500x1500/poster-cartaz-moana-um-mar-de-aventuras-c-pop-arte-poster/poparteskins2/15938534162/b89eecb1bc669e3898a3fe3f0471f71c.jpeg",
        emotion: "feliz",
      },
    ],
    triste: [
      {
        title: "À Procura da Felicidade",
        image:
          "https://images-americanas.b2w.io/produtos/7386988348/imagens/poster-cartaz-a-procura-da-felicidade/7386988559_1_large.jpg",
        emotion: "triste",
      },
      {
        title: "Marley & Eu",
        image:
          "https://br.web.img3.acsta.net/medias/nmedia/18/67/50/76/19049124.jpg",
        emotion: "triste",
      },
      {
        title: "Titanic",
        image:
          "https://acdn.mitiendanube.com/stores/363/165/products/titanic1-c716a97fb4c0b1995f16511079549015-640-0.jpg",
        emotion: "triste",
      },
      {
        title: "A Culpa é das Estrelas",
        image:
          "https://a-static.mlcdn.com.br/1500x1500/poster-cartaz-a-culpa-e-das-estrelas-pop-arte-poster/poparteskins2/15938538737/3c88b2a63ad07036acdd4bc59de87614.jpeg",
        emotion: "triste",
      },
      {
        title: "Questão de Tempo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3705VUVkaZpBp14Pxvpw_kX8WrE8ZevyOEg&s",
        emotion: "triste",
      },
      {
        title: "O Jardim Secreto",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LbXkcl2Fjq14DTs7tD-OrNbgM5udADgFjg&s",
        emotion: "triste",
      },
    ],
  };
  
  function loadMovies() {
    const movieGrid = document.getElementById("filmes");
    movieGrid.innerHTML = "";
  
    let storedFavorites = movies.feliz;
    let storedWatched = movies.triste;
  
    storedFavorites.forEach((movie) => {
      const movieElement = createMovieCard(movie);
      movieGrid.appendChild(movieElement);
    });
  
    storedWatched.forEach((movie) => {
      const movieElement = createMovieCard(movie);
      movieGrid.appendChild(movieElement);
    });
  }
  
  function createMovieCard(movie) {
    const movieElement = document.createElement("div");
    movieElement.classList.add("card");
  
    const img = document.createElement("img");
    img.src = movie.image;
    img.alt = movie.emotion;
  
    const title = document.createElement("p");
    title.textContent = movie.title;
  
    movieElement.appendChild(img);
    movieElement.appendChild(title);
  
    return movieElement;
  }
  
  function checkedR(radio) {
    if (radio.wasChecked) {
      radio.checked = false;
    }
    radio.wasChecked = radio.checked;
  }
  
  function emotionOp() {
    const emotion = movies.emotion;
    console.log(emotion);
  }
  
  function storeEmotion() {
    const emotions = {};
    for (const category in movies) {
      movies[category].forEach((movie) => {
        emotions[movie.title] = movie.emotion;
      });
    }
    console.log(emotions);
    return emotions;
  }
  
  function selectEmotion(radio) {
    const emotion = radio.id; 
    const allMovies = document.querySelectorAll(".card");
  
    allMovies.forEach((movie) => {
      const movieEmotion = movie.querySelector("img").alt;
      if (movieEmotion === emotion) {
        movie.style.display = "block";
      } else {
        movie.style.display = "none";
      }
    });
  }
  function sortAllMovies() {
    // Criar uma nova lista para armazenar todos os filmes
    const allMovies = [];
  
    // Adicionar todos os filmes das categorias à nova lista
    for (const category in movies) {
      allMovies.push(...movies[category]);
    }
  
    // Ordenar a lista de filmes por título
    allMovies.sort((a, b) => a.title.localeCompare(b.title));
  
    // Limpar o grid de filmes e recarregar com os filmes ordenados
    const movieGrid = document.getElementById("filmes");
    movieGrid.innerHTML = "";
  
    // Criar os cards para cada filme na lista ordenada
    allMovies.forEach((movie) => {
      const movieElement = createMovieCard(movie);
      movieGrid.appendChild(movieElement);
    });
  }
  function clearFilters() {
    const allMovies = document.querySelectorAll(".card");
  
    allMovies.forEach(movie => {
      movie.style.display = "block";
    });
  }
  
 
  document.addEventListener("DOMContentLoaded", () => {
    loadMovies();
    emotionOp();
    storeEmotion();
  
    const radios = document.querySelectorAll('input[name="emocoes"]');
    radios.forEach((radio) => {
      radio.addEventListener("change", () => selectEmotion(radio));
    });
  
    const sortButton = document.querySelector('button[name="classificar"]');
    sortButton.addEventListener("click", sortAllMovies);

     // Vinculando a função ao botão com ID "clear"
  const clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", clearFilters);
  });
  