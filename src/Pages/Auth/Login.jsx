import { Link, useLocation, useNavigate } from "react-router";
import GoogleLoginBtn from "../../Components/SocialLogin/GoogleLoginBtn";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthContext";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
  const { signInWithEmail } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (data) => {
    signInWithEmail(data.email, data.password)
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state || "/");
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Something went wrong",
          footer: `${err.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-2.4rem)]">
      <form onSubmit={handleSubmit(handleLogin)} className="w-full max-w-sm">
        <div className="mb-5">
          <h1 className="font-extrabold text-4xl">Welcome Back</h1>
          <p>Login with ZapShift</p>
        </div>

        <fieldset className="flex flex-col gap-1 mb-3">
          <label className="font-medium text-sm">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input-field"
            placeholder="Email"
          />

          {errors.name?.type === "required" && (
            <p className="text-red-500">Email is Required</p>
          )}
        </fieldset>

        <fieldset className="flex flex-col gap-1 mb-3">
          <label className="font-medium text-sm">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            className="input-field"
            placeholder="Password"
          />

          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required.</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 characters or longer
            </p>
          )}
        </fieldset>

        <div>
          <a className="link link-hover text-[#71717A]">Forgot password?</a>
        </div>

        <button className="button w-full my-3">Login</button>

        <p className="text-[#71717A]">
          Don’t have any account?{" "}
          <Link to="/register" className="text-[#8FA748] hover:underline">
            Register
          </Link>
        </p>
      </form>

      <GoogleLoginBtn />
    </div>
  );
};

export default Login;
