import React, { useEffect, useState } from "react";
import { ImageWrapper, Image, PaginationWrapper } from "./BannerStyle";
import Pagination from "./Pagination";

function BannerImage(props) {
  const paginate = (number) => {
    props.setCurrentPage(number);
  };

  return (
    <>
      {/* {setTimeout(() => {
        let i = 0;
        if (i <= props.currentSlide.length) {
          i++;
        } else {
          i = 0;
        }
        setIndex(i);
      }, 5000)} */}
      {/* <ImageWrapper>
        <Image src={props.currentSlide[index]} alt="products" />;
      </ImageWrapper> */}
      <ImageWrapper>
        {props.currentSlide.map((images, index) => (
          <Image src={images} alt="products" />
        ))}

        <PaginationWrapper>
          <Pagination
            totalSlides={props.images.length}
            slidesPerPage={props.slidesPerPage}
            paginate={paginate}
            setCurrentPage={props.setCurrentPage}
            currentPage={props.currentPage}
          />
        </PaginationWrapper>
      </ImageWrapper>

      {/* <LeftArrow>
        {"<"}
        <FaArrowAltCircleLeft />
      </LeftArrow>
      <RightArrow>
        {">"}
        <FaArrowRight />
      </RightArrow> */}
    </>
  );
}

export default BannerImage;
