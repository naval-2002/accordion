import { useState } from "react";

function Bottom(props) {
  const { title, info } = props.data;
  const [button, setButton] = useState("+");
  const [clicked, setClicked] = useState(false);
  const datahandler = () => {
    setClicked((prevState) => !prevState);
    setButton((prevState) => {
      return prevState === "+" ? "-" : "+";
    });
  };

  return (
    <div className="container">
      <div className="container2">
        <h5 className="qus">{title}</h5>
        <button onClick={datahandler}>{button}</button>
        <p className="data">{clicked && info}</p>
      </div>
    </div>
  );
}
export default Bottom;
