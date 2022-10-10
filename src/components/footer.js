import { Link } from "gatsby";
import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="mt-16 bg-white">
        <div className="px-4 py-12 mx-auto overflow-hidden max-w-screen-xl sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <Link
                to="/datenschutz/"
                className="text-base text-gray-500 leading-6 hover:text-gray-900"
              >
                Datenschutz
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link
                to="/impressum/"
                className="text-base text-gray-500 leading-6 hover:text-gray-900"
              >
                Impressum
              </Link>
            </div>
          </nav>
          <div className="mt-8">
            <p className="text-base text-center text-gray-500 leading-6">
              &copy; {new Date().getFullYear()} Itana GmbH.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
