import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOrders } from "../Redux/actions";

export const NewOrder = () => {
  // Get data of only this user. store it in redux
  // GET /orders?owner_name=john will give you all order of user john
  //  on submit click create a new order, new order has status `Not Accepted`

  const navigate = useNavigate();
  const { isAuth, User, orders } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = () => {
    axios
      .get(`http://localhost:8080/orders?owner_name=${User.username}`)
      .then((res) => dispatch(addOrders(res.data)));
  };

  if (!isAuth) {
    const fun = () => {
      navigate("/login");
    };
    fun();
  }
  return (
    <div>
      <div className="form">
        <input
          className="new-problem"
          type="text"
          name="problem"
          placeholder="Enter problem"
        />
        {/* This input is readonly, it's coming from redux */}
        <input
          className="owner-name"
          type="text"
          name="owner_name"
          placeholder="yourname"
          readOnly
          value={User.username}
        />
        <input
          className="brand"
          type="text"
          name="brand"
          placeholder="Enter brand name"
        />
        {/* Create new problem, show it in below form immediately */}
        <button className="submit">submit</button>
      </div>

      <div className="pastOrders">
        {/* this button filters the data below. */}
        {/* it's just a toggle of redux state something like `showUnfinished`  */}
        <button className="filter">
          {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
        </button>

        {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
        <div className="past-orders">
          <span className="id"></span>. <span className="problem"></span>{" "}
          <span className="cost">
            {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}
          </span>
          <p className="status">Status: </p>
          <hr />
          <div>
            {orders.map((e) => (
              <div style={{ padding: "20px 4px" }}>
                {e.id}. {e.problem} - {e.brand} - {e.cost ? "$" + e.cost : null}
                <div>
                  {e.owner_name} == {e.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
