import Form from "../Form/form";
import "./banner.css";

function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
        <div className="bannerInner text-center">
          <h1>Notary Public & Legal Solutions</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi
            odio aliquid, accusamus.
          </p>
        </div>
      </div>
      <div className="col-6">
       <Form/>
      </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
