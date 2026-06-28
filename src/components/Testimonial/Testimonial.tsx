import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Testimonial() {
  return (
    <Container id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        <ScrollAnimation animateIn="fadeInUp">
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="review">
              Rupesh is an exceptional developer. His attention to detail and ability to translate our Figma designs into a flawless, high-performance React application was truly impressive. Highly recommended!
            </p>
            <div className="client-info">
              <div className="avatar">JD</div>
              <div className="details">
                <h4>John Doe</h4>
                <span>CEO, Tech StartUp</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="review">
              Working with Rupesh on our Shopify store redesign was a breeze. He delivered the project ahead of schedule, and the new site has significantly improved our conversion rate. A true professional.
            </p>
            <div className="client-info">
              <div className="avatar">SJ</div>
              <div className="details">
                <h4>Sarah Jenkins</h4>
                <span>Founder, E-commerce Brand</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="review">
              We needed a complex custom WordPress theme built from scratch, and Rupesh delivered beyond our expectations. His code is clean, well-documented, and incredibly fast. We will definitely hire him again.
            </p>
            <div className="client-info">
              <div className="avatar">ML</div>
              <div className="details">
                <h4>Michael Lee</h4>
                <span>Marketing Director</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
