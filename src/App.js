import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./Home/Home";
import Adduser from "./Add User/Adduser";
import Userdetails from "./User Details/Userdetails";
import Edituser from "./Edit User/Edituser";
import { UserProvider } from "./Context/Userdetailscontext";
import { useState } from "react";

const App = () => {
  const [userDetailsData, setuserDetailsData] = useState([
    {
      name: "dharan",
      email: "dharan@gmail.com",
      phone: "6723456323",
    },
    {
      name: "prasad",
      email: "prasad@gmail.com",
      phone: "7623456323",
    },
    {
      name: "balu",
      email: "balu@gmail.com",
      phone: "8723456323",
    },
  ]);

  

  const updateUser = (value, userPhoneNumber) => {
    const filteruserdataindex = userDetailsData.findIndex((values) => {return values.phone === userPhoneNumber.id});
    console.log('id')
    console.log("index")
    console.log(filteruserdataindex)
    const updatedData = [...userDetailsData];
        updatedData[filteruserdataindex] = value;
        console.log("updateddata")
        console.log(updatedData)
        setuserDetailsData(updatedData)
  }

  const addusers = (value) => {
    const newuser = [...userDetailsData, value]
    setuserDetailsData(newuser);
  }


  return (
    <UserProvider value={{userDetailsData, updateUser, addusers}}>
    <Router>
      <Routes>
        <Route index Component={Home}/>
        <Route path="/adduser" Component={Adduser} />
        <Route path="/userdetails" Component={Userdetails} />
        <Route path="/edituser/:id" Component={Edituser} />
      </Routes>
    </Router>
    </UserProvider>
  );
};

export default App;
