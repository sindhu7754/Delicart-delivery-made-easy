import Logo from "./images/favicon.png";
import vector2 from "./images/Vector (2).png";
import vector3 from "./images/Vector (3).png";
import group from "./images/Group.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="w-[90%] mx-auto max-w-[1600px] py-8">
        <div className="flex flex-col lg:flex-row justify-between my-8">
          <div className="mb-4">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="flex space-y-4 flex-col md:flex-row md:space-x-12 md:space-y-0">
            <div className="">
              <h4 className="font-bold mb-4 text-xl">Quick Link</h4>
              <ul className="space-y-2 ml-2 text-base md:text-lg flex flex-col">
                <Link to="/security">Security</Link>

                <Link to="/privacynotice">Privacy Notice</Link>

                <Link to="/terms&categories" className="">
                  Terms & Categories
                </Link>
              </ul>
            </div>
            <div className="">
              <h4 className="font-bold mb-4 text-xl">Categories</h4>
              <ul className="space-y-2 ml-2 text-base md:text-lg flex flex-col">
                <Link to="/">Home & Appliances</Link>
                {/* The foodstuff link is linking to gofood.vercel.app  */}
                <Link to="/">Others</Link>
              </ul>
            </div>
            <div className="">
              <h4 className="font-bold mb-4 text-base md:text-lg">Location</h4>
              <p className="ml-2 text-base md:text-lgl">
               IIIT KOTTAYAM, PALA
              </p>
              <div className="flex space-x-4 mt-8">
                <img src={vector2} alt="facebook_link" />
                <img src={vector3} alt="twitter_link" />
                <img src={group} alt="instagram_link" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
