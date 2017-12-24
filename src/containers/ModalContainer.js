import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Modal, ModalMiddleCont } from '../components/Modal';
import { TodoForm } from '../components/Todo';

class ModalContainer extends Component {
  render() {
    const { value, modal, onToggleModal, onCreateItem } = this.props;

    return (
      <Modal modal={modal}> 
        <ModalMiddleCont>
          <TodoForm 
            value={value}
            modal={modal}
            onCreateItem={onCreateItem}
            onToggleModal={onToggleModal}
          />
        </ModalMiddleCont>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.get('value'),
  modal: state.get('modal'),
});
const mpaDispatchToProps = (dispatch) => ({
  onToggleModal: (checked) => {dispatch(actions.toggleModal(checked))}, 
  onCreateItem: (title, description) => {dispatch(actions.createItem(title, description))}, 
});

export default connect(
  mapStateToProps, 
  mpaDispatchToProps
)(ModalContainer);