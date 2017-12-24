import React from 'react';
import styled from 'styled-components';

const DimmedWrap = styled.div`
  z-index: 0;
  position: absolute;
  top: 0; 
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
`;

const ModalDimmed = ({ modal }) => {
  return (
    <DimmedWrap 
      className={`animated ${modal === true ? 'fadeIn' : 'fadeOut'}`}
    />
  );
}

export default ModalDimmed;