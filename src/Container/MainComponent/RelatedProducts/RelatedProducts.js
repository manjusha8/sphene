import React, { useEffect } from "react";
import Hoc from "../../HOCComponents/Hoc";
import { useState } from "react";
import { Empty, TitleBar } from "../CartHandler/Style";
import RelatedCards from "./RelatedCards";

function RelatedProducts(props) {
  const [data, setData] = useState();

  useEffect(() => {
    let response = props.location.state;
    if (response === null || response === undefined || response === "") {
      console.log("null");
    } else {
      setData(response.data);
      console.log("data in related: ", response.data);
    }
  }, [data]);

  return (
    <Hoc>
      <Empty>
        <TitleBar>Shopping Your Products</TitleBar>
      </Empty>

      {data !== undefined ? <RelatedCards products={data} /> : null}
    </Hoc>
  );
}
export default RelatedProducts;
