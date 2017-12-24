import React from 'react';
import styled from 'styled-components';

const MiddleContWrap = styled.section`
  padding: 1rem;
  margin-bottom: 55px;
`;

const ModalMiddleCont = ({ children }) => {  
    return (
      <MiddleContWrap>
        {children}
      </MiddleContWrap>
    );
};



export default ModalMiddleCont;