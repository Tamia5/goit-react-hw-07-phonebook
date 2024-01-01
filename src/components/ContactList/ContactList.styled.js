import styled, { keyframes } from 'styled-components';

export const List = styled.ul`
  padding: 0px 20px;
`;
export const Item = styled.li`
  width: 500px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 17px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
export const Text = styled.p`
  display: inline-block;
  min-width: 300px;
`;
export const Btn = styled.button`
  padding: 5px 10px;
  background-color: #3480eb;
  color: #fff;
  border: none;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #333;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-bottom: 20px;
  margin-left: 70px;

  animation: ${spin} 1s ease-in-out infinite;
`;
