import { useContext} from "react";
import "./Adduser.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { userContext } from "../Context/Userdetailscontext";

const AdduserFormValidation = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "this field is requied";
  } else if (!(values.name.length >= 1 && values.name.length <= 25)) {
    errors.name = "enter max 20 chacters";
  } else if (/^\s|\s$/.test(values.name)) {
    errors.name = "should not start and end with space";
  }

  if (!values.email) {
    errors.email = "this field is requied";
  } else if (
    !(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      values.email
    ))
  ) {
    errors.email = "enter '@' and '.com' correctely";
  }

  if (!values.phone) {
    errors.phone = "this field is requied";
  } else if (!(/^([6-9])\d{9}$/.test(values.phone))) {
    errors.phone = "enter valid 10 digit number starts only 6,7,8,9";
  }

  return errors;
};

const Adduser = () => {
  // const userdata = useContext(userContext);
  // console.log(userdata);

  // const [adduserdata, setadduserdata] = useState(userdata);
  // console.log(adduserdata);

  const {addusers} = useContext(userContext);

  const navagation = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },

    onSubmit: (values) => {
      console.log(values);
      addusers(values);
      navagation("/userdetails");
    },
    validate: AdduserFormValidation,
  });

  return (
    <div className="adduserpage">
      <div className="adduserwrapped">
        <h3 className="adduserheading">ADD USERDETAILS</h3>
        <div className="container ">
          <form onSubmit={formik.handleSubmit} className="adduserform">
            <div>
              <label className="control-label col-sm-2 m-3" htmlFor="name">
                Name<span className="text-danger">*</span> :
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.name && !!formik.errors.name && (
                <div className="text-danger">{formik.errors.name}</div>
              )}
            </div>
            <div>
              <label className="control-label col-sm-2 m-3" htmlFor="email">
                Email<span className="text-danger">*</span> :
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && !!formik.errors.email && (
                  <div className="text-danger">{formik.errors.email}</div>
                )}
              </div>
            </div>
            <div>
              <label className="control-label col-sm-2 m-3" htmlFor="phone">
                Phone<span className="text-danger">*</span> :
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  placeholder="Enter phone number"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.phone && formik.errors.phone && (
                <div className="text-danger">{formik.errors.phone}</div>
              )}
            </div>
            <div>
              <div>
                <button type="submit" className="btn btn-primary m-3">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Adduser;
