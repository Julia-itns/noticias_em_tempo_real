const apiKey = "698beeab677f4832be972162a1f700b9"; 
const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=12&apiKey=${apiKey}`; 

const container = document.getElementById("noticias");

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.articles.forEach(noticia => {
      const card = document.createElement("div");
      card.classList.add("col-md-4");

      card.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${noticia.urlToImage || 'https://via.placeholder.com/400x200?text=Sem+Imagem'}" class="card-img-top" alt="Imagem da notícia">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${noticia.title}</h5>
            <p class="card-text">${noticia.description || 'Sem descrição disponível.'}</p>
            <a href="${noticia.url}" class="btn btn-primary mt-auto" target="_blank">Leia mais</a>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    container.innerHTML = `<p class="text-danger">"Erro ao carregar as notícias. Tente novamente mais tarde".</p>`;
    console.error("Erro:", error);
  });
