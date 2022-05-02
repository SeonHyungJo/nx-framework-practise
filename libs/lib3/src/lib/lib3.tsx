import styled from 'styled-components';

/* eslint-disable-next-line */
export interface Lib3Props {}

const StyledLib3 = styled.div`
  color: pink;
`;

export function Lib3(props: Lib3Props) {
  return (
    <StyledLib3>
      <h1>Welcome to Lib3!</h1>
    </StyledLib3>
  );
}

export default Lib3;
