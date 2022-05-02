import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, userAuth } from "../Redux/actions";

export const Login = () => {
  const [user, setUser] = useState({});
  const [dbuser, setdbUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((store) => store);

  const handleLogin = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/users?username=${user.username}`)
      .then(
        (res) => res.json()
        // console.log('response:', response)
        // handle success
        //
      )
      .then((res) => {
        // console.log("response:", res[0])
        setdbUser(res[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={(e) => {
          setUser({ ...user, [e.target.name]: e.target.value });
        }}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={(e) => {
          setUser({ ...user, [e.target.name]: e.target.value });
        }}
      />
      {/* On this button click make network req to find user with same username and password */}

      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button
        type="submit"
        className="submit"
        value="Login"
        onClick={(e) => {
          handleLogin(e);
          if (!dbuser) {
            alert("user Not Found...");
            return;
          }
          if (dbuser.username == user.username) {
            if (dbuser.pass == user.password) {
              if (dbuser.role === "admin") {
                navigate("/orders");
              } else {
                navigate("/neworder");
              }
            }
            dispatch(userAuth(true));
            dispatch(addUser(dbuser));
          }
        }}
      >
        Login
      </button>
    </div>
  );
};
