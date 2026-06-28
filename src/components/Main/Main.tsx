import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import { KeyStatistics } from "../KeyStatistics/KeyStatistics";
import { Experience } from "../Experience/Experience";
import { Testimonial } from "../Testimonial/Testimonial";
import { LighthouseMetrics } from "../LighthouseMetrics/LighthouseMetrics";

export function Main() {
  return (

    <Container>

      <Hero></Hero>
      <KeyStatistics></KeyStatistics>
      <About></About>
      <LighthouseMetrics></LighthouseMetrics>
      <Experience></Experience>
      <Project></Project>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </Container>
  );
}