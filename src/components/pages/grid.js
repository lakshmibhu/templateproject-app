import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cards } from "react-bootstrap";
function grid() {
  return (
    <div className="image-page">
      {/* <div className="item"> */}
      <div class="row m6-3 mb-3" id="grid-row">
        <div class="col-sm-3 md-2 item">
          <div class="card">
            <div class="card-title">
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
              ></button>
            </div>
            <div class="card-body">
              <img
                width="200"
                height="200"
                src="https://www.hometown.in/media/product/45/0553/59190/1-catalog_360.jpg"
                alt="1"
              />

              <div className="card-text">BARCELONA CHAIR</div>
              <div className="card-text"> Quantity: 2343</div>
              <div className="card-text"> cost: "$11"</div>
            </div>
          </div>
        </div>
        <div class="col-sm-3 md-2 item">
          <div class="card shadow">
            <div class="card-title">
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
              ></button>
            </div>

            <div class="card-body">
              <img
                width="200"
                height="200"
                src="https://www.decornation.in/wp-content/uploads/2020/07/modern-dining-table-chairs.jpg"
                alt="2"
              />
              <div className="card-text">WASLLY CHAIR</div>
              <div className="card-text"> quantity: 1324</div>
              <div className="card-text"> cost: "$9"</div>
            </div>
          </div>{" "}
        </div>
        <div class="col-sm-3 md-2 item">
          <div class="card shadow">
            <div class="card-title">
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
              ></button>
            </div>
            <div class="card-body">
              <img
                width="200"
                height="200"
                src="https://t4.ftcdn.net/jpg/01/00/49/71/360_F_100497127_zmWDYzXrzuur2bMvoWzqJq2pUqBIi6JX.jpg"
                alt="4"
              />
              <div className="card-text">WOMB CHAIR</div>
              <div className="card-text"> quantity: 2324</div>

              <div className="card-text"> cost: "$12"</div>
            </div>
          </div>
        </div>
        <div class="col-sm-3 md-2 item">
          <div class="card shadow">
            <div class="card-title">
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
              ></button>
            </div>
            <div class="card-body">
              <img
                width="200"
                height="200"
                src="https://m.media-amazon.com/images/I/51ZbN9MFIEL._SL1001_.jpg"
                alt="5"
              />{" "}
              <div className="card-text">KAUSIN LOUNGE CHAIR</div>
              <div className="card-text"> quantity: 1124</div>
              <div className="card-text"> cost: "$11"</div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-3 md-2 item">
          <div class="card shadow">
            <div class="card-title">
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
              ></button>
            </div>
            <div class="card-body">
              <img
                width="200"
                height="200"
                src="https://cpimg.tistatic.com/05389566/b/4/Designer-Single-Seater-Sofa-Chair.jpg"
                alt="6"
              />{" "}
              <div className="card-text">POLIC ASIM CHAIR</div>{" "}
              <div className="card-text"> quantity: 1224</div>
              <div className="card-text"> cost: "$13"</div>
            </div>
          </div>
        </div>
        <div class="col-sm-3 md-2 item">
          <div class="card shadow">
            <div class="card-title">
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
              ></button>
            </div>
            <div class="card-body">
              <img
                width="200"
                height="200"
                src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/72e8a36e-8be4-47bb-b3d5-302b3b2a249a"
                alt="5"
              />{" "}
              <div className="card-text">MISSM LOUNGE CHAIR</div>{" "}
              <div className="card-text"> quantity: 3324</div>
              <div className="card-text"> cost: "$10"</div>
            </div>
          </div>
        </div>
        <div class="col-sm-3 md-2 item">
          <div class="card shadow">
            <div class="card-title">
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
              ></button>
            </div>
            <div class="card-body">
              <img
                width="200"
                height="200"
                src="https://www.stylespafurniture.com/wp-content/uploads/2020/03/Floral_chair-1-300x225.jpg"
                alt="7"
              />{" "}
              <div className="card-text">KNOUNGE LOUNGE CHAIR</div>{" "}
              <div className="card-text"> quantity: 1124</div>
              <div className="card-text"> cost: "$9"</div>
            </div>
          </div>
        </div>
        <div class="col-sm-3 md-2 item">
          <div class="card shadow">
            <div class="card-title">
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
              ></button>
            </div>
            <div class="card-body">
              <img
                width="200"
                height="200"
                src="https://images.all-free-download.com/images/graphiclarge/3d_sofa_picture_167621.jpg"
                alt="4"
              />{" "}
              <div className="card-text">JEMS -LOUNGE CHAIR</div>
              <div className="card-text"> quantity: 1414</div>
              <div className="card-text"> cost: "$12"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default grid;
