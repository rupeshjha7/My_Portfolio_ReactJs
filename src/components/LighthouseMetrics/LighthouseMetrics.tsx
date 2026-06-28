import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import CountUp from "react-countup";

export function LighthouseMetrics() {
  return (
    <Container id="lighthouse-metrics">
      <ScrollAnimation animateIn="fadeInUp">
        <h2>Lighthouse Metrics</h2>
      </ScrollAnimation>
      
      <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
        <div className="metrics-container">
          
          <div className="metric metric-95">
            <div className="svg-box">
              <svg>
                <circle className="circle-bg" cx="60" cy="60" r="54"></circle>
                <circle className="circle-progress" cx="60" cy="60" r="54"></circle>
              </svg>
              <div className="score-text">
                <CountUp end={95} duration={2} enableScrollSpy scrollSpyOnce />+
              </div>
            </div>
            <div className="label">Performance</div>
          </div>

          <div className="metric metric-100">
            <div className="svg-box">
              <svg>
                <circle className="circle-bg" cx="60" cy="60" r="54"></circle>
                <circle className="circle-progress" cx="60" cy="60" r="54"></circle>
              </svg>
              <div className="score-text">
                <CountUp end={100} duration={2} enableScrollSpy scrollSpyOnce />
              </div>
            </div>
            <div className="label">Accessibility</div>
          </div>

          <div className="metric metric-100">
            <div className="svg-box">
              <svg>
                <circle className="circle-bg" cx="60" cy="60" r="54"></circle>
                <circle className="circle-progress" cx="60" cy="60" r="54"></circle>
              </svg>
              <div className="score-text">
                <CountUp end={100} duration={2} enableScrollSpy scrollSpyOnce />
              </div>
            </div>
            <div className="label">Best Practices</div>
          </div>

          <div className="metric metric-100">
            <div className="svg-box">
              <svg>
                <circle className="circle-bg" cx="60" cy="60" r="54"></circle>
                <circle className="circle-progress" cx="60" cy="60" r="54"></circle>
              </svg>
              <div className="score-text">
                <CountUp end={100} duration={2} enableScrollSpy scrollSpyOnce />
              </div>
            </div>
            <div className="label">SEO</div>
          </div>

        </div>
      </ScrollAnimation>
    </Container>
  );
}
