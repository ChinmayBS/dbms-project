
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./HomePage.css";

export default function HomePage() {
  const loadSignupPage = () => {
    console.log("SignUp button clicked!");
  };
  const loadLoginPage = () => {
    console.log("Sign up page is clicked! ");
  };

  return (
    <div className="container d-flex home">
      <div className=" content">
        <h1 className="primary-heading h1">Love Street Foods?</h1>
        <p className="primary-content">
          Let's make street food service more organized and favourable. Join us
          in an online marketplace for street vendors with your
          customers and make your business more attractive and profitable.
        </p>
        <div>
          <button className="btn btn--know-more" onClick={loadSignupPage}>
            Know more
          </button>
          <button className="btn btn--signup" onClick={loadLoginPage}>
            SignUp
          </button>
        </div>
      </div>
      <div>
        <img className="img-fluid img" src="images/hero-img.jpg"></img>
      </div>
    </div>
  );
}
