import Image from "react-bootstrap/Image";
import React from "react";

export function StarRating({ rating }) {
  return <div style={{ height: "17px" }} className="d-flex">
    <Image src="https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/star.png"
      rounded
      fluid
      style={{ height: "17px" }}
      className="mr-2"
    />
    <span>{rating}</span>
  </div>;
}

export default StarRating;