import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
  render() {
    const FooterWrap = styled.footer`
      padding: 2rem 0;
      text-align: center;
    `;
    const Title = styled.p`
      font-size: 0.8rem;
      color: #e9ecef;
    `;

    return (
      <FooterWrap>
        <Title>React+Redux TodoList</Title>
      </FooterWrap>
    );
  }
}

export default Footer;