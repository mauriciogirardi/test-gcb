import React from 'react';

import * as S from './styles';

const Carousel: React.FC = ({ children }) => {
  return (
    <S.Container>
      <S.Slider>{children}</S.Slider>
    </S.Container>
  );
};

export default Carousel;
