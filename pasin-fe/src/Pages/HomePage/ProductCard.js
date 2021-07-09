import { Link, useHistory } from "react-router-dom";
import Image from "react-bootstrap/Image";
import StarRating from "./StarRating"

function ProductCard(props) {
  return <div className="m-3" style={{ width: "154px" }}>
    <Link to={"/Product/" + props.product["id"]}>
      <Image src={props.product["photo_url"]} rounded fluid style={{ width: "154px" }} />
    </Link>
    <p className="mb-0" style={{ width: "154px" }}>{props.product["name"]}</p>
    <StarRating rating={props.product["vote_average"]} />
  </div>;
}

export default ProductCard;