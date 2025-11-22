import { useParams } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ParcelDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

// Load data using tanstack query
const {data: parcelDetails = {}} = useQuery({
    queryKey: ['parcel-details', id],
    queryFn: async () => {
        const res = await axiosSecure.get(`/parcels/${id}`)
        console.log(res.data)
        return res.data
    }
})  

console.log(parcelDetails)
  return   <div className="bg-base-100 p-8 m-4 rounded-lg">
            <h1 className="text-5xl font-bold text-secondary mb-8">Parcel Details</h1>

            {/* ------- Sender + Receiver Info ------- */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">

                {/* Sender */}
                <div className="bg-[#F5F5F5] shadow rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-4">Sender Info</h2>
                    <div className="space-y-2 text-sm">
                        <p><strong>Name:</strong> {parcelDetails?.senderName}</p>
                        {/* <p><strong>Phone:</strong> {parcelDetails?.senderContact || +8801234567890}</p> */}
                        <p><strong>Email:</strong> {parcelDetails?.senderEmail}</p>
                        <p><strong>Region:</strong> {parcelDetails?.senderRegion}</p>
                        <p><strong>Address:</strong> {parcelDetails?.senderAddress}</p>
                    </div>
                </div>

                {/* Receiver */}
                <div className="bg-[#F5F5F5] shadow rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-4">Receiver Info</h2>
                    <div className="space-y-2 text-sm">
                        <p><strong>Name:</strong> {parcelDetails?.receiverName}</p>
                        {/* <p><strong>Phone:</strong> {parcelDetails?.receiver.Phone || +8801234567889}</p> */}
                        <p><strong>Email:</strong> {parcelDetails?.receiverEmail}</p>
                        <p><strong>Region:</strong> {parcelDetails?.receiverRegion}</p>
                        <p><strong>Address:</strong> {parcelDetails?.receiverAddress}</p>
                    </div>
                </div>

            </div>

            {/* ------- Parcel Details ------- */}
            <div className="bg-[#F5F5F5] shadow rounded-xl p-6 w-1/2">
                <h2 className="text-xl font-semibold mb-4">Parcel Details</h2>
                <div className="space-y-2 text-sm">
                    <p><strong>Title:</strong> {parcelDetails?.parcelName}</p>
                    <p><strong>Type:</strong> {parcelDetails?.parcelType}</p>
                    <p><strong>Weight:</strong> {parcelDetails?.parcelWeight}</p>
                    <p><strong>Charge:</strong> {parcelDetails?.deliveryCharge}</p>
                    <p><strong>Delivery Instruction:</strong> {parcelDetails?.senderInstruction}</p>
                    {/* <p><strong>Status:</strong> {parcel.status}</p>
                    <p><strong>Pickup Instruction:</strong> {parcel.pickupInstruction}</p>
                    <p><strong>Tracking Number:</strong> {parcel.trackingNumber}</p>
                    <p><strong>Pickup OTP:</strong> {parcel.pickupOtp}</p>
                    <p><strong>Delivery OTP:</strong> {parcel.deliveryOtp}</p> */}
                </div>
            </div>
        </div>;
};

export default ParcelDetails;
