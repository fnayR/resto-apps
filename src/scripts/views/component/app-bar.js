class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav id="nav" class="menu">
        <h1>
          <a href="./" title="Brand">Resto Apps</a>
        </h1>
        <button class="menu-button" title="off canvas button" aria-label="off canvas button">
            <i class="fas fa-times"></i>
            <i class="fas fa-bars"></i>
        </button>
        <ul class="menu-list">
            <li><a href="./" title="Link to homepage">Home</a></li>
            <li><a href="#/favorite" title="Link to favorite page">Favorite</a></li>
            <li><a href="https://github.com/fnayR" title="Link to about us" target="_blank" rel="noopener noreferrer">About Us</a></li>
        </ul>
      </nav>
      `;
  }
}

customElements.define('app-bar', AppBar);
