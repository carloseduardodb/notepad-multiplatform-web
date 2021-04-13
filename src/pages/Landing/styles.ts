import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100vh;

  div.texts {
    min-width: 550px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    justify-content: center;
    width: 40%;
    height: 100%;
    background-color: white;
    h1 {
      font-size: 4em;
      color: #f6644d;
      span {
        color: #fff;
      }
    }
    p {
      margin-top: 50px;
      margin-bottom: 20px;
      font-size: 15pt;
      color: #fff;
    }

    div.content-btn {
      z-index: 999;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      p {
        font-size: 12pt;
      }
    }

    button {
      min-width: max-content;
      height: 70px;
      font-weight: bold;
      font-size: 1.2em;
    }
  }

  div.entry-or-register {
    position: absolute;
    div.image {
      z-index: -1;
      position: relative;
      width: 100vw;
      height: 100vh;
      filter: blur(2px) brightness(38%) contrast(150%)
        drop-shadow(3px 3px 1px #011126) grayscale(28%) hue-rotate(218deg)
        invert(0%) opacity(100%) saturate(100%) sepia(0%);
      background: #fff center/100%
        url('https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');
    }
  }
`;
