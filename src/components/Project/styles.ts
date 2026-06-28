import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      padding: 2rem 1.8rem;
      background-color: var(--card-bg);
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      color: var(--text-color);
      backdrop-filter: blur(15px);
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      
      &:hover{
        transform: translateY(-10px);
        background: var(--card-hover);
        border: 1px solid var(--green);
        box-shadow: 0 15px 40px rgba(35, 206, 107, 0.3);
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 5.0rem;
        }
      }
      
      h3{
        margin-bottom: 1.5rem;
        font-size: 2.2rem;
        color: var(--green);
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        line-height: 1.6;
        color: var(--text-color);
        a{
          color: var(--text-color);
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.2rem;
          flex-wrap: wrap;

          li{
            background: rgba(35, 206, 107, 0.1);
            color: var(--green);
            padding: 0.6rem 1.4rem;
            border-radius: 2rem;
            font-weight: 500;
            border: 1px solid rgba(35, 206, 107, 0.2);
          }
        }
      }

    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
  }
`