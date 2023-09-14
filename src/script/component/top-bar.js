class TopBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback(){
    this.render();
  }
 
  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          background-color: #183D3D;
          color: white;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          font-family: 'Arial', sans-serif; 
          height: 100px; 
        }
        h2 {
          font-size: 24px; 
          margin-bottom: 10px;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
      
      <h2>FouNime</h2>
      <h3>Find Your Favorite Anime Serials!</h3>
    
    `;
  }  
}
customElements.define('top-bar', TopBar);