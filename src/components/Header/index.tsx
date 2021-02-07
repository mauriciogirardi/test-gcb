import Button from 'components/Button';
import React from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

const Header: React.FC = () => {
  const history = useHistory();

  return (
    <S.Container>
      <h1>Healthy Food</h1>
      <S.Nav>
        <ul>
          <li>
            <a href="#healthy_recipes">healthy recipes</a>
          </li>
          <li>
            <a href="#blog">blog</a>
          </li>
          <li>
            <a href="#join">join</a>
          </li>
          <li>
            <Button
              onClick={() => history.push('/register')}
              colorButton="#badc58"
              bgButton="#fff"
            >
              REGISTER
            </Button>
          </li>
        </ul>
      </S.Nav>
    </S.Container>
  );
};

export default Header;
