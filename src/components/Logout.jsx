import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userAuth } from "../Redux/actions";

export const Logout = () => {
  // Logout component, just log user out and take him to `/` homepage

  // suggestion: if you are storing anyting in redux it's a good idea to
  // empty it before loggin out. eg: order
   const navigate = useNavigate();
  const { isAuth } = useSelector((store) => store);
  const dispatch = useDispatch();
  dispatch(userAuth(false));
  navigate("/");
  return <>
    
  </>;
};
