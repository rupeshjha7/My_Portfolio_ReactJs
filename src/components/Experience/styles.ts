import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 5rem;
    color: var(--green);
  }

  .experience-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    max-width: 800px;
    margin: 0 auto;

    .experience-card {
      padding: 3rem;
      background: var(--card-bg);
      backdrop-filter: blur(5px);
      border: 1px solid var(--card-border);
      border-radius: 1.5rem;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;

      &:hover {
        transform: translateY(-8px);
        background: var(--card-hover);
        border: 1px solid var(--green);
        box-shadow: 0 10px 30px rgba(35, 206, 107, 0.2);
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;

        h3 {
          font-size: 2.2rem;
          color: var(--text-color);
          margin: 0;
        }

        .duration {
          font-size: 1.4rem;
          color: var(--green);
          font-weight: 500;
          background: rgba(35, 206, 107, 0.1);
          padding: 0.5rem 1.5rem;
          border-radius: 2rem;
        }
      }

      .company {
        font-size: 1.6rem;
        color: var(--blue);
        margin-bottom: 1.5rem;
        font-weight: 600;
        letter-spacing: 0.1rem;
      }

      p {
        font-size: 1.6rem;
        color: var(--text-color);
        line-height: 1.8;
      }
    }
  }

  @media (max-width: 768px) {
    .experience-grid {
      .experience-card {
        .header {
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
        }
      }
    }
  }
`;
