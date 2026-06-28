import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        
        {/* Project 1 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://parkin.ae/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Parkin.ae</h3>
              <p>
                Developed core frontend architecture using React.js and Next.js, optimizing API integration and performance. Leveraged AI tools (Cursor AI, GitHub Copilot) for rapid component scaffolding and automated unit testing.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Next.js</li>
                <li>AI Tools</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Project 2 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://adai.art/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Adai.art</h3>
              <p>
                Engineered a highly responsive UI utilizing Laravel Blade and Tailwind CSS. Implemented AI-driven design-to-code workflows to improve cross-device usability by 25%.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Laravel</li>
                <li>Tailwind CSS</li>
                <li>Figma</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Project 3 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://bionutrica.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Bionutrica</h3>
              <p>
                Engineered a custom Shopify Liquid storefront with advanced product filtering and AJAX-based cart logic; performed deep eCommerce performance tuning to reduce page load by 40%.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Shopify Liquid</li>
                <li>JavaScript</li>
                <li>eCommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Project 4 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://krimshospitals.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>KRIMS Hospitals</h3>
              <p>
                Developed a full-stack WordPress healthcare portal featuring custom post types for patient records and a secure appointment booking system integrated via PHP and Elementor.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>WordPress</li>
                <li>PHP</li>
                <li>Elementor</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Project 5 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://kresus.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Kresus</h3>
              <p>
                Architected a complex WordPress theme from scratch, utilizing custom backend logic and REST API integrations to synchronize real-time data from third-party financial services.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>WordPress</li>
                <li>REST API</li>
                <li>Custom Theme</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}