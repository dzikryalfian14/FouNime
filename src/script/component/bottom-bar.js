class BottomBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          background-color: #183D3D;
          color: white;
          box-shadow: 0 -4px 8px 0 rgba(0, 0, 0, 0.2); 
          text-align: center; 
          padding: 16px;
          position: fixed;
          bottom: 0;
          left: 0;
        }

        p {
          font-size: 14px;
          margin: 0;
          padding : 16px;
        }

        a {
          color: white;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      </style>

      <footer>
        <p>Was created by Dzikry Alfian &copy; ${(new Date().getFullYear())} - Found Your Anime Series in <b>fouNime</b></p>
      </footer>
    `;
  }
}

customElements.define('bottom-bar', BottomBar);
