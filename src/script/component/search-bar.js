class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        :host {
          display: block;
        }

        .search-container {
          border-radius: 30px;
          max-width: 1000px;
          z-index: 1000;
          box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.4);
          display: flex;
          padding: 5px;
          position: sticky;
          top: 50px;
          margin-bottom: 35px;
          font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        }

        .search-container > input {
          border-radius: 50px;
          padding: 20px;
          width: 85%;
          margin: 5px;
          border: 1px;
          border-bottom: 2px solid white;
        }

        .search-container > input:focus {
          border-bottom: 1px solid white;
        }

        .search-container > input:focus::placeholder {
          font-weight: lighter;
        }

        .search-container > input::placeholder {
          font-weight: bolder;
        }

        .search-container > button {
          border-radius: 30px;
          text-transform: uppercase;
          margin-left: 1%;
          padding: 10px;
          width: 25%;
          cursor: pointer;
          border: 10px;
          background-color: #5C8374;
          color: white;
          padding: 0;
          margin: 7px;
          transition: background-color 0.3s ease-in-out; 
        }
        
        .search-container > button:hover {
          transform: scale(1.05);
          background-color: #407056; 
        }


        @media screen and (max-width: 768px) {
          .search-container {
            flex-direction: row; 
            align-items: stretch;
            padding: 10px;
          }

          .search-container > input {
            margin-bottom: 15px;
            width: 60%; 
          }

          .search-container > button {
            width: 30%; 
          }
        }
      </style>

      <div id="search-container" class="search-container">
        <input placeholder="Found your anime title here.." id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
      </div>
    `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
