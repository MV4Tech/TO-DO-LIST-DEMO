import { Outlet, Navigate } from "react-router-dom";
import storageService from "../services/storage-service";

const AuthGuardWhenLogout = () => {
    return (
        !storageService.retrieveAccessToken() ? <Outlet/> : <Navigate to="/dashboard"/>
    );
};
export default AuthGuardWhenLogout;
