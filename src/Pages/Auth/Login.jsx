import { Link } from "react-router";
import GoogleLoginBtn from "../../Components/SocialLogin/GoogleLoginBtn";

const Login = () => {
    return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-2.4rem)]">
      <form className="w-full max-w-sm">
        <div className="mb-5">
          <h1 className="font-extrabold text-4xl">Welcome Back</h1>
          <p>Login with ZapShift</p>
        </div>

        <fieldset className="flex flex-col gap-1 mb-3">
          <label className="font-medium text-sm">Email</label>
          <input type="email" className="input-field" placeholder="Email" />
        </fieldset>

        <fieldset className="flex flex-col gap-1 mb-3">
          <label className="font-medium text-sm">Password</label>
          <input type="email" className="input-field" placeholder="Password" />
        </fieldset>

         <div><a className="link link-hover text-[#71717A]">Forgot password?</a></div>

         <button type='button' className='button w-full my-3'>Register</button>

         <p className='text-[#71717A]'>Don’t have any account? <Link to="/register" className='text-[#8FA748] hover:underline'>Register</Link></p>
      </form>

      <GoogleLoginBtn />
    </div>
    );
};

export default Login;