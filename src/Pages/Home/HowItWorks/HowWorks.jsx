import bookingImg from "../../../assets/bookingIcon.png";

const HowWorks = () => {
  const title = [
    "Booking Pick & Drop",
    "Cash On Delivery",
    "Delivery Hub",
    "Booking SME & Corporate",
  ];
  return (
    <div className="my-20 md:px-16 px-6">
      <h1 className="font-bold text-3xl mb-8">How it Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {title.map((t, ind) => (
          <div key={ind} className="space-y-4 p-6 bg-base-100 rounded-2xl">
            <img src={bookingImg} />
            <h1 className="font-bold text-secondary text-lg">{t}</h1>
            <p className="text-base-300">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>    
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWorks;
