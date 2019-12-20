import React from "react";


interface ButtomFilterProps {
  /**操作 */
  changeStorage: (x: string) => void;
}

const ButtomFilter: React.FC<ButtomFilterProps> = (props) => {

  return (
    <div className="buttomFilter">
      <span onClick={() => props.changeStorage("all")} >全部</span>
      <span onClick={() => props.changeStorage("done")} >已完成</span>
      <span onClick={() => props.changeStorage("not")} >未完成</span>
    </div>
  );
};

export default ButtomFilter;
