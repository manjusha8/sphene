import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaHamburger } from "react-icons/fa";
import {
  HeaderWrapper,
  Sphene,
  ListContainer,
  ListItems,
  LinkTag,
  IconsContainer,
  Icons,
  Cart,
  Counter,
  Search,
  LogoutWrapper,
  Logout,
  MobileWrapper,
  MobileLink,
  MobileTag,
} from "./HeaderStyle";
import HeaderSearch from "../HeaderSearchComponent/HeaderSearch";
import Menu from "@material-ui/icons/Menu";
import fire from "../Config/Fire";
// import { connect } from "react-redux";
// import CartCountAction from "../../Redux/CartCountAction";

function Header(props) {
  const [navLinks] = useState([
    { header: "HOME", url: "/home", id: 0 },
    { header: "SHOP", url: "/shop", id: 1 },
    { header: "CONTACT", url: "/contact", id: 2 },
    { header: "PROFILE", url: "/profile", id: 3 },
  ]);
  const [search, setSearch] = useState(false);
  const [logout, setLogout] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [todos, setTodos] = useState([]);

  const logoutHandler = () => {
    fire.auth().signOut();
  };

  const menuHandler = () => {
    setLogout(!logout);
    setMobile(!mobile);
  };

  const handleKeyPress = (e) => {
    let temp = [...todos];
    if (e.key === "Enter") {
      let input = e.target.value;
      temp.push(e.target.value);
      // setTodos((todos) => [...todos, input]);
      setTodos(temp);
      console.log("todos: ", todos);
    }
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
                  <LinkTag
                    active={window.location.pathname === value.url}
                    to={value.url}
                  >
                    {value.header}
                  </LinkTag>
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
                <LinkTag to="/cart">
                  <FaShoppingCart />
                  {/* <Counter>{props.cartCount}</Counter> */}
                  <Counter>1</Counter>
                  {/* {console.log("cart counter: ", props.cartCount)} */}
                </LinkTag>
              </Icons>
              <Icons>
                <Menu onClick={menuHandler} />
                {mobile ? (
                  <MobileWrapper>
                    {navLinks.map((nav, index) => (
                      <MobileTag>
                        <MobileLink
                          active={window.location.pathname === nav.url}
                          to={nav.url}
                        >
                          {nav.header}
                        </MobileLink>
                      </MobileTag>
                    ))}
                    <div>
                      <Logout onClick={logoutHandler}> logout</Logout>
                    </div>
                  </MobileWrapper>
                ) : null}
                {logout ? (
                  <LogoutWrapper>
                    Are you sure you wanted to Logout {"?"}
                    <div>
                      <Logout onClick={logoutHandler}> logout</Logout>
                    </div>
                  </LogoutWrapper>
                ) : null}
              </Icons>
            </IconsContainer>
          </div>
        </HeaderWrapper>
      ) : (
        <HeaderSearch
          search={setSearch}
          handleKeyPress={handleKeyPress}
          todos={todos}
        />
      )}
    </>
  );
}

export default Header;

// export default connect(mapStateToProps, mapDispatchToProps)(ComponentName);

// const mapStateToProps = (state) => ({
//   ...state,
// });

// const mapDispatchToProps = (dispatch) => ({
//   CartCountAction: () => dispatch(CartCountAction),
// });
