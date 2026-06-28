import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  .hard-skills{
    margin-top: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease;

    img{
      width: 3.4rem;
      transition: all 0.3s ease;
    }

    &:hover img {
      transform: scale(1.1);
      filter: drop-shadow(0 0 10px rgba(35, 206, 107, 0.5));
    }

    &.skill-badge{
      span{
        background: linear-gradient(135deg, rgba(35, 206, 107, 0.1) 0%, rgba(29, 185, 84, 0.2) 100%);
        border: 1px solid var(--green);
        color: #fff; /* Keep this white since background gradient is green */
        padding: 0.6rem 1.6rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        font-weight: 500;
        white-space: nowrap;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        transition: all 0.3s ease;

        &:hover{
          transform: translateY(-3px);
          background: linear-gradient(135deg, var(--green) 0%, #1db954 100%);
          box-shadow: 0 5px 15px rgba(35, 206, 107, 0.4);
        }
      }
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 400;
    line-height: 1.8;
    color: var(--text-color);
  }
  
  



  @media (max-width: 960px){
    display: flex;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
  }

`