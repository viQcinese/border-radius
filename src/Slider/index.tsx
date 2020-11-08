import React, { useCallback, useState } from 'react';

import { SliderContainer, SliderInput } from './styles';

interface ISliderProps {
  setValue: (data: any) => void;
}

export function Slider({ setValue }: ISliderProps): React.ReactElement {
  const [innerValue, setInnerValue] = useState(0);

  const handleSetValue = useCallback(
    e => {
      setValue(e.target.value);
      setInnerValue(e.target.value);
    },
    [setValue],
  );

  return (
    <SliderContainer>
      <SliderInput
        type="range"
        min="0"
        max="50"
        step="1"
        value={innerValue}
        onChange={handleSetValue}
      />
    </SliderContainer>
  );
}

export default Slider;
