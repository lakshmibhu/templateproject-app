import React from "react";
import Menuitem from  "./components/pages/Menuitem";

import { Col, Row, Container } from "react-bootstrap";
// import { Redirect } from "react-router-dom";

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {
          name: "BARCELONA CHAIR",

          quantity: 2343,
          text: "MARCEL BEWERE",
          id: 1,
          linkUrl: "/BARCELONA CHAIR",

          imageUrl:
            "https://www.hometown.in/media/product/45/0553/59190/1-catalog_360.jpg",
        },
        {
          name: "WASLLY CHAIR",
          text: "Luvic hawale breech",
          quantity: 2343,
          id: 2,
          linkUrl: "/WASLLY CHAIR",

          imageUrl:
            "https://www.decornation.in/wp-content/uploads/2020/07/modern-dining-table-chairs.jpg",
        },
        {
          name: "WOMB CHAIR",
          text: "MARC WOMB",
          quantity: 1324,
          id: 3,
          linkUrl: "/WOMB CHAIR",
          cost: "$12",
          imageUrl:
            "https://ii1.pepperfry.com/media/catalog/product/s/…nic-chair-in-grey-colour-by-star-india-y2estu.jpg",
        },
        {
          name: "KAUSIN LOUNGE CHAIR ",
          text: "MARC KRUSIN",
          quantity: 3213,
          id: 4,
          linkUrl: "/KAUSIN LOUNGE CHAIR",
          cost: "$16",
          imageUrl:
            "https://www.ulcdn.net/images/products/334900/produ…Owen_Lounge_Chair_Midnight_Blue_LP.jpg?1619007759",
        },
        {
          name: "POLIC ASIM CHAIR",
          text: "POLL LOCK",
          quantity: 1232,
          id: 5,
          linkUrl: "/POLIC ASIM CHAIR",
          cost: "$15",
          imageUrl:
            "https://www.humanscale.com/userFiles/images/seating/summa/summa_product.jpg",
        },
        {
          name: "MISSM LOUNGE CHAIR",
          text: "TENS MISSON",
          quantity: 1221,
          id: 6,
          linkUrl: "/MISSM LOUNGE CHAIR",
          cost: "$13",
          imageUrl:
            "	https://www.hermanmiller.com/content/dam/hmicom/pa…ir/th_prd_ruby_chair_office_chairs_seating_fn.jpg",
        },
        {
          name: "KNOUNGE LOUNGE CHAIR",
          text: "FRODIANCE KNOLLE",
          quantity: 1124,
          id: 7,
           linkUrl: "/KNOUNGE LOUNGE CHAIR",
          cost: "$11",
          imageUrl:
            "	https://chairish-prod.freetls.fastly.net/image/pro…ern-swivel-egg-chair-fritz-hansen-style-1803-25",
        },
        {
          name: "JEMS -LOUNGE CHAIR",
          text: "MARCS KNORE LOUNGE",
          id: 8,
          quantity: 1424,
          linkUrl: "/JEMS -LOUNGE CHAIR",
          cost: "$12",
          imageUrl:
            "	https://chairish-prod.freetls.fastly.net/image/pro…ern-swivel-egg-chair-fritz-hansen-style-1803-2565",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            {this.state.categories.map((category) => (
              <Col md="5" className="columns">
                <Menuitem categoryname={category} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Directory;
