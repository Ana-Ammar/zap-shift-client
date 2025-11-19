import { useState } from "react";
import { FaBoxOpen, FaUser, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const AddParcel = () => {
  const [parcelType, setParcelType] = useState("Document");
  return (
    <div className="my-8 mx-auto p-16 bg-base-100 shadow-lg rounded-2xl">
      <h2 className="font-bold text-5xl pb-4">Add Parcel</h2>
      <hr className="text-gray-200 my-8"></hr>

      {/* Parcel Details */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold">Enter Your Parcel Details</h3>

        <div className="flex gap-8 font-semibold items-center my-8">
          <label className="cursor-pointer">
            <span>Document</span>
            <input
              type="radio"
              name="parcelType"
              value="Document"
              checked={parcelType === "Document"}
              onChange={() => setParcelType("Document")}
              className="radio ml-2"
            />
          </label>
          <label className="cursor-pointer">
            <span>Non-Document</span>
            <input
              type="radio"
              name="parcelType"
              value="Non-Document"
              checked={parcelType === "Non-Document"}
              onChange={() => setParcelType("Non-Document")}
              className="radio ml-2"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <fieldset className="flex flex-col gap-1 mb-3">
            <label className="font-medium text-sm">Parcel Name</label>
            <input
              type="text"
              placeholder="Parcel Name"
              className="input-field"
            />
          </fieldset>

          <fieldset className="flex flex-col gap-1 mb-3">
            <label className="font-medium text-sm">Parcel Weight (KG)</label>
            <input
              type="number"
              placeholder="Parcel Weight (kg)"
              className="input-field"
            />
          </fieldset>
        </div>
      </div>

      <hr className="text-gray-200 my-8"></hr>

      {/* Sender Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mb-6 space-y-6">
          <h3 className="text-lg font-semibold mb-7">Sender Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <fieldset className="flex flex-col gap-1">
              <label className="font-medium text-sm">Sender Name</label>
              <input
                type="text"
                placeholder="Sender Name"
                className="input-field"
              />
            </fieldset>

            <fieldset className="flex flex-col gap-1">
              <label className="font-medium text-sm">
                Sender Pickup Wire house
              </label>
              <select className="input-field">
                <option disabled selected>
                  Sender Pickup Wire House
                </option>
                <option>Warehouse A</option>
                <option>Warehouse B</option>
              </select>
            </fieldset>

            <fieldset className="flex flex-col gap-1">
              <label className="font-medium text-sm">Address</label>
              <input type="tel" placeholder="Address" className="input-field" />
            </fieldset>

            <fieldset className="flex flex-col gap-1">
              <label className="font-medium text-sm">Sender Contact No</label>
              <input
                type="text"
                placeholder="Sender Contact No"
                className="input-field"
              />
            </fieldset>
          </div>

          <fieldset className="flex flex-col gap-1">
            <label className="font-medium text-sm">Sender Region</label>
            <select className="input-field">
              <option disabled selected>
                Select Region
              </option>
              <option>North</option>
              <option>South</option>
            </select>
          </fieldset>

          <fieldset className="flex flex-col gap-1">
            <label className="font-medium text-sm">Pickup Instruction</label>
            <textarea
              placeholder="Pickup Instruction"
              className="input-field"
              rows={4}
            />
          </fieldset>
        </div>

        {/* Receiver Details */}

         <div className="mb-6 space-y-6">
          <h3 className="text-lg font-semibold mb-7">Receiver Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <fieldset className="flex flex-col gap-1">
              <label className="font-medium text-sm">Receiver Name</label>
              <input
                type="text"
                placeholder="Receiver Name"
                className="input-field"
              />
            </fieldset>

            <fieldset className="flex flex-col gap-1">
              <label className="font-medium text-sm">
                Receiver Pickup Wirehouse
              </label>
              <select className="input-field">
                <option disabled selected>
                  Receiver Pickup WireHouse
                </option>
                <option>Warehouse A</option>
                <option>Warehouse B</option>
              </select>
            </fieldset>

            <fieldset className="flex flex-col gap-1">
              <label className="font-medium text-sm">Address</label>
              <input type="tel" placeholder="Address" className="input-field" />
            </fieldset>

            <fieldset className="flex flex-col gap-1">
              <label className="font-medium text-sm">Receiver Contact No</label>
              <input
                type="text"
                placeholder="Receiver Contact No"
                className="input-field"
              />
            </fieldset>
          </div>

          <fieldset className="flex flex-col gap-1">
            <label className="font-medium text-sm">Receiver Region</label>
            <select className="input-field">
              <option disabled selected>
                Select Region
              </option>
              <option>North</option>
              <option>South</option>
            </select>
          </fieldset>

          <fieldset className="flex flex-col gap-1">
            <label className="font-medium text-sm">Pickup Instruction</label>
            <textarea
              placeholder="Pickup Instruction"
              className="input-field"
              rows={4}
            />
          </fieldset>
        </div>

      </div>

      {/* Footer */}
       <div className="text-sm text-gray-500 my-8">* Pickup Time 4pm–7pm Approx.</div>
      <button className="button">
        Proceed to Confirm Booking
      </button>
    </div>
  );
};

export default AddParcel;
