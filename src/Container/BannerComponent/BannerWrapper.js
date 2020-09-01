import React, { useEffect, useState } from "react";
import { ImageWrapper, Image } from "./BannerStyle";
import BannerImage from "./BannerImage";

function BannerWrapper() {
  const [images] = useState([
    require("../assests/slide-shop-01.jpg"),
    require("../assests/men-casuals.jpg"),
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [slidesPerPage] = useState(1);

  const indexOfLastSlide = currentPage * slidesPerPage;
  const indexOfFirstSlide = indexOfLastSlide - slidesPerPage;
  const currentSlide = images.slice(indexOfFirstSlide, indexOfLastSlide);

  return (
    <div>
      <BannerImage
        images={images}
        currentSlide={currentSlide}
        slidesPerPage={slidesPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default BannerWrapper;
