import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthProvider/AuthContext";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";

const GoogleLoginBtn = () => {
  const { loginUserWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()

  const handleGoogleLogin = () => {
    loginUserWithGoogle()
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Welcome Back${res._tokenResponse.firstName}`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location.state || "/")
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Please try again",
          showConfirmButton: false,
          timer: 1500,
          footer: `${err.message}`,
        });
      });
  };
  return (
    <div>
      <p className="text-[#71717A] text-center my-3">Or</p>
      <button
        onClick={handleGoogleLogin}
        className="button bg-[#E9ECF1]! w-sm  flex justify-center items-center gap-2"
      >
        <FcGoogle /> Login with Google
      </button>
    </div>
  );
};

export default GoogleLoginBtn;
