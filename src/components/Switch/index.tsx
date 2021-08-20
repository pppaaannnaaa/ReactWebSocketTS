import React from "react";
import "../../App.css";
interface ISwitch{
  clickHandler: any
  sValue: boolean
}
const Switch: React.FC<ISwitch> = ({clickHandler, sValue}) => {
  return <input type="checkbox" onChange={clickHandler} value="1" checked={sValue} className="switch"/>;
};

export default Switch;
