import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .hero-text{
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
      background: linear-gradient(135deg, var(--green) 0%, #1db954 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1rem;
      filter: drop-shadow(0px 4px 10px rgba(35, 206, 107, 0.3));
    }

    h3{
      color: var(--green);
      margin: 1.5rem 0;
      font-size: 2.4rem;
      font-weight: 500;
      letter-spacing: 0.1rem;
    }
    
    p.small-resume {
      margin-bottom: 5rem;
      font-size: 1.8rem;
      color: var(--text-color);
      line-height: 1.6;
      max-width: 600px;
    }
  }
// New added
  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:5rem;
    padding-left:1rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5rem;
      height: 5rem;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border-radius: 50%;
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
        background: rgba(35, 206, 107, 0.2);
        box-shadow: 0 5px 15px rgba(35, 206, 107, 0.3);
      }
    }

    img,span{
      font-size: 3rem;
      width: 2.5rem;
    }
  }


  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
    box-shadow: 0 4px 15px rgba(35, 206, 107, 0.4);
    transition: all 0.3s ease;
    
    &:hover {
      box-shadow: 0 6px 20px rgba(35, 206, 107, 0.6);
      transform: translateY(-3px);
    }
  }

  .hero-image{
    img{
      max-width: 500px;
      animation: ${float} 6s ease-in-out infinite;
      filter: drop-shadow(0 10px 20px rgba(35, 206, 107, 0.2));
    }
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }
  @media(max-width: 480px){
    margin-top: 45%;
  }
`