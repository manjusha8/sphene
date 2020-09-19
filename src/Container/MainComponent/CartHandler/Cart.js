import React, { useEffect } from "react";
import CheckOut from "./CheckOut";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Hoc from "../../HOCComponents/Hoc";
import { Empty, TitleBar, Delivery } from "./Style";

import StateContext from "../../Context/StateContext";

function Cart() {
  const location = useLocation();
  const [data, setData] = useState();

  useEffect(() => {
    console.log("use effect");
    let response = location.state;
    if (response === null || response === undefined || response === "") {
      console.log("null");
    } else {
      setData(response.data);
    }
  }, [data]);

  return (
    <StateContext.Provider value={data}>
      <Hoc>
        <Empty>
          <TitleBar>Shopping Cart</TitleBar>
        </Empty>
        {data !== undefined ? (
          <CheckOut />
        ) : (
          <Delivery>
            Your cart is EMPTY !! Go Back to <Link to="/shop">Shop</Link>
          </Delivery>
        )}
      </Hoc>
    </StateContext.Provider>
  );
}

export default Cart;
