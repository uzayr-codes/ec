import Form from "../Form/form";
import "./banner.css";

function Banner({ title, desc }) {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="bannerInner text-center">
              <h1> {title} </h1>
              <p> {desc} </p>
            </div>
          </div>
          <div className="col-6">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
