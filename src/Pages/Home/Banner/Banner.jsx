import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner_img_1 from "../../../assets/banner/banner1.png";
import banner_img_2 from "../../../assets/banner/banner2.png";
import banner_img_3 from "../../../assets/banner/banner3.png";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Banner = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
     showArrows={false}
    >
      <div className="relative w-full md:h-[600px]">
        <img src={banner_img_1} className="w-full h-full object-cover rounded-2xl"/>
        <div className="absolute bottom-18 left-20 hidden md:flex items-center justify-center bg-white">
            <button className="btn bg-primary rounded-full border-0">Track Your Parcel</button>
            <button className="active:scale-95 transition-transform hover:cursor-pointer"><BsArrowUpRightCircleFill size={46}/> </button>
            <button className="btn ml-4">Be A Rider</button>
        </div>
      </div>

            <div className="relative w-full md:h-[600px]">
        <img src={banner_img_2} className="w-full h-full object-cover rounded-2xl"/>
        <div className="absolute bottom-20 left-20 hidden md:flex items-center justify-center">
            <button className="btn bg-primary rounded-full border-0">Track Your Parcel</button>
            <button className="active:scale-95 transition-transform hover:cursor-pointer"><BsArrowUpRightCircleFill size={46}/> </button>
            <button className="btn ml-4 shadow-none">Be A Rider</button>
        </div>
      </div>

            <div className="relative w-full md:h-[600px]">
        <img src={banner_img_3} className="w-full h-full object-cover rounded-2xl"/>
        <div className="absolute bottom-27 left-20 hidden md:flex items-center justify-center">
            <button className="btn bg-primary rounded-full border-0 shadow-none">Track Your Parcel</button>
            <button className="active:scale-95 transition-transform hover:cursor-pointer"><BsArrowUpRightCircleFill size={46}/> </button>
            <button className="btn ml-4 shadow-none">Be A Rider</button>
        </div>
      </div>
     
    </Carousel>
  );
};

export default Banner;
