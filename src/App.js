/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable no-self-compare */
import { useState } from 'react';
import { Form } from './components/Form';
import { List } from './components/List';
import { Modal } from './components/Modal';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import listReducer from './reducers/listReducers';

import './App.css';

export const SAVED_ITEMS = "savedItems"



function persistState(state) {
  localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));

}

function loadState() {
  const actualState = localStorage.getItem(SAVED_ITEMS);
  if (actualState) {
    return JSON.parse(actualState);
  } else {
    return [];
  }
}

const store = createStore(listReducer, loadState());


//persistindo com o estado e salvando. 
store.subscribe(() => {
  persistState(store.getState())
})


export function App() {

  const [showModal, setShowModal] = useState(false);





  function onHideModal() {

    setShowModal(!showModal);

  }

  return (
    <Provider store={store}>
      <div className="container">
        <header className="header">
          <h1>ToDo</h1>
          <button className="addButton" onClick={() => setShowModal(!showModal)}>+</button>
        </header>
        <Modal show={showModal} onHideModal={onHideModal}>
          <Form onHideModal={onHideModal} />
        </Modal>
        <List />
      </div>
    </Provider>
  )
}

