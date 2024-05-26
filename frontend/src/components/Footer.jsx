import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-black text-black h-screen flex flex-col pl-10 md:pl-0 md:px-10  md:flex-row justify-center gap-10 pt-20"
      style={{ backgroundColor: "#F7EEDD" }}
    >
      <div className="mr-10">
        <div className="h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] flex flex-col text-center justify-center items-center rounded-full bg-black border text-white font-grotesque  leading-none font-semibold">
          <span className=" text-xl md:text-3xl">NYANYA</span>
          <span className=" text-md md:text-xl">ASSEMBLY</span>
        </div>
      </div>
      {/* contact */}
      <div className="flex flex-col">
        <h1 className="mb-5 font-grotesque text-xl md:text-2xl">CONTACT US</h1>
        <div className="max-w-sm lg:max-w-md space-y-4 font-poppins text-md md:text-lg">
          <p> Nyanya Area HeadQuaters </p>

          <p className="flex items-center font-light ">
            ‍
            <MdEmail className="mr-2" />
            <span>info@nyanyarea.com</span>
          </p>
          <p className="flex items-center font-light">
            ‍
            <FaPhone className="mr-2 w-4" />
            <span>(+234) 809 670 2056</span>
          </p>
          <p className="flex font-light">
            <FaLocationDot className="mr-3 w-5 mt-1" />
            <span>
              NO. 2, Avenue Nyanya Karu Road Opposite A.A. Rano Filling Station,
              Nyanya, Abuja, FCT
            </span>
          </p>
        </div>
      </div>
      {/* Links */}
      <div className="flex flex-col">
        <h1 className="mb-5 font-grotesque text-md md:text-xl">LINKS</h1>
        <div className="flex flex-col gap-2 font-light font-poppins text-md md:text-lg">
          {links.map((link) => (
            <Link to={link.href}>
              <p key={link.name} className="hover:underline">
                {link.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      {/* SOCIALS */}
      <div className="flex flex-col">
        <h1 className="mb-5 font-grotesque text-xl md:text-xl">SOCIALS</h1>
        <div className="flex flex-col gap-2 font-light font-poppins text-md md:text-lg">
          {socials.map((social) => (
            <Link to={social.href}>
              <p key={social.name} className="hover:underline">
                {social.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Join a group",
    href: "/",
  },
  {
    name: "Plan your visit",
    href: "/plan-your-visit",
  },
];

const socials = [
  {
    name: "Facebook",
    href: "",
  },
  {
    name: "Instagram",
    href: "",
  },
  {
    name: "YouTube",
    href: "",
  },
];
