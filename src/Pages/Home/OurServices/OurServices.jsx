import { useEffect, useState } from "react";
import serviceImg from "../../../assets/service.png";

const OurServices = () => {
  const [services, setServices] = useState([])

  useEffect(()=>{
    fetch('/services.json')
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])
  
  return (
    <div className="bg-secondary my-20 md:p-16 p-6 rounded-4xl">
        <h1 className="font-bold text-3xl my-4 text-base-100 text-center">Our Services</h1>
        <p className="text-[#DADADA] mb-8 text-center">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {services.map((d, ind) => (
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
