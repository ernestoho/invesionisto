import React from "react";

import { Img, Text, Button } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <ul className="bg-white_A700 flex md:flex-col flex-row md:hidden sm:hidden items-center justify-center p-[17px] w-[100%] common-row-list common-row-list common-row-list">
          <li className="ml-[102px] sm:w-[100%] sm:my-[10px] w-[10%] my-[2px]">
            <div className="header-row ">
              <div className="flex flex-row gap-[11px] items-center justify-center">
                <Img
                  src="images/img_home.svg"
                  className="h-[40px] w-[40px]"
                  alt="home"
                />
                <a
                  className="cursor-pointer font-markoone hover:font-normal font-normal hover:h-[undefinedpx] not-italic text-[20px] text-left text-orange_A700 w-[auto] hover:w-[undefinedpx]"
                  href="#"
                >
                  Relasto
                </a>
              </div>
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </li>
          <li className="mt-[13px] mb-[12px] ml-[65px] sm:w-[100%] sm:my-[10px] sm:hidden w-[47%]">
            <div className="flex md:flex-col sm:flex-col flex-row gap-[40px] sm:hidden items-start justify-center">
              <div className="flex flex-row gap-[6px] items-center justify-between md:w-[100%] sm:w-[100%] w-[11%]">
                <a
                  className="cursor-pointer font-manrope hover:font-normal font-semibold hover:h-[undefinedpx] text-[16px] text-gray_900 text-left hover:text-orange_A700 w-[auto] hover:w-[undefinedpx]"
                  href="#"
                >
                  Home
                </a>
                <Img
                  src="defaultNoData.png"
                  className="h-[16px] w-[16px]"
                  alt="arrowdown"
                />
              </div>
              <a
                className="cursor-pointer font-manrope hover:font-normal font-semibold hover:h-[undefinedpx] text-[16px] text-gray_900 text-left hover:text-orange_A700 w-[auto] hover:w-[undefinedpx]"
                href="#"
              >
                About
              </a>
              <div className="flex flex-row gap-[6px] items-start justify-center md:w-[100%] sm:w-[100%] w-[12%]">
                <a
                  className="cursor-pointer font-manrope hover:font-normal font-semibold hover:h-[undefinedpx] text-[16px] text-gray_900 text-left hover:text-orange_A700 w-[auto] hover:w-[undefinedpx]"
                  href="#"
                >
                  Listing
                </a>
                <Img
                  src="defaultNoData.png"
                  className="h-[16px] w-[16px]"
                  alt="arrowdown One"
                />
              </div>
              <div className="flex flex-row gap-[6px] items-start justify-center md:w-[100%] sm:w-[100%] w-[12%]">
                <a
                  className="cursor-pointer font-manrope hover:font-normal font-semibold hover:h-[undefinedpx] text-[16px] text-gray_900 text-left hover:text-orange_A700 w-[auto] hover:w-[undefinedpx]"
                  href="#"
                >
                  Agents
                </a>
                <Img
                  src="defaultNoData.png"
                  className="h-[16px] w-[16px]"
                  alt="arrowdown Two"
                />
              </div>
              <a
                className="cursor-pointer font-manrope hover:font-normal font-semibold hover:h-[undefinedpx] text-[16px] text-gray_900 text-left hover:text-orange_A700 w-[auto] hover:w-[undefinedpx]"
                href="#"
              >
                Property
              </a>
              <div className="flex flex-row gap-[6px] items-start justify-between md:w-[100%] sm:w-[100%] w-[20%]">
                <a
                  className="cursor-pointer font-manrope hover:font-normal font-semibold hover:h-[undefinedpx] text-[16px] text-gray_900 text-left hover:text-orange_A700 w-[auto] hover:w-[undefinedpx]"
                  href="#"
                >
                  Others Pages
                </a>
                <Img
                  src="defaultNoData.png"
                  className="h-[16px] w-[16px]"
                  alt="arrowdown Three"
                />
              </div>
            </div>
          </li>
          <li className="ml-[110px] sm:w-[100%] sm:hidden w-[7%] my-[10px]">
            <div className="flex flex-row gap-[8px] sm:hidden items-center justify-center">
              <Img
                src="images/img_search.svg"
                className="h-[24px] w-[24px]"
                alt="search"
              />
              <a
                className="cursor-pointer font-bold font-manrope hover:font-normal hover:h-[undefinedpx] text-[18px] text-gray_900 text-left hover:text-orange_A700 w-[auto] hover:w-[undefinedpx]"
                href="#"
              >
                Search
              </a>
            </div>
          </li>
          <li className="mb-[1px] ml-[40px] sm:w-[100%] sm:my-[10px] sm:hidden text-center">
            <Button
              className="cursor-pointer font-manrope font-semibold sm:hidden text-[16px] text-center text-white_A700"
              shape="RoundedBorder10"
              size="md"
              variant="FillGray900"
            >
              Log in
            </Button>
          </li>
        </ul>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
