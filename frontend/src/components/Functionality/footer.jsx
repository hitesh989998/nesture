import { Link } from 'react-router-dom';
import {
  RiTwitterXFill,
  RiInstagramLine,
  RiFacebookFill,
  RiPinterestLine,
} from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="flex w-full h-1/3 bottom-0 bg-[#F6F6F6] flex-col ">
      <section className="flex w-full justify-around items-center">
        <section className="h-28 w-60 justify-around items-center">
          <img
            src="/imageedit_4_4313599812 (1).png"
            alt="nesture"
            className="p-5"
          />
        </section>

        <section className="flex justify-around">
          <ul className="text-[#5A5F6A] flex gap-4 tracking-wide">
            <li className="text-[#009b7e] hover:text-[#00765e] flex items-center gap-1">
              <Link to="/">Homepage</Link>
            </li>
            <li className="hover:text-[#009b7e] flex items-center gap-1">
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="hover:text-[#009b7e] flex items-center gap-1">
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li className="hover:text-[#009b7e] flex items-center gap-1">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="hover:text-[#009b7e] flex items-center gap-1">
              <Link to="/terms-of-use">Terms of Use</Link>
            </li>
            <li className="hover:text-[#009b7e] flex items-center gap-1">
              <Link to="/sitemap.xml">Sitemap</Link>
            </li>
          </ul>
        </section>

        <section className="flex text-xl gap-2 items-center ">
          <RiFacebookFill className=" hover:bg-[#009b7e] p-2 hover:text-white rounded-full h-10 w-10" />
          <RiTwitterXFill className=" hover:bg-[#009b7e] p-2 hover:text-white rounded-full h-10 w-10" />
          <RiInstagramLine className=" hover:bg-[#009b7e] p-2 hover:text-white rounded-full h-10 w-10" />
          <RiPinterestLine className=" hover:bg-[#009b7e] p-2 hover:text-white rounded-full h-10 w-10" />
        </section>
      </section>

      <section className="w-full text-center flex justify-center items-center mb-3 -mt-7 font-light">
        © 2025 | MERN Stack Project by Hitesh
      </section>
    </footer>
  );
};
export default Footer;
