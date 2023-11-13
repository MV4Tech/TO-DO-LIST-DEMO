import { Outlet, Navigate } from "react-router-dom";
import storageService from "../services/storage-service";

const AuthGuardWhenLogin = () => {
    return (
        storageService.retrieveAccessToken() ? <Outlet/> : <Navigate to="/login"/>
    );
};
export default AuthGuardWhenLogin;
