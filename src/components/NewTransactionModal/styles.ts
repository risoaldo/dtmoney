import styled from "styled-components";

import { transparentize } from 'polished';


export const Container = styled.form`

h1{
  color: var(--text-tittle);
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

input{
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  border-radius: 0.25rem;

  border: 1px solid #d7d7d7;
  background: #e7e9ee;

  font-weight: 400;
  font-size: 1rem;

  &::placeholder{
    color: var(--text-body);
  }

  & + input {
    margin-top: 1rem;
  }
}

button[type="submit"]{
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  background: var(--green);
  color: #fff;
  font-weight: 400;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  transition: filter 1;

  &:hover{
    filter: brightness(0.9);
  }
}

`;

export const TransactionContent = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;


interface RadioProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = { 
  red: '#e52e4d',
  green: '#33cc95'
}

export const RadioButton = styled.button<RadioProps>`

  height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${(props) => props.isActive 
    ? transparentize(0.8, colors[props.activeColor])
    : 'transparent'}
    ;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    &:hover{
      border-color: #c9c9c9;
    }

    img{
      width: 20px;
      height: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-tittle);
    }
`;