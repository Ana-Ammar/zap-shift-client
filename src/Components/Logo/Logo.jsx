import logo from "../../assets/logo.png";
const Logo = () => {
  return (
    <div className="flex items-end">
      <img src={logo}></img>
      <h1 className="font-black text-2xl -ms-3 -mb-1.5">ZapShift</h1>
    </div>
  );
};

export default Logo;
