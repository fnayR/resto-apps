class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <picture>
          <source media="(max-width: 600px)" srcset="./images/heros/hero-image-small.jpg">
          <img src="./images/heros/hero-image-large.jpg"
            alt="Hero image">
        </picture>
        <div class="inner">
            <h1 class="title">Resto Apps</h1>
            <p class="text">
              Discover the best local restaurants in a few clicks!
            </p>
        </div>
      </div>
      `;
  }
}

customElements.define('hero-element', HeroElement);
