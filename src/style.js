import styled from 'styled-components';
export const Grid = styled.div`
  border-style: solid;
  border-color: green;
`;

export const Row = styled.div`
display: flex;
`;

const media = {
  xs : (styles) => `
  @media only screen and (max-width: 480px){
    ${styles}
  }
  `
}

export const Col = styled.div`
flex: ${(props) => props.size};
border-style: solid;
border-color:red;
${(props) => props.collapse&&media[props.collapse](`display:none`)};
`;



