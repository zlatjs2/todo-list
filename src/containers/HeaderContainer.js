import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from '../components/Header/Header';

class HeaderContainer extends Component {
  render() {
    const { modal, onToggleModal } = this.props;

    return (
      <Header
        modal={modal}  
        onToggleModal={onToggleModal}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  modal: state.get('modal'),
});

const mapDispatchToProps = (dispatch) => ({
  onToggleModal: (checked) => {dispatch(actions.toggleModal(checked))},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);