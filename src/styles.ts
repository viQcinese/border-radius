import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', 'sans-serif';
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #EDF3FA;
  }
`;

export const Container = styled.div`
  width: 600px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > div {
    padding: 24px;
    background: white;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.8);
  }
`;

export const SlidersContainer = styled.div``;

export const SlidersAndBorder = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Header = styled.div`
  margin-bottom: 16px;
  user-select: none;

  h1 {
    color: #444;
  }

  p {
    color: #888;
  }
`;

export const Display = styled.span`
  font-size: 16px;
  color: #444;
  user-select: none;
`;

interface ILiveBorderContainer {
  borderRadius: string;
}

export const LiveBorderContainer = styled.div<ILiveBorderContainer>`
  margin-left: 80px;
  padding: 50px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 200px;
    height: 200px;
    border: 2px solid #0075ff;
    /* background: #0075ff; */

    border-radius: ${props => props.borderRadius};
  }
`;
