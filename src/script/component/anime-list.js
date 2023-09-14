import "./anime-detail.js";

class AnimeList extends HTMLElement {
    set anime(details) {
      this._details = details;
      this.render();
    }
    render() {
      this.innerHTML = "";
      this._details.forEach((detail) => {
        const animeDetailElement = document.createElement("anime-detail");
        animeDetailElement.anime = detail;
        this.appendChild(animeDetailElement);
      });
    }
  
    renderError(message) {
      this.innerHTML = `
        <style>
          .placeholder {
            user-select: none;
            font-weight: bold;
            text-align: center;
            color: rgb(225, 0, 0);
            display: block;
          }
        </style>`;
      this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }    
}
customElements.define("anime-list", AnimeList);
