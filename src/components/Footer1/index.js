import React from "react";

import { Img, Text } from "components";

const Footer1 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="bg-white_A700 flex flex-col gap-[120px] md:gap-[40px] sm:gap-[40px] items-center justify-center p-[77px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-end justify-start md:ml-[0] sm:ml-[0] ml-[42px] mt-[22px] md:w-[100%] sm:w-[100%] w-[94%]">
            <div className="flex flex-col gap-[50px] items-start justify-start md:w-[100%] sm:w-[100%] w-[42%]">
              <div className="flex flex-row gap-[11px] items-center justify-start md:w-[100%] sm:w-[100%] w-[26%]">
                <Img
                  src="images/img_home.svg"
                  className="h-[40px] w-[40px]"
                  alt="home Two"
                />
                <Text
                  className="font-markoone font-normal not-italic text-left text-orange_A700 w-[auto]"
                  variant="body1"
                >
                  Relasto
                </Text>
              </div>
              <ul className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[52%] common-column-list common-column-list common-column-list">
                <li className="w-[auto]">
                  <Text
                    className="cursor-pointer font-manrope font-semibold text-gray_900 text-left"
                    variant="body4"
                  >
                    59 Bervely Hill Ave, Brooklyn Town,  New York, NY 5630, CA,
                    US
                  </Text>
                </li>
                <li className="mt-[28px] w-[auto]">
                  <a
                    className="cursor-pointer font-manrope font-semibold text-[16px] text-gray_900 text-left"
                    href="#"
                  >
                    +056 686 56 56 98 info@staticmania.com
                  </a>
                </li>
                <li className="mt-[45px] w-[78%]">
                  <Img
                    src="defaultNoData.png"
                    className="cursor-pointer h-[30px]"
                    alt="socialmedia"
                  />
                </li>
              </ul>
            </div>
            <div className="bg-white_A700 flex flex-col gap-[34px] items-start justify-start md:mt-[0] sm:mt-[0] mt-[20px] md:w-[100%] sm:w-[100%] w-[8%]">
              <Text
                className="font-bold font-manrope text-gray_900 text-left w-[auto]"
                variant="body3"
              >
                Features
              </Text>
              <Text
                className="font-manrope font-semibold leading-[270.00%] mb-[13px] text-gray_900 text-left sm:w-[100%] w-[85%]"
                variant="body4"
              >
                Home v1
                <br />
                Home v2
                <br />
                About
                <br />
                Contact
                <br />
                Search
              </Text>
            </div>
            <div className="bg-white_A700 flex flex-col gap-[36px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[83px] md:mt-[0] sm:mt-[0] mt-[20px] pb-[10px] md:w-[100%] sm:w-[100%] w-[12%]">
              <Text
                className="font-bold font-manrope text-gray_900 text-left w-[auto]"
                variant="body3"
              >
                Informations
              </Text>
              <Text
                className="font-manrope font-semibold leading-[270.00%] text-gray_900 text-left w-[100%]"
                variant="body4"
              >
                Listing v1
                <br />
                Listing v2
                <br />
                Property Details
                <br />
                Agent List
                <br />
                Agent Profile
              </Text>
            </div>
            <div className="bg-white_A700 flex flex-col gap-[36px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[83px] md:mt-[0] sm:mt-[0] mt-[20px] pb-[10px] md:w-[100%] sm:w-[100%] w-[11%]">
              <Text
                className="font-bold font-manrope text-gray_900 text-left w-[auto]"
                variant="body3"
              >
                Documention
              </Text>
              <Text
                className="font-manrope font-semibold leading-[270.00%] text-gray_900 text-left sm:w-[100%] w-[88%]"
                variant="body4"
              >
                Blog
                <br />
                Blog - single
                <br />
                Privacy Policy
                <br />
                License
                <br />
                404 Page
              </Text>
            </div>
            <div className="bg-white_A700 flex flex-col gap-[36px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[83px] md:mt-[0] sm:mt-[0] mt-[20px] pb-[11px] pr-[11px] md:w-[100%] sm:w-[100%] w-[13%]">
              <Text
                className="font-bold font-manrope text-gray_900 text-left w-[auto]"
                variant="body3"
              >
                Others
              </Text>
              <Text
                className="font-manrope font-semibold leading-[270.00%] mb-[3px] text-gray_900 text-left w-[100%]"
                variant="body4"
              >
                Log in
                <br />
                Enter OTP
                <br />
                New Password
                <br />
                Reset Password
                <br />
                Create Account
              </Text>
            </div>
          </div>
          <Text
            className="font-manrope font-semibold md:ml-[0] sm:ml-[0] ml-[46px] text-gray_900 text-left w-[auto]"
            variant="body4"
          >
            © Static Mania 2022. All rights reserved. / Template Documentation
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;
