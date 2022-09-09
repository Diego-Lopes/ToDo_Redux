/* eslint-disable import/no-anonymous-default-export */
export default (state = [], action) => {

  switch (action.type) {
    case 'add_item':
      return [...state, action.payload];
    case 'delete_item':
      return state.filter(item => item.id !== action.payload);
    case 'change_done':
      return state.map(item => {
        if (item.id === action.payload) {
          item.done = !item.done;
        }

        return item;
      });

    default:
      return state;
  }
}