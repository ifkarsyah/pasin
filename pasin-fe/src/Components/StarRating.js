import Image from "react-bootstrap/Image";
import React from "react";

export function StarRating({ rating }) {
  return <div style={{ height: "17px" }} className="d-flex">
    <Image src="https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/star.png"
      rounded
      fluid
      style={{ height: "14px", marginTop: "5px", marginRight: "3px" }}
      className="mr-2"
    />
    <span>{rating}</span>
  </div>;
}

export default StarRating;