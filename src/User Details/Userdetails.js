import { Link } from "react-router-dom";
import "./Userdetails.css";
import { useContext } from "react";
import { userContext } from "../Context/Userdetailscontext";


const Userdetails = () => {
    const {userDetailsData} = useContext(userContext);
    console.log(userDetailsData);
  return (
    <div className="userdetailspage">
      <div className="userdetailsdiv">
      <h3 className="userdetailsheading">User Details</h3>
      <table className="userdetailstable">
        <thead>
          <tr>
            <th>s.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
        {userDetailsData.map((values, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{values.name}</td>
            <td>{values.email}</td>
            <td>{values.phone}</td>
            <td>
              <Link to={`/edituser/${values.phone}`}>
                <button className="btn btn-primary">edit</button>
              </Link>
            </td>
            <td>
              <button className="btn btn-primary">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
      </div>
    </div>
  );
};

export default Userdetails;
