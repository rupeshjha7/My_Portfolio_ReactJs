import { Container } from "./styles";

import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";


export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Frontend, Full-Stack WordPress, and Shopify Developer with 4.9+ years of experience architecting scalable, high-performance web applications. Expert in modern React/Next.js frontend ecosystems and complex CMS/eCommerce integrations.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            Proven track record of optimizing browser rendering pipelines, implementing robust testing strategies, and leading strategic technical decisions that directly impact business growth. Skilled in bridging the gap between design and high-velocity engineering.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            I leverage AI-assisted workflows (Cursor AI, GitHub Copilot, Claude) to drive efficiency, maintainability, and enterprise-grade performance, consistently achieving Lighthouse scores of 90+ across high-traffic platforms.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills :</h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={wordpress} alt="Wordpress" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={shopify} alt="Shopify" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={mysqlIcon} alt="MySQL" />
            </ScrollAnimation>
          </div>

          <div className="hability skill-badge">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <span>NextJS</span>
            </ScrollAnimation>
          </div>

          <div className="hability skill-badge">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <span>Redux</span>
            </ScrollAnimation>
          </div>

          <div className="hability skill-badge">
            <ScrollAnimation animateIn="fadeInUp" delay={0.21 * 1000}>
              <span>Tailwind CSS</span>
            </ScrollAnimation>
          </div>

          <div className="hability skill-badge">
            <ScrollAnimation animateIn="fadeInUp" delay={0.22 * 1000}>
              <span>Material-UI</span>
            </ScrollAnimation>
          </div>

          <div className="hability skill-badge">
            <ScrollAnimation animateIn="fadeInUp" delay={0.23 * 1000}>
              <span>Playwright</span>
            </ScrollAnimation>
          </div>

          <div className="hability skill-badge">
            <ScrollAnimation animateIn="fadeInUp" delay={0.24 * 1000}>
              <span>Cursor AI</span>
            </ScrollAnimation>
          </div>

          <div className="hability skill-badge">
            <ScrollAnimation animateIn="fadeInUp" delay={0.25 * 1000}>
              <span>PHP</span>
            </ScrollAnimation>
          </div>

          <div className="hability skill-badge">
            <ScrollAnimation animateIn="fadeInUp" delay={0.26 * 1000}>
              <span>Git</span>
            </ScrollAnimation>
          </div>

          <div className="hability skill-badge">
            <ScrollAnimation animateIn="fadeInUp" delay={0.27 * 1000}>
              <span>Figma</span>
            </ScrollAnimation>
          </div>

          <div className="hability skill-badge">
            <ScrollAnimation animateIn="fadeInUp" delay={0.28 * 1000}>
              <span>Copilot</span>
            </ScrollAnimation>
          </div>

        </div>
      </div>
    </Container>
  )
}
