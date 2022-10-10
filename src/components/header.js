import React, { useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Helmet from "react-helmet";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <div className="bg-white max-w-screen">
      <Helmet>
        <script
          id="usercentrics-cmp"
          data-settings-id="oVM0OC3Mr"
          src="https://app.usercentrics.eu/browser-ui/latest/bundle.js"
          defer
        ></script>
      </Helmet>
      <nav className="mx-auto align-baseline max-w-7xl">
        <div className="flex flex-wrap items-center justify-between p-4 mr-2 md:p-8">
          <Link to="/" className="flex items-center text-white no-underline ">
            <img
              src="/itana_subline.png"
              alt="Icon"
              className="w-24 mr-4"
            ></img>
          </Link>

          <button
            className="flex items-center block px-3 py-2 text-black border border-white rounded md:hidden xs:mt-2"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } md:block md:flex md:items-center w-full md:w-auto`}
          >
            <div className="">
              <Link
                to="/kontakt/"
                className="block mt-4 mr-4 text-gray-900 no-underline md:inline-block md:mt-0"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
