import Button from 'components/Button';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

const Header: React.FC = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  console.log(isOpen);

  return (
    <S.Container>
      <h1>Healthy Food</h1>
      <S.Toggle onClick={handleToggle}>Menu</S.Toggle>
      <S.Nav isOpen={isOpen}>
        <ul>
          <li>
            <a href="#healthy_recipes" onClick={() => setIsOpen(false)}>
              healthy recipes
            </a>
          </li>
          <li>
            <a href="#blog" onClick={() => setIsOpen(false)}>
              blog
            </a>
          </li>
          <li>
            <a href="#join" onClick={() => setIsOpen(false)}>
              join
            </a>
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
