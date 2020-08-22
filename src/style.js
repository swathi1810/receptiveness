import styled from 'styled-components';
export const Grid = styled.div`
  border-style: solid;
  border-color: green;
`;

export const Row = styled.div`
display: flex;
`;

export const Col = styled.div`
flex: ${(props) => props.size};
border-style: solid;
border-color:red;
`;



