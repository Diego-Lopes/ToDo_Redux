/* eslint-disable array-callback-return */
/* eslint-disable no-unreachable */

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddItem } from '../actions/listAction';
import { SAVED_ITEMS } from '../App';




export function Form(props) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();


  function handleChange(event) {
    let t = event.target.value

    setText(t);

  }

  function AddNumberId() {

    let test = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    let oldId = 0;
    test?.map((item, index) => {
      < span key={index}>
        {oldId = item.id}
      </ span>
    });


    return oldId + 1;
  }

  function addItem(event) {
    event.preventDefault();
    if (text) {
      dispatch(AddItem(text, AddNumberId())); //retorna um callback para o pai.
      setText("");
      props.onHideModal();//fechar modal
    } else {
      alert("Não pode adicionar campo vazio.")
    }
  }

  return (
    <form action="" className="form">
      <input className="input" type="text" onChange={handleChange}
        value={text} />
      <button className="buttonAdd" onClick={addItem}>add</button>
    </form>
  )

}