import React, { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import {
  HeaderWrapper,
  Sphene,
  ListContainer,
  ListItems,
  Link,
  IconsContainer,
  Icons,
  Search,
} from "./HeaderStyle";
import HeaderSearch from "../HeaderSearchComponent/HeaderSearch";

function ComponentName() {
  const [navLinks] = useState([
    { header: "HOME", url: "/home", id: 0 },
    { header: "SHOP", url: "/shop", id: 1 },
    { header: "CONTACT", url: "/contact", id: 3 },
  ]);
  const [search, setSearch] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const clickHandler = (index) => {
    setIsShown(index);
    console.log(isShown);
  };

  return (
    <>
      {!search ? (
        <HeaderWrapper>
          <Sphene>SPHENE</Sphene>
          <div>
            <ListContainer>
              {navLinks.map((value, index) => (
                <ListItems key={index}>
                  <Link
                    // onClick={() => clickHandler(index)}
                    active={value.id === index}
                    href={value.url}
                  >
                    {value.header}
                  </Link>
                </ListItems>
              ))}
            </ListContainer>
            <IconsContainer>
              <Icons>
                <Search onClick={() => setSearch(true)}>
                  <FaSearch />
                </Search>
              </Icons>
              <Icons>
                <FaShoppingCart />
              </Icons>
            </IconsContainer>
          </div>
        </HeaderWrapper>
      ) : (
        <HeaderSearch search={setSearch} />
      )}
    </>
  );
}

export default ComponentName;
