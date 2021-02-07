import React from 'react';

import Button from 'components/Button';
import * as S from './styles';

interface CardFoodProps {
  title: string;
  image: string;
}

const CardFood: React.FC<CardFoodProps> = ({ title, image }) => {
  return (
    <S.Container>
      <img src={image} alt={title} />
      <S.Content>
        <h3>{title}</h3>
        <Button>See Recipe</Button>
      </S.Content>
    </S.Container>
  );
};

export default CardFood;
