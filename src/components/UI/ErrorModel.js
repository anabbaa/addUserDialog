import React  from "react";
import ReactDOM from 'react-dom';

import Classes from "./ErrorModule.module.css";
import Button from "./Bottom";
import Card from "./Card";
/*here i have a small proplem overlay itis a normal div nested in the list and that is not 
good for example for machine reader so i will use portal to use it fir you need place to render 
it in html file dive with id attribute the n you define two const as function component then in 
return you need creatportal function which need two argument first what you want to render the
const itself then where look a the code do not forget to have library ReactDom
*/
const ErrorModule = (props)=>{

  const Backdrop = (props) => {
    return <div className={Classes.backdrop} onClick={props.onConfirm} />;
  };
  
  const ModalOverlay = (props) => {
    return (
      <Card className={Classes.modal}>
        <header className={Classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={Classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={Classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    );
  };
    return (
        <React.Fragment>
                {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
        </React.Fragment>
      );
};
export default ErrorModule;