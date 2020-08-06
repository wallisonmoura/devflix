import styled, { css } from 'styled-components';

export const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 20px;
  padding-left: 5%;
  padding-right: 5%;

  ${({ paddingAll }) =>
    css`
      padding: ${paddingAll};
    `}
`;
