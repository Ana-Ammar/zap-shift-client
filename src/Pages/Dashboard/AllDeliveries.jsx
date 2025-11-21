import React, { use } from "react";
import { AuthContext } from "../../AuthProvider/AuthContext";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllDeliveries = () => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();

  // Data show in table using tanstack query
  const {data: deliveries = []} = useQuery({
    queryKey: ["all-deliveries", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      console.log(res.data)
      return res.data;
    },
  });

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

                <td><p>{d.receiverName}</p></td>

                <td className={`${d.paymentColor} font-semibold`}>
                  {d.payment}
                </td>

                <td className="flex gap-2">
                  <button className="btn bg-primary btn-sm border-0">
                    Pay
                  </button>
                  <button className="btn bg-[#94C6CB50] border-0 btn-sm">
                    View
                  </button>
                  <button className="btn bg-[#E8333020] btn-sm border-0  text-red-500">
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
