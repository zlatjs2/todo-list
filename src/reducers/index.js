import { Map, List } from 'immutable';
import * as types from '../actions/ActionType';

const initialState = Map({
  value: '',
  modal: false,
  items: List([
    Map({
      title: '첫번째 할 일 목록. 글자가 길어지면 두줄까지 보여야 하는데 뭐라고 더이상 쓸말이 없다.',
      description: '이것은 할일에 대한 간단한 부연설명 항목입니다.',
      completed: false,
      checked: false,
    })
  ]),
});

function reducers(state = initialState, action) {
  const modal = state.get('modal');
  const items = state.get('items');
  
  switch(action.type) {

    case types.CREATE_ITEM:    
      return state.set('items', items.push(Map({
        title: action.title,
        description: action.description,
        completed: false,
        checked: false,
      })));

    case types.CHECKED_ITEM:
      return state.set('items', items.update(
        action.index,
        (item) => item.set('checked', !action.checked)
      ));

    case types.EDIT_ITEM:
      return state.set('items', items.update(
        action.index,
        (item) => item.set('title', action.title)
                      .set('description', action.description)
      ));
      

    case types.REMOVE_ITEM:
      return state.set('items', items.splice(action.index, 1));
    
    case types.TOGGLE_MODAL:
      return state.set('modal', !modal);

    default:
      return state;
  }
}

export default reducers;