import { Card } from "./Card";

export function Modal(props) {
  function HideModal(e) {
    let target = e.target;
    if (target.id == 'modal') {
      props.onHideModal();
    }
  }
  return (
    <div id="modal" className={props.show ? "modal" : "modal hideModal"} onClick={HideModal}>
      <Card className="cardModal">
        {props.children}
      </Card>
    </div>
  )
} 