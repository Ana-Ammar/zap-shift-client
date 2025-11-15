import serviceImg from "../../../assets/service.png";

const data = [
  {
    title: "Express  & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

const OurServices = () => {
  return (
    <div className="bg-secondary my-20 md:p-16 p-6 rounded-4xl">
        <h1 className="font-bold text-3xl my-4 text-base-100 text-center">Our Services</h1>
        <p className="text-[#DADADA] mb-8 text-center">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((d, ind) => (
          <div key={ind} className="space-y-4 p-6 bg-base-100 rounded-2xl flex flex-col items-center text-center hover:bg-primary cursor-pointer">
            <img src={serviceImg} />
            <h1 className="font-bold text-secondary text-lg">{d.title}</h1>
            <p className="text-base-300">{d.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
