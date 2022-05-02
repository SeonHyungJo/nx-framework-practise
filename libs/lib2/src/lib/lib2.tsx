import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface Lib2Props {}

const StyledLib2 = styled.div`
  color: pink;
`;

export function Lib2(props: Lib2Props) {
  return (
    <StyledLib2>
      <h1>Welcome to Lib2!</h1>
    </StyledLib2>
  );
}

export default Lib2;
