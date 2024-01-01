import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 250px;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 18px;
`;
export const Input = styled.input`
  width: 200px;
  min-height: 20px;
  border: 1px solid #c4c4c4;
  border-radius: 3px;
`;

export const Btn = styled.button`
  border: none;
  padding: 10px;
  border-radius: 50px;
  font-size: 14px;
  background-color: #3480eb;
  color: #ffff;
  margin-top: 10px;
  width: 120px;
`;
