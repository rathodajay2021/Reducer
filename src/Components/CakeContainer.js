import React from "react";
import { buyCake, stockFill } from "../redux/cake/cakeAction";
import { buy_ice_cream } from "../redux/iceCream/iceCreamAction";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <React.Fragment>
      <h2>numbers of cakes - {props.cakesNo}</h2>
      <h2>numbers of ice creams - {props.ice_cream}</h2>
      <div>
        <button onClick={props.buyCake}>Buy Cake</button>
        <button onClick={props.buy_ice_cream}>Buy ice cream</button>
        <button onClick={props.stockFill}>Fill the stock</button>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
    console.log('chefcking the store state value',state)
  return {
    cakesNo: state.cakeReducer.numOfCakes,
    ice_cream: state.ice_cream_reducer.ice_cream_num
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    stockFill: () => dispatch(stockFill()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
