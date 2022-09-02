import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, stockFill } from "../redux/cake/cakeAction";

function HooksCakeContainer() {
  const cakesNo = useSelector((state) => state.cakeReducer.numOfCakes);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <p>by hooks</p>
      <h2>numbers of cakes - {cakesNo} </h2>
      <div>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        <button onClick={() => dispatch(stockFill())}>Buy Cake</button>
      </div>
    </React.Fragment>
  );
}

export default HooksCakeContainer;
