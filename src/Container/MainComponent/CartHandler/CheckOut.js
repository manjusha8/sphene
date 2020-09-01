import React, { useEffect } from "react";
import {
  Wrapper,
  CardWrapper,
  ProductWrapper,
  Description,
  ImageWrapper,
  Image,
  ContentWrapper,
  PriceWrapper,
  Price,
  OfferPrice,
  Delivery,
  Empty,
  TitleBar,
  TitleDescription,
  Table,
  Header,
  Title,
  TableData,
  TableDataImage,
  TableDataDescription,
  DataRow,
} from "./Style";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import fire from "../../Config/Fire";
import StateContext from "../../Context/StateContext";
import UserContext from "../../Context/UserContext";

function CheckOut(props) {
  const { user } = useContext(UserContext);

  let day = new Date().getDate() + 4;
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();

  const data = useContext(StateContext);

  const [date] = useState(new Date().toLocaleString());

  useEffect(() => {
    let db = firebase.database();
    let users = db.ref().child("users");
    let uid = users.child(user);
    let purchased = uid.child("purchased").push();
    purchased.set({
      data: data,
      date: date,
    });
    console.log("checkout");
  }, []);

  function dateHandler() {
    let date = day + "-" + month + "-" + year;
    return date;
  }

  return (
    <Wrapper>
      <div>
        <Table>
          <tbody>
            <Header>
              <Title>Item</Title>
              <Title>Description</Title>
              <Title>Price</Title>
              <Title>Quantity</Title>
              <Title>Total</Title>
              <TitleDescription>Description</TitleDescription>
            </Header>
            {data.map((value, index) => (
              <DataRow>
                <TableDataImage>
                  <Image
                    src={require(`../../assests/${value.url}`)}
                    alt="products"
                  />
                </TableDataImage>
                <TableData>{value.name}</TableData>
                <TableData>
                  ${value.offerprice ? value.offerprice : value.price}
                </TableData>
                <TableData>{value.quantity}</TableData>
                <TableData>
                  $
                  {value.quantity *
                    (value.offerprice ? value.offerprice : value.price)}
                </TableData>
                <TableDataDescription>{value.description}</TableDataDescription>
              </DataRow>
            ))}
          </tbody>
        </Table>
        <Delivery>
          Thank you !! Your order will be delivered by {dateHandler()}
          <div>
            <Link to="/shop"> Go Back to Shop </Link>
          </div>
        </Delivery>
      </div>
    </Wrapper>
  );
}

export default CheckOut;
