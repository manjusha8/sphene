import React from "react";
import { ImageWrapper, Image, PaginationWrapper } from "./BannerStyle";
import Pagination from "./Pagination";

function BannerImage(props) {
  const paginate = (number) => {
    props.setCurrentPage(number);
  };

  return (
    <>
      <ImageWrapper>
        {props.currentSlide.map((images) => (
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
    </>
  );
}

export default BannerImage;
