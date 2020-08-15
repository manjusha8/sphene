import React, { useEffect } from "react";
import { SearchWrapper, Title, Input } from "./Style";

function Search(props) {
  return (
    <SearchWrapper>
      <Input
        type="text"
        name="search"
        placeholder="Search your products here ..!"
        onChange={props.handleInputChange}
      />
    </SearchWrapper>
  );
}

export default Search;
