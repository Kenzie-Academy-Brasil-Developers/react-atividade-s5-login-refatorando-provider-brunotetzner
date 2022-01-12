import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    border-bottom: 2px solid white;
    padding-bottom: 10px;
  }
  label {
    color: darkblue;
    margin-left: 4px;

    background-color: white;
    padding: 5px;
    border-radius: 10px;
  }
  input {
    border: 0;
    padding: 8px;
    border-radius: 8px;
  }
  span {
    color: red;
    font-size: 12px;
    padding: 3px;
    margin-bottom: 8px;
    font-family: sans-serif;
    font-weight: bold;
  }

  @media (min-width: 600px) {
    border: 1px solid white;
    width: 40vw;
    height: 50vh;
    background: rgba(255, 255, 255, 0.35);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
  @media (min-width: 1000px) {
    width: 25vw;
  }
`;
