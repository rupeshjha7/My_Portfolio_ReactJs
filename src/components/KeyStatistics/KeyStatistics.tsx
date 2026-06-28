import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import CountUp from "react-countup";

export function KeyStatistics() {
  return (
    <Container id="statistics">
      <ScrollAnimation animateIn="fadeInUp">
        <div className="stat-card">
          <h3>
            <CountUp end={4.9} decimals={1} duration={3} enableScrollSpy scrollSpyOnce />+
          </h3>
          <p>Years of Experience</p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
        <div className="stat-card">
          <h3>
            <CountUp end={50} duration={3} enableScrollSpy scrollSpyOnce />+
          </h3>
          <p>Projects Completed</p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
        <div className="stat-card">
          <h3>
            <CountUp end={40} duration={3} enableScrollSpy scrollSpyOnce />+
          </h3>
          <p>Happy Clients</p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
        <div className="stat-card">
          <h3>
            <CountUp end={15} duration={3} enableScrollSpy scrollSpyOnce />+
          </h3>
          <p>Technologies Mastered</p>
        </div>
      </ScrollAnimation>
    </Container>
  );
}
