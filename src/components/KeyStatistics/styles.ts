import styled from "styled-components";

export const Container = styled.section`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 0;

  .stat-card {
    background: var(--card-bg);
    backdrop-filter: blur(15px);
    border: 1px solid var(--card-border);
    padding: 3rem 2rem;
    border-radius: 1.2rem;
    text-align: center;
    transition: all 0.3s ease;
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
      transform: translateY(-8px);
      background: var(--card-hover);
      border: 1px solid var(--green);
      box-shadow: 0 15px 40px rgba(35, 206, 107, 0.3);

      h3 {
        // Keeps gradient when hovering
      }
    }

    h3 {
      font-size: 5rem;
      background: linear-gradient(135deg, var(--green) 0%, #1db954 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1rem;
      transition: 0.3s;
    }

    p {
      font-size: 1.8rem;
      font-weight: 500;
      letter-spacing: 0.1rem;
    }
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    margin-top: 5rem;
  }
`;
