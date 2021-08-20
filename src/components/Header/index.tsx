import React from "react";
import Switch from "../Switch";
interface Iprops {
  headerSwitch: any;
  showAll: boolean;
}
const Header: React.FC<Iprops> = ({ headerSwitch, showAll }) => {
  return (
    <header>
      <div className="filter">
        <span>Show Connected</span>
        <Switch clickHandler={headerSwitch} sValue={showAll} />
        <span>Show All</span>
      </div>
    </header>
  );
};

export default Header;
