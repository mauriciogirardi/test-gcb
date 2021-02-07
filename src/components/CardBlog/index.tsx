import React from 'react';

import * as S from './styles';

interface CardBlogProps {
  title: string;
  name: string;
  image: string;
  imageProfile: string;
}

const CardBlog: React.FC<CardBlogProps> = ({
  title,
  image,
  imageProfile,
  name,
}) => {
  return (
    <S.Container>
      <img src={image} alt={title} />
      <S.Content>
        <h3>{title}</h3>
        <S.Profile>
          <img src={imageProfile} alt={name} />
          <span>{name}</span>
        </S.Profile>
      </S.Content>
    </S.Container>
  );
};

export default CardBlog;
