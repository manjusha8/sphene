import React, { useEffect, useContext } from "react";
import { Wrapper, Value } from "./Style";
import StateContext from "../../Context/StateContext";

function Sort(props) {
  const { onSorting } = useContext(StateContext);

  return (
    <>
      <form>
        <Wrapper onChange={onSorting}>
          {/* <Value value="default">Default</Value> */}
          <Value value="asc">Sort By(A - Z)</Value>
          <Value value="desc">Sort By(Z - A)</Value>
        </Wrapper>
      </form>
    </>
  );
}

export default Sort;
