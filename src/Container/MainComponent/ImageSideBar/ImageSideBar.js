import React, { useEffect } from "react";
import { ImageWrapper, Image, Name, LinkTag } from "./Style";
import Woman from "../../assests/Woman.jpg";
import { Link } from "react-router-dom";

function ImageSideBar(props) {
  function displayName() {
    let name = "";
    console.log("name function");
    props.data.map((value, index) => {
      console.log("map function");
      if (index === 0) {
        console.log("id :", index);
        name = value.name;
      }
    });
    console.log("name: ", name);
    return name;
  }

  return (
    <>
      <Name>
        {displayName()} Section{" "}
        <LinkTag>
          Go Back To <Link to="/home">Home</Link>
        </LinkTag>{" "}
      </Name>
      <ImageWrapper>
        <Image src={Woman} alt=" products" />
      </ImageWrapper>
    </>
  );
}

export default ImageSideBar;
