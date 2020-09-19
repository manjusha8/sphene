import React, { useContext } from "react";
import { SearchWrapper, Input } from "./Style";
import StateContext from "../../Context/StateContext";

function Search() {
  const { handleInputChange } = useContext(StateContext);

  return (
    <SearchWrapper>
      <Input
        type="text"
        name="search"
        placeholder="Search your products here ..!"
        data-test="input"
        onChange={handleInputChange}
      />
    </SearchWrapper>
  );
}

export default Search;
