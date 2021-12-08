import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./HomePage.css";
import { Link } from "react-router-dom";

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
        <h1 className="primary-heading h1">Love Street Foods</h1>
        <p className="primary-content">
          Let's make street food service more organized and favourable. Join us
          in creating an online marketplace for street vendors with their
          customers and make your business more attractive and profitable.
        </p>
        <div>
          <button className="btn btn--signup">
            <Link to="/signup">Signup</Link>
          </button>
          <button className="btn btn--login">
            <Link to="/login"> Login</Link>
          </button>
        </div>
      </div>
      <div>
        <img className="img-fluid img" src="images/hero-img.jpg"></img>
      </div>
    </div>
  );
}
