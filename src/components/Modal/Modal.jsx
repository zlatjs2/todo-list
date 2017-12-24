import React from 'react';
import ModalContainer from './ModalContainer';
import ModalDimmed from './ModalDimmed';

import styled from 'styled-components';

const ModalWrap = styled.div`
  display: block;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const ContainerWrap = styled.div`
  z-index: 1;
  position: relative;
  margin: 5%;
  height: 90%;
`;

const Modal = ({ children, modal, ...regs }) => {
  let isHide = {
    display: 'none'
  };

  let isShow = {
    display: 'block'
  };

  return(
    <ModalWrap style={modal === true ? isShow : isHide}>
      <ContainerWrap
        className={`animated ${modal === true ? `bounceInDown`: 'bounceOutUp'}`}
      >
        <ModalContainer>
          {children}
        </ModalContainer>
      </ContainerWrap>
      <ModalDimmed modal={modal} />
    </ModalWrap>
  );
};

export default Modal;