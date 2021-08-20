import React, { useEffect, useState } from "react";
import Card from "../Card";
interface Iprops {
  showAll: boolean;
}
export interface apiProps {
  id: string;
  name: string;
  connected: boolean;
  unit: string;
  value: string;
}
const IOTSensors: React.FC<Iprops> = ({ showAll }) => {
  const [sensorList, setSensorList] = useState<apiProps[]>([]);
  let ws: any = new WebSocket("ws://localhost:5000", "json");
  useEffect(() => {
    ws.onopen = () => {
      console.log("connected");
    };
    ws.onmessage = (evt: any) => {
      const message = JSON.parse(evt.data);
      console.log(message);
      setSensorList((prevState) => {
        const index = parseInt(message.id);
        const newState = [...prevState];
        newState[index] = message;

        return [...newState];
        // return [...prevState, message];
      });
    };
    ws.onclose = () => {
      console.log("disconnected");
    };
  }, []);
  const onSensorSwitch = (obj: apiProps, index: number) => {
    const command = obj.connected ? "connect" : "disconnect";
    console.log({ command, id: obj.id });
    ws.send(JSON.stringify({ command, id: obj.id }));

    setSensorList((prevState) => {
      const newState = [...prevState];
      newState[index]=obj;

      return [...newState];
    });
  };
  // console.log(sensorList);

  return (
    <div className="cardBody">
      {sensorList
        .filter((item) => {
          if (!showAll) {
            return item.connected;
          }
          return true;
        })
        .map((item, index) => {
          return (
            <Card
              key={`card-${index}`}
              index={index}
              card={item}
              onSensorSwitch={onSensorSwitch}
            />
          );
        })}
    </div>
  );
};

export default IOTSensors;
