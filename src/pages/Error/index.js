import React from "react";

import { Img, Text, Button } from "components";

const ErrorPage = () => {
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone gap-[116px] md:gap-[40px] sm:gap-[40px] items-center justify-start mx-[auto] md:w-[100%] sm:w-[100%] w-[auto]">
        <header className="bg-white_A700 flex h-[80px] md:h-[auto] sm:h-[auto] items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] py-[19px] w-[100%]">
          <div className="flex flex-1 md:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
            <div className="header-row my-[1px]">
              <div className="flex flex-row gap-[11px] items-center justify-start">
                <Img
                  src="images/img_home.svg"
                  className="h-[40px] w-[40px]"
                  alt="home"
                />
                <Text
                  className="font-normal not-italic text-left text-orange_A700 w-[auto]"
                  variant="body1"
                >
                  Relasto
                </Text>
              </div>
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <ul className="flex sm:flex-1 flex-row font-manrope sm:hidden items-center justify-between sm:w-[100%] w-[492px] common-row-list">
              <li className="mb-[2px] sm:w-[100%] sm:my-[10px] w-[auto]">
                <div className="flex flex-row gap-[6px] items-start justify-start">
                  <a
                    className="cursor-pointer font-semibold hover:h-[undefinedpx] text-[16px] text-gray_900 text-left w-[auto] hover:w-[undefinedpx]"
                    href="#"
                  >
                    Home
                  </a>
                  <Img
                    src="images/img_arrowdown_gray_600_1.svg"
                    className="h-[16px] w-[16px]"
                    alt="arrowdown"
                  />
                </div>
              </li>
              <li className="mb-[1px] sm:w-[100%] sm:my-[10px] w-[auto]">
                <div className="flex flex-row gap-[6px] items-start justify-start">
                  <a
                    className="cursor-pointer font-semibold hover:h-[undefinedpx] text-[16px] text-gray_900 text-left w-[auto] hover:w-[undefinedpx]"
                    href="#"
                  >
                    Listing
                  </a>
                  <Img
                    src="images/img_arrowdown_gray_600_1.svg"
                    className="h-[16px] w-[16px]"
                    alt="arrowdown One"
                  />
                </div>
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                <div className="flex flex-row gap-[6px] items-start justify-start">
                  <a
                    className="cursor-pointer font-semibold hover:h-[undefinedpx] text-[16px] text-gray_900 text-left w-[auto] hover:w-[undefinedpx]"
                    href="#"
                  >
                    Agents
                  </a>
                  <Img
                    src="images/img_arrowdown_gray_600_1.svg"
                    className="h-[16px] w-[16px]"
                    alt="arrowdown Two"
                  />
                </div>
              </li>
              <li className="mb-[1px] sm:w-[100%] sm:my-[10px] w-[auto]">
                <a
                  className="cursor-pointer font-semibold hover:h-[undefinedpx] text-[16px] text-gray_900 text-left hover:w-[undefinedpx]"
                  href="#"
                >
                  Property
                </a>
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
                <a
                  className="cursor-pointer font-semibold hover:h-[undefinedpx] text-[16px] text-gray_900 text-left hover:w-[undefinedpx]"
                  href="#"
                >
                  Blog
                </a>
              </li>
            </ul>
            <div className="flex flex-row font-manrope gap-[40px] h-[42px] md:h-[auto] sm:h-[auto] sm:hidden items-center justify-start w-[228px]">
              <Button
                className="flex items-center justify-center text-center w-[100%]"
                leftIcon={
                  <Img
                    src="images/img_search.svg"
                    className="mr-[8px] text-center"
                    alt="search"
                  />
                }
                size="sm"
              >
                <div className="bg-transparent cursor-pointer font-bold text-[18px] text-gray_900 text-left">
                  Search
                </div>
              </Button>
              <Button
                className="cursor-pointer font-semibold text-[16px] text-center text-white_A700 w-[100%]"
                shape="RoundedBorder10"
                size="md"
                variant="FillGray900"
              >
                Log in
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col font-manrope gap-[30px] items-center justify-start md:px-[20px] sm:px-[20px] sm:w-[100%] w-[auto]">
          <Img
            src="images/img_frame1000001686.svg"
            className="h-[480px] w-[464px]"
            alt="Frame1000001686"
          />
          <div className="flex flex-col gap-[24px] items-center justify-start w-[auto]">
            <Text
              className="text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h4"
              variant="h4"
            >
              Something wrong!
            </Text>
            <Button
              className="flex items-center justify-center text-center"
              rightIcon={
                <Img
                  src="images/img_arrowright_16X16.svg"
                  className="ml-[10px] text-center"
                  alt="arrow_right"
                />
              }
              shape="RoundedBorder10"
              size="6xl"
              variant="OutlineGray600"
            >
              <div className="bg-transparent cursor-pointer font-bold text-[18px] text-gray_900 text-left">
                Homepage
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
