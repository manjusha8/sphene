import React, { useEffect } from "react";
import { PaginationWrapper, ListContainer, List } from "./PaginateStyle";
import { FaCircle } from "react-icons/fa";

function Pagination(props) {
  const number = [];

  for (
    let i = 1;
    i <= Math.ceil(props.totalSlides / props.slidesPerPage);
    i++
  ) {
    number.push(i);
  }

  return (
    <>
      <ListContainer>
        {number.map((number) => (
          <List key={number}>
            <FaCircle onClick={() => props.paginate(number)} />
          </List>
        ))}
      </ListContainer>
    </>
  );
}

export default Pagination;
