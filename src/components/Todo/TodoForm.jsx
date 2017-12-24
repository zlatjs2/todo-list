import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormWrap = styled.form`
  padding: 0.5rem 0.5rem 0 0.5rem;
`;
const InputItem = styled.div`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background-color: #f1f3f5;
`;
const Input = styled.input`
  width: 100%;
  padding: 0.2rem 0;
  background-color: transparent;
`;

const ButtonWrap = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  height: 55px;
`;
const CreateButton = styled.button`
  width: 50%;
  height: 55px;
  text-align: center;
  font-size: 1.1rem;
  color: #fff;
  background-color: #66d9e8;
`;
const CancelButton = styled.button`
  width: 50%;
  height: 55px;
  text-align: center;
  font-size: 1.1rem;
  color: #868e96;
  background-color: #e9ecef;
`;
class TodoForm extends Component {  
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
    }
  }

  handleChange(e){
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleClick(e) {
    let targetName = e.target.name;
    let checked = this.props.modal;

    switch(targetName) {      
      case 'createButton':
        let title = this.state.title;
        let description = this.state.description;

        if(title !== '' && description !== '') {
          this.props.onCreateItem(title, description);
          this.props.onToggleModal(!checked);
          this.setState({
            title: '',
            description: '',
          });
        } else if(title === '' || description === '') {
          console.warn('값을 입력해주세요.')
        }
        break;

      case 'cancelButton':
        this.props.onToggleModal(!checked);

        break;

      default: 
        
    }
  }
  render() {
    return (
      <FormWrap>
        <InputItem>
          <Input
            type="text"
            name="title"
            value={this.state.title}
            placeholder="할 일을 작성해주세요"
            onChange={this.handleChange.bind(this)}
          />
        </InputItem>
        <InputItem>
          <Input
            type="text"
            name="description"
            value={this.state.description}
            placeholder="할 일에 대한 간단한 설명을 적어주세요."
            onChange={this.handleChange.bind(this)}
          />
        </InputItem>
        <ButtonWrap>
          <CreateButton
            type="button"
            name="createButton" 
            onClick={this.handleClick.bind(this)}
          >확인</CreateButton>
          <CancelButton
            type="button"
            name="cancelButton"
            onClick={this.handleClick.bind(this)}
          >취소</CancelButton>
        </ButtonWrap>
      </FormWrap>
    );
  }
}

TodoForm.propTypes = {
  onCreateItem: PropTypes.func.isRequired,
};
TodoForm.defaultProps = {
  onCreateItem: () => console.log('is not onCreateItem'),
};

export default TodoForm;