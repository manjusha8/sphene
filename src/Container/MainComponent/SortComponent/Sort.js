import React, { useContext } from "react";
import { Wrapper, Value } from "./Style";
import StateContext from "../../Context/StateContext";
import { connect } from "react-redux";
import { SORT_HANDLER } from "../../../Redux/Store";

function Sort(props) {
  const { onSorting } = useContext(StateContext);

  return (
    <>
      <form>
        {/* <Wrapper onChange={onSorting}> */}
        <Wrapper onChange={props.sortHandler}>
          <Value value="asc">Sort By(A - Z)</Value>
          <Value value="desc">Sort By(Z - A)</Value>
        </Wrapper>
      </form>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    sortHandler: (event) => {
      const action = { type: SORT_HANDLER, event: event };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(Sort);
