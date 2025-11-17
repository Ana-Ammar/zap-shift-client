import { Link } from 'react-router';
import imageUpload from '../../assets/image-upload-icon.png'
import GoogleLoginBtn from '../../Components/SocialLogin/GoogleLoginBtn';

const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-2.4rem)] my-8">
      <form className="w-full max-w-sm">
        <div className="mb-5">
          <h1 className="font-extrabold text-4xl">Create an Account</h1>
          <p>Register with ZapShift</p>
        </div>

        <label className="cursor-pointer w-12 hover:opacity-50 flex mb-5">
                <img src={imageUpload} className='w-full'/>
          <input
            type="file"
            className="hidden"
            accept="image/*"
          />
        </label>

        <fieldset className="flex flex-col gap-1 mb-3">
          <label className="font-medium text-sm">Name</label>
          <input type="email" className="input-field" placeholder="Name" />
        </fieldset>

        <fieldset className="flex flex-col gap-1 mb-3">
          <label className="font-medium text-sm">Email</label>
          <input type="email" className="input-field" placeholder="Email" />
        </fieldset>

        <fieldset className="flex flex-col gap-1 mb-3">
          <label className="font-medium text-sm">Password</label>
          <input type="email" className="input-field" placeholder="Password" />
        </fieldset>

         <button type='button' className='button w-full my-3'>Register</button>

         <p className='text-[#71717A]'>Already have an account? <Link to="/login" className='text-[#8FA748] hover:underline'>Login</Link></p>
      </form>

      <GoogleLoginBtn />
    </div>
  );
};

export default Register;
