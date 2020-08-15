import React, { useEffect } from "react";
import { Input } from "./SearchStyle";
import { FaTimesCircle } from "react-icons/fa";
import { SearchWrapper, CloseIcon, Close } from "./SearchStyle";
function HeaderSearch(props) {
  return (
    <SearchWrapper>
      <Input name="search" placeholder="search your products here ..." />
      <CloseIcon>
        <Close onClick={() => props.search(false)}>
          <FaTimesCircle />{" "}
        </Close>
      </CloseIcon>
    </SearchWrapper>
  );
}

export default HeaderSearch;
