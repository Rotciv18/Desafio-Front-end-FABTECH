import styled from 'styled-components';

export const Container = styled.div`
  height: 10vh;
  width: 100%;
  background-color: #99a0ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  color: #FFF;

  img {
    height: 10vh;
    width: 10vh;
  }

  :hover {
    color: #76799a;
  }
`;

export const ButtonsContainer = styled.div`
  margin-right: 6px;
`;
