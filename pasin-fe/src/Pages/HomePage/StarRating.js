import Image from "react-bootstrap/Image";
import React from "react";

export function StarRating({ rating }) {
  return <div style={{ height: "17px" }} className="d-flex">
    {/* <Image src="https://www.iconsdb.com/icons/preview/yellow/star-8-xxl.png"
      rounded
      fluid
      style={{ height: "17px" }}
      className="mr-2"
    /> */}
    <span>{rating}</span>
  </div>;
}

export default StarRating;