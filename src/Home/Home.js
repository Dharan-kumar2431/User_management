import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="homepage">
        <div className="homepagebuttons">
          <p className="m-3">To Add user you can click add user</p>
          <div className="adduserbutton">
            <Link to={"/adduser"}>
              <button className="btn btn-primary">Add User</button>
            </Link>
          </div>
          <p className="m-3">To Show user Details you can click User Details</p>
          <div className="userdetailsbutton">
            <Link to={"/userdetails"}>
              <button className="btn btn-primary">User Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
