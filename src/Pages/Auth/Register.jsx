import { Link, useNavigate } from "react-router";
import imageUpload from "../../assets/image-upload-icon.png";
import GoogleLoginBtn from "../../Components/SocialLogin/GoogleLoginBtn";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Register = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterForm = (data) => {
    const uploadedImg = data.photo[0];

    createUser(data.email, data.password)
      .then((res) => {
        // upload image
        const formData = new FormData();
        formData.append("image", uploadedImg);

        // image post to imagebb and link create
        const image_api = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_key
        }`;

        axios.post(image_api, formData).then((res) => {
          
          // Add user to database
          const userInfo = {
            email: data.email,
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          axiosSecure.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user created in the database");
            }
          });

          // update user profile
          const updatedData = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(updatedData)
            .then(() => {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Account created successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(location.state || "/");
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
        });
      })
      .catch((err) => {
        console.log("in Create user", err);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-2.4rem)] my-8">
      <form
        onSubmit={handleSubmit(handleRegisterForm)}
        className="w-full max-w-sm"
      >
        <div className="mb-5">
          <h1 className="font-extrabold text-4xl">Create an Account</h1>
          <p>Register with ZapShift</p>
        </div>

        <label className="cursor-pointer w-12 hover:opacity-50 flex mb-5">
          <img src={imageUpload} className="w-full" />
          <input
            type="file"
            {...register("photo", { required: true })}
            className="hidden"
            accept="image/*"
          />
        </label>

        <fieldset className="flex flex-col gap-1 mb-3">
          <label className="font-medium text-sm">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input-field"
            placeholder="Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Name is Required</p>
          )}
        </fieldset>

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

        <button className="button w-full my-3">Register</button>

        <p className="text-[#71717A]">
          Already have an account?{" "}
          <Link to="/login" className="text-[#8FA748] hover:underline">
            Login
          </Link>
        </p>
      </form>

      <GoogleLoginBtn />
    </div>
  );
};

export default Register;
