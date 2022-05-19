import { Outlet } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const Auth = () => {
    const Navigate = useNavigate()

    const token = localStorage.getItem("token");
    if (token === null) {
        return <Navigate to="/login" />;
    }

    else {
        return <Navigate to ="/dashboard"/>;
    }

    return <Outlet/>;

};

export default Auth;