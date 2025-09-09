import React from "react";
import { cards } from "../cards";

function Card() {
  return (
    <section>
      <div className="container">
        <div className="row">
          {cards.map((item) => (
            <div className="col-md-4 mb-3">
              <div className="innerServ">
                <div class="card">
                  <div className="card-body">
                    <h5 className="card-title"> {item.title} </h5>
                    <p className="card-text">{item.desc}</p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
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
