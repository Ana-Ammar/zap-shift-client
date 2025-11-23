import riderImage from '../../assets/agent-pending.png'
import { useForm } from "react-hook-form";

const BeRider = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // Replace this with your API call / zap / webhook
    console.log("Rider data submitted:", data);
    // alert("Rider application submitted! Check console for data.");
    // reset();
  };

   return (
    <div className="my-8 mx-auto p-16 bg-base-100 shadow-lg rounded-2xl">
       <h1 className="text-5xl font-extrabold">Be a Rider</h1>
            <p className="py-3 text-sm text-gray-500 w-1/2">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>

        <hr className="my-6 opacity-15" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Form */}
          <div className="pr-4">
            <h2 className="text-xl font-bold text-emerald-700 mb-4">Tell us about yourself</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label"><span className="label-text">Your Name</span></label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`input input-bordered ${errors.name ? 'input-error' : ''}`}
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <span className="text-error text-sm mt-1">{errors.name.message}</span>}
                </div>

                <div className="form-control">
                  <label className="label"><span className="label-text">Your age</span></label>
                  <input
                    type="number"
                    placeholder="Your age"
                    className={`input input-bordered ${errors.age ? 'input-error' : ''}`}
                    {...register("age", {
                      required: "Age is required",
                      valueAsNumber: true,
                      min: { value: 18, message: "Minimum age is 18" },
                      max: { value: 65, message: "Maximum age is 65" },
                    })}
                  />
                  {errors.age && <span className="text-error text-sm mt-1">{errors.age.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label"><span className="label-text">Your Email</span></label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`input input-bordered ${errors.email ? 'input-error' : ''}`}
                    {...register("email", { required: "Email is required", pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: "Invalid email" } })}
                  />
                  {errors.email && <span className="text-error text-sm mt-1">{errors.email.message}</span>}
                </div>

                <div className="form-control">
                  <label className="label"><span className="label-text">Your Region</span></label>
                  <select className={`select select-bordered w-full ${errors.region ? 'select-error' : ''}`} {...register("region", { required: "Region is required" })}>
                    <option value="">Select your region</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chattogram">Chattogram</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Barishal">Barishal</option>
                    <option value="Mymensingh">Mymensingh</option>
                  </select>
                  {errors.region && <span className="text-error text-sm mt-1">{errors.region.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label"><span className="label-text">NID No</span></label>
                  <input
                    type="text"
                    placeholder="NID"
                    className={`input input-bordered ${errors.nid ? 'input-error' : ''}`}
                    {...register("nid", { required: "NID is required" })}
                  />
                  {errors.nid && <span className="text-error text-sm mt-1">{errors.nid.message}</span>}
                </div>

                <div className="form-control">
                  <label className="label"><span className="label-text">Contact</span></label>
                  <input
                    type="text"
                    placeholder="Contact"
                    className={`input input-bordered ${errors.contact ? 'input-error' : ''}`}
                    {...register("contact", {
                      required: "Contact is required",
                      pattern: { value: /^(?:\+?88)?01[3-9]\d{8}$/, message: "Enter a valid BD phone number" },
                    })}
                  />
                  {errors.contact && <span className="text-error text-sm mt-1">{errors.contact.message}</span>}
                </div>
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text">Which wire-house you want to work?</span></label>
                <select className={`select select-bordered w-full ${errors.warehouse ? 'select-error' : ''}`} {...register("warehouse", { required: "Please select a warehouse" })}>
                  <option value="">Select wire-house</option>
                  <option value="North Hub">North Hub</option>
                  <option value="South Hub">South Hub</option>
                  <option value="East Hub">East Hub</option>
                  <option value="West Hub">West Hub</option>
                </select>
                {errors.warehouse && <span className="text-error text-sm mt-1">{errors.warehouse.message}</span>}
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text">Upload NID (optional)</span></label>
                <input type="file" className="file-input file-input-bordered w-full" {...register("nidFile")} />
              </div>

              <div className="form-control mt-4">
                <button type="submit" className="btn btn-success">Submit</button>
              </div>
            </form>
          </div>

          {/* Right: Illustration */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              {/* using the local image path provided to the assistant's environment */}
              <img src={riderImage} alt="rider-illustration" className="w-full object-contain" />
            </div>
          </div>
        </div>
    </div>
  );
}

export default BeRider;
