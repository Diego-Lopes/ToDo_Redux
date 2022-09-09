import { Item } from '../components/Item';

export function AddItem(text, id) {
  const item = new Item(text, id);

  return { type: 'add_item', payload: item }

}

export function deleteItem(id) {
  return { type: 'delete_item', payload: id }
}

export function changeDone(id) {
  return { type: 'change_done', payload: id }
}