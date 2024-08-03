import React from "react";
import { logo } from "../images/Images";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navbarmenu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Our Stores", link: "/OurStores" },
    { id: 3, name: "About Us", link: "/aboutus" },
    { id: 4, name: "Products", link: "/products" },
    { id: 5, name: "Gallery", link: "/gallery" },
    { id: 6, name: "News & Events", link: "/newsevents" }
  ];

  return (
    <div>
      <div className="bg-customBlue py-[10px]">
        <div className="lg:max-w-[1440px] m-auto">
          <div className="flex lg:flex-row justify-between items-center">
            <div>
              <p className="flex items-center gap-[10px] text-white font-poppins text-[14px]">
                <span className="text-[20px]">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </span>
                <span>
                  Ground Laxminarayan Apartment, 2, Ghod Dod Rd, Athwa, Surat,
                  Gujarat 395007
                </span>
              </p>
            </div>

            <div>
              <p className="flex items-center gap-[10px] text-white font-poppins text-[14px]">
                <span className="text-[20px]">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </span>
                <span>+91 9558319830</span>
              </p>
            </div>

            <div>
              <p className="flex items-center gap-[10px] text-white font-poppins text-[14px]">
                <span className="text-[20px]">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
                <span>info@m4mformen.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white navbar_shadow">
        <div className="lg:max-w-[1440px] m-auto flex justify-between items-center py-[10px]">
          <div>
            <img src={logo} alt="logo" className="logo lg:w-[120px]" />
          </div>

          <nav>
            <ul className="flex gap-[30px]">
              {navbarmenu.map((item) => (
                <li key={item.id} className="relative">
                  <Link
                    to={item.link}
                    className={`font-poppins transition-colors duration-300 text-[19px] font-normal  inline-block  font-extralight${
                      location.pathname === item.link
                        ? "text-customBlue bg-customRed"
                        : "text-black hover:text-customBlue"
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.link && (
                      <span className="absolute lg:bottom-[-31px] lg:left-[-8px] lg:right-[-10px] h-[4px] bg-customBlue home_border"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <Link className="inline-block text-[19px] bg-customBlue text-white py-[10px] px-[25px] font-poppins rounded-[7px]">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
