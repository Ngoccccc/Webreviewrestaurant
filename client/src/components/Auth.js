import { Outlet } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const Auth = () => {

    // const {authState:{authLoading, isAuthenticated}} = useContext(AuthContext)
    // const navigate = useNavigate()
    // if(authLoading){

    // }
    // else if(isAuthenticated) {

    //     navigate('/dashboard',{ replace: true })
    // }
    // else{

    // }

    return (
        <div className="auth-page">
            
                {<Outlet/>}
            </div>
    
    )
};

export default Auth;