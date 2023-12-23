import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Layoutpage = ({ children }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos < prevScrollPos;

      setVisible(isScrollingDown);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const isAtTop = window.scrollY === 0;

  return (
    <>
      <div>
        <nav
          className={`bg-orange-500 z-50 fixed w-full transition-all duration-300 ${
            visible ? "opacity-70" : "opacity-0"
          } ${isAtTop ? "opacity-100" : ""}`}
        >
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div class="relative flex h-16 items-center justify-between">
              <div class="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="/logo.png"
                  alt="Your Company"
                />
              </div>
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <Link
                    to="/Pages/Work"
                    className={`text-white rounded-md px-3 py-2 text-sm font-medium ${
                      location.pathname === "/Pages/Work" ? "underline " : ""
                    }`}
                  >
                    Work
                  </Link>
                  <Link
                    to="/Pages/About"
                    className={`text-white rounded-md px-3 py-2 text-sm font-medium ${
                      location.pathname === "/Pages/About" ? "underline " : ""
                    }`}
                  >
                    About
                  </Link>
                  <Link
                    to="/Pages/Services"
                    className={`text-white rounded-md px-3 py-2 text-sm font-medium ${
                      location.pathname === "/Pages/Services"
                        ? "underline "
                        : ""
                    }`}
                  >
                    Services
                  </Link>
                  <Link
                    to="/Pages/Ideas"
                    className={`text-white rounded-md px-3 py-2 text-sm font-medium ${
                      location.pathname === "/Pages/Ideas" ? "underline " : ""
                    }`}
                  >
                    Ideas
                  </Link>
                  <Link
                    to="/Pages/Careers"
                    className={`text-white rounded-md px-3 py-2 text-sm font-medium ${
                      location.pathname === "/Pages/Careers" ? "underline " : ""
                    }`}
                  >
                    Careers
                  </Link>
                  <Link
                    to="/Pages/Contact"
                    className={`text-white rounded-md px-3 py-2 text-sm font-medium ${
                      location.pathname === "/Pages/Contact" ? "underline " : ""
                    }`}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <main className="container mx-auto">{children}</main>
    </>
  );
};

export default Layoutpage;
