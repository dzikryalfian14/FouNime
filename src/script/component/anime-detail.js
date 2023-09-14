class animeDetail extends HTMLElement {
  set anime(details) {
    this._details = details;
    this.render();
  }
  
  render() {
    const imageUrl = this._details.images.jpg.image_url;
    const title = this._details.title;
    const releaseDate = this._details.aired.string;
    const genres = this._details.genres.map(genre => genre.name).join(', ');
    const synopsis = this._details.synopsis;

    this.innerHTML = `
            <style>
                .col {
                    margin: 50px;
                    padding: 0;
                }

                .card-anime {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: #B4B4B3; 
                    border-radius: 10px;
                    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    transition: transform 0.3s ease-in-out;
                    cursor: pointer;
                    width: 100%;
                }

                .card-anime:hover {
                    transform: scale(1.05);
                }

                .card-img {
                    border-radius: 10px 10px 0 0;
                    width: 100%;
                    padding: 20px;
                    max-height: 100%;
                    object-fit: cover;
                }

                .card-body {
                    padding: 15px;
                    text-align: center;
                }

                .card-title {
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 5px;
                    font-family: 'Roboto', sans-serif;
                }

                .card-text {
                    font-size: 18px;
                    line-height: 1.5;
                    padding: 30px;
                    margin: 0;
                }

                .card-details {
                    font-size: 14px;
                    font-weight: normal;
                    margin-bottom: 5px;
                }

            </style>

            <div class="col">
                <div class="card card-anime">
                    <div class="title-poster">
                        <img src="${imageUrl}" class="card-img card-img-top" alt="${title}" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">
                        <span class="card-details">Release Date: ${releaseDate}</span><br>
                        <span class="card-details">Genre: ${genres}</span><br>
                        <span class="card-details">Synopsis: ${synopsis}</span>
                        </p>
                    </div>
                </div>
            </div>`;
  }
}

customElements.define('anime-detail', animeDetail);
