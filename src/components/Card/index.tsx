import React from "react";
import Switch from "../Switch";
import { apiProps } from "../IOTsensors";
interface Iprops {
  card: apiProps;
  onSensorSwitch: (obj: apiProps, index: number ) => void;
  index: number;
}
const Card: React.FC<Iprops> = ({
  card: { id, name, connected, unit, value },
  onSensorSwitch,
  index,
}) => {
  return (
    <div className="card">
      <div className="title">{name}</div>
      <div className="details">{`${value} / ${unit}`}</div>
      <div className="action">
        <span className="status">
          {connected ? "Connected" : "Disconnected"}
        </span>
        <span className="actionBtn">
          <Switch
            clickHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                const newConStatus=e.target.checked;
              onSensorSwitch({id, name, connected:newConStatus, unit, value}, index);
            }}
            sValue={connected}
          />
        </span>
      </div>
    </div>
  );
};

export default React.memo(Card);
