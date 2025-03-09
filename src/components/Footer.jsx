import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#ffffff] shadow">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 Musique™
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <p href="#" className="mr-4 hover:underline md:mr-6 ">
              <Link to={`/aboutus`}>About Us</Link>
            </p>
          </li>
          <li>
            <p className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </p>
          </li>
          <li>
            <p className="mr-4 hover:underline md:mr-6">
              Licensing
            </p>
          </li>
          <li>
            <p className="hover:underline">
            <Link to={`/contactus`}>Contact Us</Link>
            </p>
          </li>
        </ul>
      </div>
    </footer>
  );
}
