import React from 'react';

import * as S from './styles';

const Button: React.FC = () => {
  return (
    <S.Container>
      <p>&#169; Copyrights 2019 Stack All Rights Reseved</p>

      <S.Nav>
        <ul>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Terms and Conditions
            </a>
          </li>
        </ul>
      </S.Nav>
    </S.Container>
  );
};

export default Button;
