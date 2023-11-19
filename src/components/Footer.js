import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaSnapchatGhost } from "react-icons/fa";

const Footer = () => {
  const icons = [
    <BsTwitter />,
    <BsInstagram />,
    <BsFacebook />,
    <FaSnapchatGhost />,
  ];
  return (

    <div className="bg-white border-t-2 shadow-md  shadow-gray-300 sticky bottom-0 h-50 w-full  justify-center gap-6">
        <div class="row" className="mx-10">
            <div class="column">
            <b>Support</b> 
            <br /><br />
            Help Centre<br />
            AirCover<br />
            Anti-discrimination<br />
            Disability support<br />
            Cancellation options<br />
            Report neighbourhood concern<br />
            </div>
            
            <div class="column">
            <b>Hosting</b> 
            <br /><br />
            Airbnb your home<br/>
            AirCover for Hosts<br/>
            Hosting resources<br/>
            Community forum<br/>
            Hosting responsibly<br/>
            </div>

            <div class="column">
            <b>Airbnb</b> 
            <br /><br />
            Newsroom<br/>
            New features<br/>
            Careers<br/>
            Investors<br/>
            Airbnb.org emergency stays<br/>
            </div>

        </div>

        <div className="bg-white border-t-2 shadow-md  shadow-gray-300 sticky bottom-0 h-20 w-full flex items-center justify-center gap-6">
            {icons.map((icon) => (
            <div className="text-[30px] text-gray-600 hover:text-black duration-100 ease-out ">
                {icon}
            </div>
        ))}
        </div>
    </div>
    
  );
};

export default Footer;