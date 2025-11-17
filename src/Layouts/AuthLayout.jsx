import { Outlet } from "react-router";
import Logo from "../Components/Logo/Logo";
import authImg from '../assets/authImage.png'
const AuthLayout = () => {
    return (
        <div className="max-w-7xl mx-auto h-screen">
            <div className="grid grid-cols-2 h-screen bg-base-100">
                <div className="h-full">
                        <div className="mt-4 ml-8">
                            <Logo />
                        </div>
                    <Outlet></Outlet>
                </div>
                <div className=" bg-[#FAFDF0] h-full flex justify-center items-center">
                    <img src={authImg} />
                </div>
            </div>


        </div>
    );
};

export default AuthLayout;