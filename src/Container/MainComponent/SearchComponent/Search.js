import React, { useEffect, useContext } from "react";
import { SearchWrapper, Title, Input } from "./Style";
import StateContext from "../../Context/StateContext";

function Search(props) {
  const { handleInputChange } = useContext(StateContext);

  return (
    <SearchWrapper>
      <Input
        type="text"
        name="search"
        placeholder="Search your products here ..!"
        onChange={handleInputChange}
      />
    </SearchWrapper>
  );
}

export default Search;
