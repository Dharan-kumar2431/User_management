import { useNavigate, useParams } from "react-router-dom";
import "./Edituser.css";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../Context/Userdetailscontext";

const EdituserFormValidation = (values) => {
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
    !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      values.email
    )
  ) {
    errors.email = "enter '@' and '.com' correctely ";
  }

  if (!values.phone) {
    errors.phone = "this field is requied";
  } else if (!/^([6-9])\d{9}$/.test(values.phone)) {
    errors.phone = "enter valid 10 digit number starts only 6,7,8,9";
  }

  return errors;
};

const Edituser = () => {

    const {userDetailsData , updateUser} = useContext(userContext);
    console.log(userDetailsData)
  const [edituserdata, setedituserdata] = useState(userDetailsData)


  const userPhoneNumber = useParams();
  console.log(userPhoneNumber);

  const navagation = useNavigate();

  const filteruserData = edituserdata.find((values) => values.phone === userPhoneNumber.id);
//   const filteruserdataindex = edituserdata.findIndex((values) => {return values.phone === userPhoneNumber.id});
//   console.log(filteruserdataindex)


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },

    onSubmit: (values) => {
      console.log(values);
    //   const updatedData = [...edituserdata]; 
    //   updatedData[filteruserdataindex] = values;
    //   console.log(updatedData)
    updateUser(values, userPhoneNumber)
    //   setedituserdata();
      navagation('/userdetails')
    },
    validate: EdituserFormValidation,
  });


  useEffect(() => {
    console.log("data");
    console.log(filteruserData);
    if (filteruserData) {
        formik.setValues({
          name: filteruserData.name,
          email: filteruserData.email,
          phone: filteruserData.phone,
        });
      }
  }, [])


  return (
    <div>
      <h3>Edit USERDETAILS</h3>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label className="control-label col-sm-2" htmlFor="name">
              Name<span className="text-danger">*</span> :
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.name && !!formik.errors.name && (
              <div className="text-danger">{formik.errors.name}</div>
            )}
          </div>
          <div>
            <label className="control-label col-sm-2" htmlFor="email">
              Email<span className="text-danger">*</span> :
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && !!formik.errors.email && (
                <div className="text-danger">{formik.errors.email}</div>
              )}
            </div>
          </div>
          <div>
            <label className="control-label col-sm-2" htmlFor="phone">
              Phone<span className="text-danger">*</span> :
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="phone"
                placeholder="Enter phone number"
                name="phone"
                value={formik.values.phone}
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
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edituser;
