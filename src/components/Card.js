

export function Card(props) {
  return <div className={props.className ? `${props.className} card` : "card"} id={props.id}>
    {props.children}
  </div>
}