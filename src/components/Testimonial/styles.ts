import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 5rem;
    color: var(--green);
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 1rem;

    .testimonial-card {
      padding: 3rem;
      background: var(--card-bg);
      backdrop-filter: blur(5px);
      border: 1px solid var(--card-border);
      border-radius: 1.5rem;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      position: relative;

      &:hover {
        transform: translateY(-8px);
        background: var(--card-hover);
        border: 1px solid var(--green);
        box-shadow: 0 10px 30px rgba(35, 206, 107, 0.2);
      }

      .quote-icon {
        font-size: 4rem;
        color: rgba(35, 206, 107, 0.2);
        position: absolute;
        top: 2rem;
        right: 2rem;
      }

      p.review {
        font-size: 1.6rem;
        color: var(--text-color);
        line-height: 1.8;
        font-style: italic;
        margin-bottom: 3rem;
        flex-grow: 1;
        z-index: 1;
      }

      .client-info {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        .avatar {
          width: 5rem;
          height: 5rem;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--green), var(--pink));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
        }

        .details {
          display: flex;
          flex-direction: column;

          h4 {
            font-size: 1.8rem;
            color: var(--text-color);
            margin: 0;
          }

          span {
            font-size: 1.4rem;
            color: var(--green);
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    .testimonials-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .testimonials-grid {
      grid-template-columns: 1fr;
    }
  }
`;
