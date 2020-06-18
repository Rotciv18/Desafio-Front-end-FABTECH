import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px 0 8px;
    border-radius: 48px;
    background-color: #d6ddf4;
    color: #000;
  }
`;

export const Separator = styled.div`
  /* width: 100%; */
  margin-top: 6px;
  border-bottom: 3px solid #bbb;
`;
