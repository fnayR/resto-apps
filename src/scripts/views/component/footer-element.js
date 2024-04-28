class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>
        Copyright &#169; 2024 &#8208; Resto Apps
      </p>
      `;
  }
}

customElements.define('footer-element', FooterElement);
