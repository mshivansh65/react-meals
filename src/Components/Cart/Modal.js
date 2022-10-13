import { Fragment } from "react";
import PortalReactDOM from "react-dom";
import Classes from "./Modal.module.css";
const overlayElement = document.getElementById("overlays");
function Backdrop(props) {
  return (
    <div className={Classes.backdrop} onClick={props.onHideCart}>
      This is backdrop
    </div>
  );
}

function ModalOverlay(props) {
  return (
    <div className={Classes.modal}>
      <div className={Classes.content}>{props.children}</div>
    </div>
  );
}
export default function Modal(props) {
  return (
    <Fragment>
      {PortalReactDOM.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        overlayElement
      )}
      {PortalReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayElement
      )}
    </Fragment>
  );
}
