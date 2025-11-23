import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router";
import useAuth from "../../Hooks/useAuth";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: paymentData = [] } = useQuery({
    queryKey: ["payments", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <div className="bg-base-100 p-8 m-4 rounded-lg">
      <h1 className="text-secondary text-5xl font-extrabold mb-8">
        Payment History
      </h1>

      {/*Data Table*/}
      <div className="overflow-x-auto bg-white rounded-xl shadow p-6">
        <table className="table w-full">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th>Parcel Info</th>
              <th>Sender Info</th>
              <th>Tracking Number</th>
              <th>Payment Info</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {paymentData.map((d, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td>{d.parcelName}</td>
                <td>
                  <p className="font-semibold">{d.customerEmail}</p>
                </td>
                <td>
                  <p>{d.trackingId}</p>
                </td>

                <td>
                  {d.amount} ({d.paymentStatus})
                </td>

                <td className="">
                  <Link className="btn bg-[#94C6CB50] border-0 btn-sm">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
