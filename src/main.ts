import "./styles.css";
import { siteContent } from "./content";

const renderServiceCards = () =>
  siteContent.services
    .map(
      (service) => `
        <article class="service-card reveal">
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </article>
      `
    )
    .join("");

const renderGalleryItems = () =>
  siteContent.gallery
    .map(
      (item, index) => `
        <figure class="gallery-card reveal gallery-card-${index + 1}">
          <img src="${item.src}" alt="${item.alt}" loading="lazy" />
        </figure>
      `
    )
    .join("");

const renderTestimonials = () =>
  siteContent.testimonials
    .map(
      (testimonial) => `
        <article class="testimonial-card reveal">
          <p class="testimonial-quote">“${testimonial.quote}”</p>
          <p class="testimonial-name">${testimonial.name}</p>
        </article>
      `
    )
    .join("");

const renderContactActions = (className = "") =>
  siteContent.contactMethods
    .map(
      (method) => `
        <a class="cta-button ${className}" href="${method.href}" ${
          method.href.startsWith("https") ? 'target="_blank" rel="noreferrer"' : ""
        }>
          ${method.label}
          <span>${method.note}</span>
        </a>
      `
    )
    .join("");

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root was not found.");
}

app.innerHTML = `
  <div class="page-shell">
    <header class="site-header">
      <a class="brand-mark" href="#top" aria-label="Garden Bud home">
        <img src="${siteContent.logo.src}" alt="${siteContent.logo.alt}" />
      </a>
      <nav class="site-nav" aria-label="Primary">
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero-section">
        <div class="hero-copy reveal">
          <p class="eyebrow">${siteContent.location} garden care</p>
          <h1>${siteContent.heroTitle}</h1>
          <p class="hero-intro">${siteContent.heroIntro}</p>
          <div class="hero-actions">
            ${renderContactActions()}
          </div>
        </div>

        <div class="hero-media reveal">
          <div class="hero-image-wrap">
            <img
              src="${siteContent.heroImage.src}"
              alt="${siteContent.heroImage.alt}"
            />
          </div>
          <div class="hero-badge">
            <strong>${siteContent.businessName}</strong>
            <span>${siteContent.tagline}</span>
          </div>
        </div>
      </section>

      <section class="info-strip reveal" aria-label="Garden Bud introduction">
        <p>
          Garden Bud is designed for homeowners who want a polished garden without
          complicated arrangements. The tone is local, professional, and easy to trust.
        </p>
      </section>

      <section class="content-section" id="services">
        <div class="section-heading reveal">
          <p class="eyebrow">Services</p>
          <h2>Practical garden help that keeps things neat and manageable.</h2>
        </div>
        <div class="services-grid">
          ${renderServiceCards()}
        </div>
      </section>

      <section class="content-section gallery-section" id="gallery">
        <div class="section-heading reveal">
          <p class="eyebrow">Recent work</p>
          <h2>Healthy lawns, tidy borders, and gardens people can enjoy using.</h2>
        </div>
        <div class="gallery-grid">
          ${renderGalleryItems()}
        </div>
      </section>

      <section class="content-section about-section" id="about">
        <div class="about-card reveal">
          <div class="about-image">
            <img src="${siteContent.aboutImage.src}" alt="${siteContent.aboutImage.alt}" />
          </div>
          <div class="about-copy">
            <p class="eyebrow">About Tom</p>
            <h2>A friendly local gardener clients can feel comfortable dealing with.</h2>
            <p>
              Tom is positioned here as the person clients will actually speak to and see on site.
              That matters for this audience: straightforward communication, reliability, and a tidy
              finish are more convincing than flashy marketing.
            </p>
            <p>
              Before launch, replace this paragraph with Tom's own short introduction, experience,
              and service promise.
            </p>
          </div>
        </div>
      </section>

      <section class="content-section testimonials-section">
        <div class="section-heading reveal">
          <p class="eyebrow">Trust</p>
          <h2>Built to reassure first-time visitors quickly.</h2>
          <p class="section-note">${siteContent.trustNote}</p>
        </div>
        <div class="testimonials-grid">
          ${renderTestimonials()}
        </div>
      </section>

      <section class="content-section contact-section" id="contact">
        <div class="contact-panel reveal">
          <div class="contact-copy">
            <p class="eyebrow">Contact</p>
            <h2>Speak to Tom about regular maintenance or a one-off tidy-up.</h2>
            <p>
              Garden Bud is currently positioned as a Sheffield-focused service for homeowners who
              want dependable help keeping their gardens in good order.
            </p>
            <p class="section-note">${siteContent.contactDisclaimer}</p>
          </div>
          <div class="contact-actions">
            ${renderContactActions("contact-button")}
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p>${siteContent.businessName} | ${siteContent.tagline}</p>
      <p>Sheffield-focused garden maintenance.</p>
    </footer>
  </div>
`;
