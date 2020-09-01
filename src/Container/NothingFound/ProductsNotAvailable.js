import React from "react";
import { Wrapper, ButtonWrapper, Button } from "./Style";

function ProductsNotAvailble(props) {
  return (
    <Wrapper>
      Oops Nothing Found ..!!
      <ButtonWrapper>
        <a href="/shop">
          <Button> view products</Button>
        </a>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default ProductsNotAvailble;
