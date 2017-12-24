import * as types from './ActionType';

export function createItem(title, description) {
  return {
    type: types.CREATE_ITEM,
    title,
    description
  }
}

export function checkedItem(index, checked) {
  return {
    type: types.CHECKED_ITEM,
    index,
    checked
  }
}

export function editItem(index, title, description) {
  return {
    type: types.EDIT_ITEM,
    index,
    title,
    description
  }
}

export function removeItem(index) {
  return {
    type: types.REMOVE_ITEM,
    index
  }
}

export function toggleModal() {
  return {
    type: types.TOGGLE_MODAL,
  }
}