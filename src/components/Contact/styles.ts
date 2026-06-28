import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;

  .contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: flex-start;
  }

  .contact-info {
    header {
      text-align: left;
      margin-bottom: 3rem;
      h2 {
        text-align: left;
        font-size: 4rem;
        color: var(--green);
        margin-bottom: 1.5rem;
      }
      p {
        color: var(--text-color);
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.5;
      }
    }
  }

  .contacts {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .contact-card {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 2rem;
      background: var(--card-bg);
      backdrop-filter: blur(5px);
      border: 1px solid var(--card-border);
      border-radius: 1.4rem;
      padding: 2rem 2.8rem;
      transition: all 0.3s ease;
      
      img {
        width: 4rem;
        transition: transform 0.3s ease;
        filter: var(--svg-invert, brightness(0) invert(1));
      }
      a {
        color: var(--text-color);
        font-weight: 500;
        font-size: 1.6rem;
        transition: all 0.3s ease;
      }
      &:hover {
        transform: translateX(10px);
        background: var(--card-hover);
        border: 1px solid var(--green);
        box-shadow: 0 10px 30px rgba(35, 206, 107, 0.2);
        a {
          color: var(--green);
        }
        img {
          transform: scale(1.1);
        }
      }
    }
  }

  .contact-form-container {
    background: var(--card-bg);
    backdrop-filter: blur(5px);
    border: 1px solid var(--card-border);
    border-radius: 2rem;
    padding: 3rem;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }

  @media(max-width: 960px){
    .contact-content {
      grid-template-columns: 1fr;
      gap: 4rem;
    }
    
    .contact-info {
      header {
        text-align: center;
        h2 {
          text-align: center;
        }
      }
    }

    .contacts {
      .contact-card {
        justify-content: center;
        &:hover {
          transform: translateY(-5px);
        }
      }
    }
    
    .contact-form-container {
      padding: 2rem 1.5rem;
    }
  }
`;
