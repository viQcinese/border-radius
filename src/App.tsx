import React, { useCallback, useEffect, useState } from 'react';

import Slider from './Slider';
import CodeSnippet from './CodeSnippet';

import {
  GlobalStyle,
  Container,
  Header,
  SlidersContainer,
  Display,
  LiveBorderContainer,
  SlidersAndBorder,
} from './styles';

const App: React.FC = () => {
  const [topLeft, setTopLeft] = useState('0');
  const [topRight, setTopRight] = useState('0');
  const [bottomRight, setBottomRight] = useState('0');
  const [bottomLeft, setBottomLeft] = useState('0');
  const [formattedBorderRadius, setFormattedBorderRadius] = useState('');

  const handleSetTopLeft = useCallback(data => {
    setTopLeft(data);
  }, []);

  const handleSetTopRight = useCallback(data => {
    setTopRight(data);
  }, []);

  const handleSetBottomRight = useCallback(data => {
    setBottomRight(data);
  }, []);

  const handleSetBottomLeft = useCallback(data => {
    setBottomLeft(data);
  }, []);

  useEffect(() => {
    const f = `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`;
    setFormattedBorderRadius(f);
  }, [topLeft, topRight, bottomRight, bottomLeft]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <div>
          <Header>
            <h1>Border Radius</h1>
            <p>Use the sliders to see the effect of border radius property</p>
          </Header>

          <SlidersAndBorder>
            <SlidersContainer>
              <Slider setValue={handleSetTopLeft} />
              <Display>
                Top-Left:
                <b>{` ${topLeft}`}</b>
              </Display>
              <Slider setValue={handleSetTopRight} />
              <Display>
                Top-Right:
                <b>{` ${topRight}`}</b>
              </Display>
              <Slider setValue={handleSetBottomRight} />
              <Display>
                Bottom-Right:
                <b>{` ${bottomRight}`}</b>
              </Display>
              <Slider setValue={handleSetBottomLeft} />
              <Display>
                Bottom-Left:
                <b>{` ${bottomLeft}`}</b>
              </Display>
            </SlidersContainer>
            <LiveBorderContainer borderRadius={formattedBorderRadius}>
              <div />
            </LiveBorderContainer>
          </SlidersAndBorder>

          <CodeSnippet formattedBorderRadius={formattedBorderRadius} />
        </div>
      </Container>
    </>
  );
};

export default App;
