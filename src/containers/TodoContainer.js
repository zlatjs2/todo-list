import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Modal, ModalMiddleCont } from '../components/Modal';
import { TodoForm, TodoList } from '../components/Todo';

class TodoContainer extends Component {
  render() {
    const { value, modal, items, onChangeVal, onEditItem, onCreateItem, onCheckedItem, onRemoveItem, onToggleModal } = this.props;
    return (
      <div>
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
         
        <TodoList 
          items={items} 
          onCheckedItem={onCheckedItem} 
          onEditItem={onEditItem}
          onRemoveItem={onRemoveItem}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  editTitle: state.get('editTitle'),
  value: state.get('value'),
  modal: state.get('modal'),
  items: state.get('items')
});

const mapDispatchToProps = (dispatch) => ({
  onToggleModal: (checked) => {dispatch(actions.toggleModal(checked))}, 
  onCreateItem: (title, description) => {dispatch(actions.createItem(title, description))}, 
  onCheckedItem: (index, checked) => {dispatch(actions.checkedItem(index, checked))},
  onEditItem: (index, title, description) => {dispatch(actions.editItem(index, title, description))}, 
  onRemoveItem: (index) => {dispatch(actions.removeItem(index))},
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer);