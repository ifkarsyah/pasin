import { Link, useHistory } from "react-router-dom";
import Image from "react-bootstrap/Image";
import StarRating from "../../Components/StarRating"

function ProductCard(props) {
  return <div className="m-3" style={{ width: "154px" }}>
    <Link to={"/products/" + props.product["product_id"]}>
      <Image src={props.product["photo_url"]} rounded fluid style={{ width: "154px" }} />
    </Link>
    <p className="mb-0" style={{ width: "154px" }}>{props.product["name"]}</p>
    <p className="mb-0" style={{ width: "154px" }}>{props.product["price"]}</p>
    <StarRating rating={4.8} />
  </div>;
}

export default ProductCard;