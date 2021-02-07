import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  bgButton?: string;
  colorButton?: string;
};

const Button: React.FC<ButtonProps> = ({
  bgButton = '#badc58',
  colorButton = '#fff',
  children,
  loading,
  ...rest
}) => {
  return (
    <S.Container
      style={{ color: colorButton, backgroundColor: bgButton }}
      type="button"
      {...rest}
    >
      {loading ? 'Loading...' : children}
    </S.Container>
  );
};

export default Button;
