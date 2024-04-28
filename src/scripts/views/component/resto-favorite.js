class RestoFavorite extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2>
        <span class="content-title">Favorited Restaurant</span>
      </h2>
  
      <div id="resto-list" class="row resto-list"></div>
      `;
  }
}

customElements.define('resto-favorite', RestoFavorite);
