import React from 'react';
import styled from 'styled-components';

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const TopCont = styled.section`
  padding: 1rem;
`;

const Title = styled.h2`
  color: #495057;
`;

const Description = styled.p`
  margin-top: 5px;
  font-size: 0.9rem;
  color: #ced4da;
`;

const ModalContainer = ({ children, ...regs }) => {  
  return (
    <div>
      <ModalContent>
          <TopCont>
            <Title>ToDo List</Title>
            <Description> 
              My life is just one big todo list. There is something about check things off a list that is extremely satisfying and rewarding for me.
            </Description>
          </TopCont>

          {children}

        </ModalContent>
    </div>
  );
}


export default ModalContainer;