import React from "react";

const ButtomFilter = () => {
  const changeState = (flag: string) => {};

  return (
    <div className="buttomFilter">
      <span onClick={() => changeState("all")}>全部</span>
      <span onClick={() => changeState("done")}>已完成</span>
      <span onClick={() => changeState("not")}>未完成</span>
    </div>
  );
};

export default ButtomFilter;
