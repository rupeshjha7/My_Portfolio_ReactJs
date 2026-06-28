import styled, { keyframes } from "styled-components";

const fillAnimation = (offset: number) => keyframes`
  0% {
    stroke-dashoffset: 339.292;
  }
  100% {
    stroke-dashoffset: ${offset};
  }
`;

export const Container = styled.section`
  margin-top: 10rem;
  
  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 5rem;
  }

  .metrics-container {
    display: flex;
    justify-content: center;
    gap: 4rem;
    flex-wrap: wrap;
    background-color: var(--card-bg);
    padding: 4rem;
    border-radius: 2rem;
    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.2);
    border: 1px solid var(--card-border);
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(15px);
    
    &::before {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle at center, rgba(35, 206, 107, 0.05) 0%, transparent 50%);
      pointer-events: none;
    }
  }

  .metric {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .svg-box {
    position: relative;
    width: 120px;
    height: 120px;
    margin-bottom: 1.5rem;
  }

  svg {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }

  .circle-bg {
    fill: none;
    stroke: rgba(255, 255, 255, 0.1);
    stroke-width: 8;
  }

  .circle-progress {
    fill: none;
    stroke: var(--green);
    stroke-width: 8;
    stroke-linecap: round;
    stroke-dasharray: 339.292;
  }

  .metric-95 .circle-progress {
    stroke-dashoffset: 339.292;
    animation: ${fillAnimation(339.292 - (339.292 * 0.95))} 2s ease-out forwards;
  }
  
  .metric-100 .circle-progress {
    stroke-dashoffset: 339.292;
    animation: ${fillAnimation(0)} 2s ease-out forwards;
  }

  .score-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--green);
  }

  .label {
    font-size: 1.6rem;
    color: var(--text-color);
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }

  @media (max-width: 960px) {
    .metrics-container {
      gap: 3rem;
      padding: 3rem 2rem;
    }
    
    .svg-box {
      width: 100px;
      height: 100px;
    }
    
    .score-text {
      font-size: 2.2rem;
    }
    
    .label {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 768px) {
    .metrics-container {
      gap: 2.5rem;
      flex-direction: row;
      flex-wrap: wrap;
    }
    
    .metric {
      width: 40%;
    }
  }
`;
