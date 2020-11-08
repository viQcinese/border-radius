import styled from 'styled-components';

export const CodeContainer = styled.div`
  position: relative;

  button {
    cursor: pointer;
    position: absolute;
    background: none;
    font-size: 20px;
    top: 12px;
    right: 12px;
    color: #eee;
  }

  textarea {
    position: absolute;
    top: -1000px;
  }
`;
