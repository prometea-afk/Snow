// HEADER TEMPLATE

class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        
        <div class="container-fluid container-nav">
      <div class="row row__90">
        <div class="col-lg-3 col-md-12 col-sm-12">
          <div class="logo-box">
            <img src="./img/logo.png" alt="logo" class="logo" />
          </div>
        </div>

        <div class="col-lg-9 col-md-12 col-sm-12">
          <nav class="navigation__nav">
            <input type="checkbox" id="check" />
            <label for="check" class="checkbtn">
              <i class="fas fa-bars"></i>
            </label>

            <ul class="navigation__list">
              <li class="navigation__item">
                <a href="index.html" class="navigation__link"> Home</a>
              </li>
              <li class="navigation__item">
                <a href="portfolio.html" class="navigation__link">Portfolio</a>
              </li>
              <li class="navigation__item">
                <a href="blog.html" class="navigation__link">Blog</a>
              </li>
              <li class="navigation__item">
                <a href="portofolioSingle.html" class="navigation__link"
                  >Portfolio Single</a
                >
              </li>
              <li class="navigation__item">
                <a href="blogSingle.html" class="navigation__link"
                  >Blog Single</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
        
        `;
  }
}

customElements.define("my-header", myHeader);
