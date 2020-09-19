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
} from "./SearchStyle";
import { Link } from "react-router-dom";
function HeaderSearch(props) {
  return (
    <>
      <SearchWrapper>
        <Input
          name="search"
          placeholder="search your products here ..."
          onChange={props.handleKeyPress}
        />
        <CloseIcon>
          <Close onClick={() => props.search(false)}>
            <FaTimesCircle />{" "}
          </Close>
        </CloseIcon>
        <TodosWrapper>
          {props.todos.length > 0 ? (
            props.todos.map((todos) => (
              <LinkTag to="/shop">
                <Todos key={todos}>{todos} </Todos>
              </LinkTag>
            ))
          ) : (
            <Todos>
              Visit
              <LinkTag to="/shop"> Shop</LinkTag>
            </Todos>
          )}
        </TodosWrapper>
      </SearchWrapper>
    </>
  );
}

export default HeaderSearch;
