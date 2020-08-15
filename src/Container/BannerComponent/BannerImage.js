import React, { useEffect, useState } from "react";
import { ImageWrapper, Image, PaginationWrapper } from "./BannerStyle";
import Pagination from "./Pagination";

function BannerImage(props) {
  const paginate = (number) => {
    props.setCurrentPage(number);
  };

  return (
    <>
      <ImageWrapper>
        {props.currentSlide.map((images, index) => (
          <Image src={images} alt="products" />
        ))}
      </ImageWrapper>
      <PaginationWrapper>
        <Pagination
          totalSlides={props.images.length}
          slidesPerPage={props.slidesPerPage}
          paginate={paginate}
        />
      </PaginationWrapper>
    </>
  );
}

export default BannerImage;
