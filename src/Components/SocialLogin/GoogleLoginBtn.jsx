import { FcGoogle } from "react-icons/fc";

const GoogleLoginBtn = () => {
    return (
        <div>
            <p className="text-[#71717A] text-center my-3">Or</p>
            <button className="button bg-[#E9ECF1]! w-sm  flex justify-center items-center gap-2"><FcGoogle /> Login with Google</button>
        </div>
    );
};

export default GoogleLoginBtn;