import React, { use } from "react";
import { AuthContext } from "../../AuthProvider/AuthContext";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AllDeliveries = () => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();

  // Data show in table using tanstack query
  const { data: deliveries = [], refetch } = useQuery({
    queryKey: ["all-deliveries", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });

  // delete data from database using tanstack query
  const handleDeleteBtn = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Axios for delete
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  // Payment system using strips
  const handlePayment = async (parcel) => {
    const paymentInfo = {
      parcelId: parcel._id,
      parcelName: parcel.parcelName,
      deliveryCharge: parcel.deliveryCharge,
      senderEmail: parcel.senderEmail,
    };

    const res = await axiosSecure.post("/payment-checkout-session", paymentInfo);
    window.location.assign(res.data.url);
  };

  return (
    <div className="bg-base-100 p-8 m-4 rounded-lg">
      <h1 className="text-secondary text-5xl font-extrabold mb-8">
        All Deliveries
      </h1>

      {/*Data Table*/}
      <div className="overflow-x-auto bg-white rounded-xl shadow p-6">
        <table className="table w-full">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th>Cons. ID</th>
              <th>Parcel Name</th>
              <th>Sender Info</th>
              <th>Receiver Info</th>
              <th>Delivery Status</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {deliveries.map((d, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td></td>
                <td>
                  <p className="font-semibold">{d.parcelName}</p>
                </td>
                <td>{d.senderName}</td>

                <td>
                  <p>{d.receiverName}</p>
                </td>

                <td className={`${d.paymentColor} font-semibold`}>
                  {d.deliveryCharge || 0}
                </td>

                <td className="flex gap-2">
                  {d.paymentStatus === "Paid" ? (
                    <span className="badge badge-success">Paid</span>
                  ) : (
                    <button
                      onClick={() => handlePayment(d)}
                      className="btn bg-primary btn-sm border-0"
                    >
                      Pay
                    </button>
                  )}

                  <Link
                    to={`/dashboard/parcel-details/${d._id}`}
                    className="btn bg-[#94C6CB50] border-0 btn-sm"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => handleDeleteBtn(d._id)}
                    className="btn bg-[#E8333020] btn-sm border-0  text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDeliveries;
