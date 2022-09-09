/* eslint-disable array-callback-return */

import { useDispatch } from 'react-redux';
import { Card } from '../components/Card';
import { changeDone, deleteItem } from '../actions/listAction';

function DoneImg(props) {
  if (props.done) {
    return (<img alt="done" src="/read.png" className="check" />)
  } else {
    return (<img alt="done" src="/check.png" className="check" />)
  }
}


export function ListItem(props) {
  const dispatch = useDispatch();

  return (
    <li key={props.item.id} className="list">
      <Card className="lista" id={props.item.done ? "done" : ''}>
        <span className={props.item.done ? "done" : ''}>{props.item.text}</span>
        <div className="box-button">
          <button onClick={() => { dispatch(changeDone(props.item.id)) }} className="button"><DoneImg done={props.item.done} /></button>
          <button onClick={() => { dispatch(deleteItem(props.item.id)) }} >Delete</button>
        </div>
      </Card>
    </li>
  )
}