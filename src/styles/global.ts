import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root{
    --pink: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;
    
    --bg-color: #212121;
    --text-color: #FFFFFF;
    --card-bg: rgba(43, 43, 43, 0.4);
    --card-hover: rgba(43, 43, 43, 0.7);
    --card-border: rgba(255, 255, 255, 0.1);
    --svg-invert: brightness(0) invert(1);
    
    scroll-padding-top: 10rem;

    &.light{
      --bg-color: #f5f5f5;
      --text-color: #212121;
      --card-bg: rgba(255, 255, 255, 0.7);
      --card-hover: rgba(255, 255, 255, 0.9);
      --card-border: rgba(0, 0, 0, 0.1);
      --svg-invert: brightness(0);

      body{
        transition: 0.5s;
        background-color: var(--bg-color);
        color: var(--text-color);
      }

      .logo{
        color: var(--black);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: #f5f5f550;
        a{
          transition: 0.5s;
          color: black;
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--black); 
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
      }

      footer.footer{
        transition: 0.5s;
        background-color: rgba(0,0,0,0.1);
        color: var(--black);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--black);
          color: var(--black);
          &::placeholder{
            transition: 0.5s;
            color: var(--black);
          }
        }
      }

    }
  }



  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--bg-color);
    background-image: 
      radial-gradient(at 0% 0%, rgba(35, 206, 107, 0.08) 0px, transparent 50%),
      radial-gradient(at 100% 0%, rgba(227, 31, 113, 0.08) 0px, transparent 50%);
    background-attachment: fixed;
    color: var(--text-color);
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--black);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--green);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--pink);
  }

  body, input, textarea, button{
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }


  .logo{
    font-size: 3rem;
    color: var(--text-color);
    // &::first-letter{
    //   color: var(--green);
    // }
  }
  

`