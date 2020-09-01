import React, { useEffect } from "react";
import { Input } from "./SearchStyle";
import { FaTimesCircle } from "react-icons/fa";
import {
  SearchWrapper,
  CloseIcon,
  Close,
  TodosWrapper,
  Todos,
  LinkTag,
  TodosCloseIcon,
} from "./SearchStyle";
// import { Link } from "react-router-dom";
function HeaderSearch(props) {
  return (
    <>
      <SearchWrapper>
        <Input
          name="search"
          placeholder="search your products here ..."
          onKeyPress={props.handleKeyPress}
        />
        <CloseIcon>
          <Close onClick={() => props.search(false)}>
            <FaTimesCircle />{" "}
          </Close>
        </CloseIcon>
        <TodosWrapper>
          {props.todos.map((todos, index) => (
            <LinkTag to="/shop">
              <Todos key={todos}>
                {todos}{" "}
                {/* <TodosCloseIcon>
                  <FaTimesCircle />{" "}
                </TodosCloseIcon> */}
              </Todos>
            </LinkTag>
          ))}
        </TodosWrapper>
      </SearchWrapper>
    </>
  );
}

export default HeaderSearch;
