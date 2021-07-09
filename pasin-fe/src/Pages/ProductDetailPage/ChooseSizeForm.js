import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from 'react';

import RecommendSize from './RecommendSize';
import TambahPreferensiPopupForm from "../../Components/TambahPreferensiPopupForm";
import { getRecommendedSize, getUserPreferenceList } from '../../API/api';

function ChooseSizeForm(props) {

  // userHasPreference
  const [userHasPreference, setUserHasPreference] = useState(false);


  // recommendationSize
  const [recommendedSize, setRecommendedSize] = useState();
  const [diffLength, setDiffLength] = useState(0);
  useEffect(() => {
    let mounted = true;
    getRecommendedSize(props["productId"])
      .then(results => {
        if (mounted) {
          if (results.status == 200) {
            // console.log()
            setRecommendedSize(results.data[0]["reccomendation"]);
            setUserHasPreference(true);
            setDiffLength(results.data[0]["lengthDiff"])
          } else {
            setUserHasPreference(false);
            setRecommendedSize(null);
            setDiffLength(null)
          }
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <Card>

      <Card.Body>
        <Form>
          <Form.Group controlId="Size">
            <Form.Label>Size</Form.Label>
            <Form.Control
              as="select"
              value={recommendedSize}
            >
              {!recommendedSize && <option selected disabled>Pilih size</option>}
              {props.sizeList.map(ele =>
                <option key={ele["bs_id"]}>{ele["size"]}</option>
              )}
            </Form.Control>
          </Form.Group>

          {/* <p>Bingung ukuran yang pas untuk kamu? Kamu bisa
            <strong> <RecommendSize productId={props["productId"]} /></strong> agar kami bisa milihin buat mu.
          </p> */}


          {recommendedSize && (
            <p>Kami merekomendasikan size: {recommendedSize} dengan perbedaan ukuran sebesar {diffLength} cm dari ukuranmu.</p>
          )}


          {!userHasPreference &&
            <div className="mb-5">
              <TambahPreferensiPopupForm sizeList={props.sizeList} />
            </div>
          }

          <Row>
            <Button variant="outline-success" size="lg" type="submit">
              Beli
            </Button>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default ChooseSizeForm;