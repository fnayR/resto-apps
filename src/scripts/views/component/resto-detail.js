class RestoDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2>
        <span class="content-title">Detail Restaurant</span>
      </h2>
  
      <div id="resto-detail" class="row"></div>
      <div id="favoriteButtonContainer"></div>
      `;
  }
}

customElements.define('resto-detail', RestoDetail);
