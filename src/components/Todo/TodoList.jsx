import React, { Component } from 'react';
import { List } from 'immutable';

import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

import styled from 'styled-components';

class TodoList extends Component {
  render() {
    const { items, onCheckedItem, onEditItem, onRemoveItem } = this.props;

    const ListWrap = styled.div`
      padding: 1rem;
    `;

    const EmptyWrap = styled.div`
      padding: 4rem 1rem;
      text-align: center;
      font-size: 0.9rem;
      color: #868e96;
    `;

    return (
      <div>
        {items.length === 0 ? 
          <EmptyWrap>할 일 목록이 없습니다.</EmptyWrap>
          :
          <ListWrap>
            {items.map((item, idx) => 
              <TodoItem
                {...item.toJS()}
                id={idx}
                key={idx}
                onEditItem={onEditItem}
                onCheckedItem={onCheckedItem}
                onRemoveItem={onRemoveItem}
              />
            )}
          </ListWrap>
        }
      </div>
    );
  }
}

TodoList.propTypes = {
  items: PropTypes.instanceOf(List),
  onCheckedItem: PropTypes.func.isRequired,
};
TodoList.defaultProps = {
  items: [],
  onCheckedItem: () => console.log('is not onCheckedItem'),
};

export default TodoList;