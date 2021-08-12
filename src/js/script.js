import "bootstrap";
import "./header";

// FOOTER TEMPLATE

class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
    <div class="container-fluid container-footer">
      <div class="row row__80">
        <div class="col-lg-4 col-md-12 col-sm-12 footer__widget">
          <h3 class="h3 footer__title">About Us</h3>
          <p class="text-box__paragraph footer__paragraph">
            Aenean mattis augue in arcu tempor bibendum. Nam euismod facilisis
            magna, quis pharetra turpis molestie eu. Integer feugiat arcu sit
            amet leo ullamcorper feugiat efficitur.
          </p>
          <img
            src="img/facebook.png"
            alt="facebook"
            class="footer__img rounded float-left"
          />
          <img
            src="/img/twitter.png"
            alt="twitter"
            class="footer__img rounded float-left"
          />
          <img
            src="/img/google plus.png"
            alt="google"
            class="footer__img rounded float-left"
          />
          <img
            src="/img/behance.png"
            alt="behance"
            class="footer__img rounded float-left"
          />
          <img
            src="/img/pinterest.png"
            alt="pinterest"
            class="footer__img rounded float-left"
          />
          <img
            src="/img/instagram.png"
            alt="instagram"
            class="footer__img rounded float-left"
          />
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 footer__widget">
          <h3 class="h3 footer__title">Latest Tweets</h3>
          <div class="feature-box">
            <div class="feature-box__left">
              <img
                src="img/twitter.png"
                alt="twitter"
                class="feature-box__icon footer__img2"
              />
            </div>
            <div class="feature-box__right">
              <p class="text-box__paragraph footer__paragraph__3">
                Duis eget finibus nibh. Vivamus sagittis vulputate risus ac
                tincidunt.
              </p>
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box__left">
              <img
                src="img/twitter.png"
                alt="twitter"
                class="feature-box__icon footer__img2"
              />
            </div>
            <div class="feature-box__right">
              <p class="text-box__paragraph footer__paragraph__3">
                Nam semper tortor sit amet arcu malesu ada, a sagittis tellus
                facilisis.
              </p>
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box__left">
              <img
                src="img/twitter.png"
                alt="twitter"
                class="feature-box__icon footer__img2"
              />
            </div>
            <div class="feature-box__right">
              <p class="text-box__paragraph footer__paragraph__3">
                Etiam cursus, tortor id pretium tincidunt, justo leo porta
                magna.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 footer__widget">
          <h3 class="h3 footer__title">Instagram</h3>
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12 footer__insta">
              <img src="#" alt="#" />
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 footer__insta">
              <img src="#" alt="#" />
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 footer__insta">
              <img src="#" alt="#" />
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 footer__insta">
              <img src="#" alt="#" />
            </div>
          </div>
          <div class="row footer__row">
            <div class="col-lg-3 col-md-6 col-sm-12 footer__insta">
              <img src="#" alt="#" class="img-thumbnail" />
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 footer__insta">
              <img src="#" alt="#" class="img-thumbnail" />
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 footer__insta">
              <img src="#" alt="#" class="img-thumbnail" />
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 footer__insta">
              <img src="#" alt="#" class="img-thumbnail" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

          `;
  }
}

customElements.define("my-footer", myFooter);
// customElements.define("my-header", myHeader);
