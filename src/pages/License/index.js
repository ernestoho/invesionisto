import React from "react";

import { Img, Text, Button } from "components";

const LicensePage = () => {
  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone gap-[100px] md:gap-[40px] sm:gap-[40px] items-start justify-start mx-[auto] md:w-[100%] sm:w-[100%] w-[auto]">
        <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[60px] items-start justify-start w-[100%]">
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
                <li className="mb-[1px] sm:w-[100%] sm:my-[10px] w-[auto]">
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
          <div className="flex flex-col font-manrope items-start justify-start pl-[120px] pr-[324px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[60px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
              <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                  <Text
                    className="text-gray_900 text-left tracking-ls092 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    License
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                    variant="body3"
                  >
                    Last updated: January 2020
                  </Text>
                </div>
                <Text
                  className="font-normal leading-[180.00%] not-italic text-gray_600 text-left"
                  variant="body3"
                >
                  Your content remains yours, which means that you retain any
                  intellectual property rights that you have in your content.
                  For example, you have intellectual property rights in the
                  creative content you make, such as reviews you write. Or you
                  may have the right to share someone else’s creative content if
                  they’ve given you their permission.
                  <br />
                  We need your permission if your intellectual property rights
                  restrict our use of your content. You provide Google with that
                  permission through this license.
                </Text>
              </div>
              <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    What’s covered
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                    variant="body3"
                  >
                    This license covers your content if that content is
                    protected by intellectual property rights.
                  </Text>
                </div>
                <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    What’s not covered
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[996px] not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    We use cookies to recognize and monitor users, their on-site
                    behavior, and their preferences for accessing their website.
                    These cookies include the IP and time of visits by visitors.
                    Visitors to StaticMania that do not want cookies put on
                    their browsers should configure their browsers to reject
                    cookies before using the StaticMania website.
                  </Text>
                </div>
                <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Price Updates
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    We will need to update this policy from time to time to
                    ensure that it remains up-to-date with the latest legal
                    requirements and any improvements to our privacy management
                    practices.
                    <br />
                    When we change the policy, we will make sure that we inform
                    you, if any, of such changes. A copy of this policy’s latest
                    version will always be available at this page.
                  </Text>
                </div>
                <div className="flex flex-col gap-[32px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Refund Policy
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[996px] not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    But why fast loading is important? According to Neil Patel,
                    47% of people on the internet expect a web page to load in
                    less than 2 seconds.
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[996px] not-italic text-gray_600 text-left"
                    variant="body3"
                  >
                    Static websites are way faster than dynamic ones. As they
                    don’t have a back-end system, there is no time loss due to
                    database connection. Instead, the lightweight, pre-rendered
                    HTML files load incredibly fast.
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_600 text-left w-[auto]"
                    variant="body3"
                  >
                    You may not disclose any information about your order
                    including, but not limited to, Order ID, download
                    connection, etc.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-white_A700 flex items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] py-[80px] w-[100%]">
          <div className="flex flex-1 flex-col gap-[120px] md:gap-[40px] sm:gap-[40px] items-start justify-start w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row font-markoone md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
              <div className="flex flex-col gap-[43px] items-start justify-start w-[341px]">
                <div className="flex flex-row gap-[11px] h-[40px] md:h-[auto] sm:h-[auto] items-center justify-start w-[341px]">
                  <Img
                    src="images/img_home.svg"
                    className="h-[40px] w-[40px]"
                    alt="home Two"
                  />
                  <Text
                    className="font-normal not-italic text-left text-orange_A700 w-[auto]"
                    variant="body1"
                  >
                    Relasto
                  </Text>
                </div>
                <div className="flex flex-col font-manrope gap-[28px] h-[190px] md:h-[auto] sm:h-[auto] items-start justify-start w-[100%]">
                  <Text
                    className="font-semibold leading-[160.00%] text-gray_900 text-left"
                    variant="body4"
                  >
                    59 Bervely Hill Ave, Brooklyn Town,
                    <br />
                    New York, NY 5630, CA, US
                  </Text>
                  <Text
                    className="font-semibold leading-[160.00%] text-gray_900 text-left"
                    variant="body4"
                  >
                    +056 686 56 56 98
                    <br />
                    info@staticmania.com
                  </Text>
                  <div className="flex flex-row gap-[12px] items-start justify-start w-[100%]">
                    <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                      <Img
                        src="images/img_plus_orange_a700.svg"
                        className="h-[30px] w-[30px]"
                        alt="plus"
                      />
                    </div>
                    <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                      <Img
                        src="images/img_twitter_orange_a700.svg"
                        className="h-[30px] w-[30px]"
                        alt="twitter"
                      />
                    </div>
                    <Img
                      src="images/img_instagram_orange_a700.svg"
                      className="h-[30px] w-[30px]"
                      alt="instagram"
                    />
                    <Img
                      src="images/img_linkedin.svg"
                      className="h-[30px] w-[30px]"
                      alt="linkedin"
                    />
                    <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                      <Img
                        src="images/img_clock_orange_a700.svg"
                        className="h-[30px] w-[30px]"
                        alt="clock"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col sm:flex-col flex-row font-manrope md:gap-[40px] sm:gap-[40px] gap-[77px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                <div className="flex flex-1 flex-col gap-[20px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body3"
                  >
                    Features
                  </Text>
                  <ul className="flex flex-col gap-[14px] items-start justify-start w-[100%] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-semibold text-gray_900 text-left"
                        variant="body4"
                      >
                        Home v1
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        Home v2
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        About
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        Search
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-1 flex-col gap-[20px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body3"
                  >
                    Information
                  </Text>
                  <ul className="flex flex-col gap-[14px] items-start justify-start w-[100%] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-semibold text-gray_900 text-left"
                        variant="body4"
                      >
                        Listing v1
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        Listing v2
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        Property Details
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        Agent List
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        Agent Profile
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-1 flex-col gap-[20px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body3"
                  >
                    Documentation{" "}
                  </Text>
                  <ul className="flex flex-col gap-[14px] items-start justify-start w-[100%] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-semibold text-gray_900 text-left"
                        variant="body4"
                      >
                        Blog
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        FAQ
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        License
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-1 flex-col gap-[20px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    variant="body3"
                  >
                    Others
                  </Text>
                  <ul className="flex flex-col gap-[14px] items-start justify-start w-[100%] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-semibold text-gray_900 text-left"
                        variant="body4"
                      >
                        Log in
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        Enter OTP
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        New Password
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        Reset Password
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-semibold text-[16px] text-gray_900 text-left"
                        href="#"
                      >
                        Create Account
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Text
              className="font-manrope font-semibold text-gray_900 text-left w-[auto]"
              variant="body4"
            >
              © Static Mania 2022. All rights reserved. / Template Documentation
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LicensePage;
