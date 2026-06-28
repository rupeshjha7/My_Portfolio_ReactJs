import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Experience() {
  return (
    <Container id="experience">
      <h2>Experience</h2>
      <div className="experience-grid">
        <ScrollAnimation animateIn="fadeInUp">
          <div className="experience-card">
            <div className="header">
              <h3>Web/UI Developer</h3>
              <span className="duration">Oct 2024 - Present</span>
            </div>
            <div className="company">Mobiiworld FZ LLC</div>
            <p>
              Spearheaded the architecture of high-performance React.js and Next.js enterprise platforms (e.g., Parkin.ae), resulting in a 40% improvement in load speeds. Leveraged AI-assisted development tools (Cursor AI, Copilot) to reduce development time by 35%. Architected headless WordPress integrations and high-performance Shopify Liquid logic.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <div className="experience-card">
            <div className="header">
              <h3>Web/UI Developer</h3>
              <span className="duration">Apr 2023 - Apr 2024</span>
            </div>
            <div className="company">NetObjex India Pvt Ltd</div>
            <p>
              Engineered scalable React.js and Next.js applications, achieving a 30% latency reduction. Integrated AI-driven debugging tools to accelerate troubleshooting cycles. Delivered end-to-end WordPress and Shopify solutions with advanced eCommerce performance tuning and complex backend API integrations.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <div className="experience-card">
            <div className="header">
              <h3>Web Developer</h3>
              <span className="duration">Jul 2021 - Jul 2022</span>
            </div>
            <div className="company">Coincrowd Ltd</div>
            <p>
              Developed modular React.js components and reusable frontend systems. Improved deployment speed and maintainability through component-driven architecture. Executed eCommerce migrations and improved website performance and Lighthouse scores.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <div className="experience-card">
            <div className="header">
              <h3>Web Developer</h3>
              <span className="duration">May 2019 - Jun 2021</span>
            </div>
            <div className="company">Radical Stack Ltd</div>
            <p>
              Integrated modern React interfaces with CMS platforms and third-party APIs. Built responsive and cross-browser compatible user interfaces, delivering user-focused web experiences while improving performance and maintainability.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
