import { Container } from "./styles";
import RupeshJha from "../../assets/pic-profile.jpg";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
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
          I am a Dynamic Web Developer with 5+ years of proven expertise in designing and developing high-performance, responsive web applications. Specialized in translating complex design mockups from Figma into pixel-perfect, fully functional user interfaces while maintaining code quality and performance standards.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          My technical stack encompasses modern front-end frameworks (React, NextJS), state management (Redux), and advanced styling solutions (Tailwind CSS, Material-UI). I have extensive CMS expertise including WordPress theme development, WooCommerce integration, PHP, and Shopify Liquid programming. Additionally, I'm proficient in backend technologies like Laravel and Drupal, enabling me to deliver comprehensive full-stack solutions.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          With a strong foundation in responsive design, cross-browser compatibility testing, and agile development practices, I consistently deliver solutions that enhance user engagement and drive business results. I'm adept at collaborating with cross-functional teams, version control systems (Git/Bitbucket), and design tools (Figma), while maintaining a commitment to clean code and best practices.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
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
              <span>Drupal</span>
            </ScrollAnimation>
          </div>

          <div className="hability skill-badge">
            <ScrollAnimation animateIn="fadeInUp" delay={0.24 * 1000}>
              <span>Laravel</span>
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

        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={RupeshJha} alt="Rupesh Jha" className="rounded"/>
        </ScrollAnimation>
      </div>
    </Container>
  )
}
