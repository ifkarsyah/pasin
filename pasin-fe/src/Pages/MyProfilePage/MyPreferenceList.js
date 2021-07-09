import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import MyPreferenceCard from "./MyPreferenceCard";

const myPreferenceListResults = [
  {
    "id": 1,
    "jenis": "sepatu pantofel",
    "brand": "vans",
    "size": 28,
  },
  {
    "id": 2,
    "jenis": "sepatu pantofel",
    "brand": "vans",
    "size": 28,
  },
  {
    "id": 3,
    "jenis": "sepatu pantofel",
    "brand": "vans",
    "size": 28,
  },
  {
    "id": 4,
    "jenis": "sepatu pantofel",
    "brand": "vans",
    "size": 28,
  },
  {
    "id": 5,
    "jenis": "sepatu pantofel",
    "brand": "vans",
    "size": 28,
  },
  {
    "id": 6,
    "jenis": "sepatu pantofel",
    "brand": "vans",
    "size": 28,
  },
  {
    "id": 7,
    "jenis": "sepatu pantofel",
    "brand": "vans",
    "size": 28,
  },
  {
    "id": 8,
    "jenis": "sepatu pantofel",
    "brand": "vans",
    "size": 28,
  },
]

function MyPreferenceList() {
  const [myPreferenceList, setMyPreferenceList] = useState(myPreferenceListResults);

  useEffect(() => {
    (async () => {
      setMyPreferenceList(myPreferenceListResults);
    })();
  }, []);

  return (
    <Container fluid={true} className="d-flex flex-wrap font-weight-bold">
      {myPreferenceListResults.map(pref =>
        <MyPreferenceCard key={pref['id']} pref={pref}
        />)}
    </Container>
  );
}

export default MyPreferenceList;