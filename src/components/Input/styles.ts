import Tooltip from 'components/Tooltip';
import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isError: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 343px;
  padding: 0 1rem;
  border-radius: 0.3rem;
  border: 1px solid #2d3561;
  background-color: #fff;
  margin-top: 0.8rem;

  input {
    height: 3.3rem;
    width: 100%;
    border: 0;
  }

  &::placeholder {
    color: #b4b4b4;
  }

  ${props =>
    props.isError &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFilled &&
    css`
      border-color: #badc58;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #badc58;
    `}
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  svg {
    margin: 0;
    cursor: pointer;
  }

  span {
    background-color: #c53030;

    &::after {
      background-color: #c53030;
    }
  }
`;
