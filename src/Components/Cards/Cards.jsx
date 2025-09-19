import React from "react";
import { cards } from "../../cards";
import "./cards.css"; 
function Card() {
  return (
    <section>
      <div className="container">
        <div className="row">
          {cards.map((item) => (
            <div className="col-md-4 mb-3">
              <div className="innerServ">
                <div class="card">
                  <h5 className="card-title"> {item.title} </h5>
                  <p className="card-text">{item.desc}</p>
                  <div className="card-body"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Card;
