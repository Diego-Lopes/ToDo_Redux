/* eslint-disable array-callback-return */

import { useSelector } from "react-redux";
import { ListItem } from "./ListItem";



export function List(props) {
  const itens = useSelector(state => state)
  return (
    <ul className="list" >
      {itens.slice(0).reverse().map((item) => <ListItem key={item.id} item={item} />)}
    </ul >
  )
}