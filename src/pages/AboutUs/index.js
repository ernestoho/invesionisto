import React from "react";

import { Img, Text, Button, List, Input } from "components";
import { useNavigate } from "react-router-dom";

const AboutUsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-markoone gap-[100px] md:gap-[40px] sm:gap-[40px] items-center justify-start mx-[auto] md:w-[100%] sm:w-[100%] w-[auto]">
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
        <div className="flex flex-col font-manrope items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col gap-[40px] items-center justify-start max-w-[1200px] mx-[auto] w-[100%]">
            <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
              <Text
                className="leading-[140.00%] text-center text-gray_900 md:tracking-ls1 sm:tracking-ls1 tracking-ls108"
                as="h1"
                variant="h1"
              >
                Reimagining real estate to <br />
                make it easier to unlock.
              </Text>
              <Text
                className="font-normal leading-[180.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[1200px] not-italic text-center text-gray_700"
                variant="body3"
              >
                On the other hand, we denounce with righteous indignation and
                dislike men who  are so beguiled and demoralized by the charms
                of pleasure of the moment,  so blinded by desire, that they
                cannot foresee the pain and trouble.
              </Text>
            </div>
            <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
              <div className="flex md:flex-col sm:flex-col flex-row gap-[24px] items-start justify-start w-[100%]">
                <Img
                  src="images/img_rectangle5592_400x792.png"
                  className="flex-1 md:flex-none h-[400px] sm:h-[auto] max-h-[400px] object-cover rounded-radius10 w-[auto] md:w-[auto] sm:w-[auto]"
                  alt="Rectangle5592"
                />
                <Img
                  src="images/img_rectangle5593_400x384.png"
                  className="h-[100%] md:h-[400px] sm:h-[auto] max-h-[400px] object-cover rounded-radius10 w-[auto] md:w-[auto] sm:w-[auto]"
                  alt="Rectangle5593"
                />
              </div>
              <div className="flex md:flex-col sm:flex-col flex-row gap-[24px] items-start justify-start w-[100%]">
                <Img
                  src="images/img_rectangle5595_400x384.png"
                  className="h-[100%] md:h-[400px] sm:h-[auto] max-h-[400px] object-cover rounded-radius10 w-[auto] md:w-[auto] sm:w-[auto]"
                  alt="Rectangle5595"
                />
                <Img
                  src="images/img_rectangle5594_400x792.png"
                  className="flex-1 md:flex-none h-[400px] sm:h-[auto] max-h-[400px] object-cover rounded-radius10 w-[auto] md:w-[auto] sm:w-[auto]"
                  alt="Rectangle5594"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray_50 flex flex-col font-manrope items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] py-[50px] w-[100%]">
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between max-w-[1200px] mx-[auto] w-[100%]">
            <List
              className="sm:flex-col flex-row gap-[100px] md:gap-[40px] sm:gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[auto]"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[18px] items-start justify-start w-[225px]">
                <Button
                  className="flex h-[60px] items-center justify-center rounded-radius50 w-[60px]"
                  size="smIcn"
                  variant="icbOutlineBluegray30033"
                >
                  <Img
                    src="images/img_clock.svg"
                    className="h-[32px]"
                    alt="clock"
                  />
                </Button>
                <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
                  <Text
                    className="text-gray_900 text-left tracking-ls092 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    $15.4M
                  </Text>
                  <Text
                    className="font-semibold leading-[140.00%] text-bluegray_600 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1"
                    variant="body1"
                  >
                    Owned from
                    <br />
                    Properties transactions
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-[225px]">
                <Button
                  className="flex h-[60px] items-center justify-center rounded-radius50 w-[60px]"
                  size="smIcn"
                  variant="icbOutlineBluegray30033"
                >
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-[32px]"
                    alt="arrowdown Three"
                  />
                </Button>
                <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
                  <Text
                    className="text-gray_900 text-left tracking-ls092 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    25K+
                  </Text>
                  <Text
                    className="font-semibold leading-[140.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[225px] text-bluegray_600 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1"
                    variant="body1"
                  >
                    Properties for Buy & sell Successfully
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-[225px]">
                <Button
                  className="flex h-[60px] items-center justify-center rounded-radius50 w-[60px]"
                  size="smIcn"
                  variant="icbOutlineBluegray30033"
                >
                  <Img
                    src="images/img_reply.svg"
                    className="h-[32px]"
                    alt="reply"
                  />
                </Button>
                <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
                  <Text
                    className="text-gray_900 text-left tracking-ls092 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    500
                  </Text>
                  <Text
                    className="font-semibold leading-[140.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[225px] text-bluegray_600 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1"
                    variant="body1"
                  >
                    Daily completed  transactions
                  </Text>
                </div>
              </div>
            </List>
            <div className="flex flex-col gap-[18px] items-start justify-start w-[225px]">
              <Button
                className="flex h-[60px] items-center justify-center rounded-radius50 w-[60px]"
                size="smIcn"
                variant="icbOutlineBluegray30033"
              >
                <Img
                  src="images/img_search_orange_A700.svg"
                  className="h-[32px]"
                  alt="checkmark"
                />
              </Button>
              <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
                <Text
                  className="text-gray_900 text-left tracking-ls092 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  600+
                </Text>
                <Text
                  className="font-semibold text-bluegray_600 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  Reagular Clients
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-manrope items-center justify-center max-w-[1440px] pl-[120px] pr-[173px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[84px] items-center justify-start max-w-[1147px] mx-[auto] w-[100%]">
            <div className="flex flex-1 flex-col gap-[56px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <Text
                  className="text-gray_900 text-left tracking-ls072 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  A note from our founders.
                </Text>
                <Text
                  className="font-normal leading-[180.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[531px] not-italic text-gray_700 text-left"
                  variant="body3"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. In a free hour,
                </Text>
              </div>
              <List
                className="flex-col gap-[32px] grid items-start w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-[0] w-[100%]">
                  <Text
                    className="border-2 border-gray_900 border-solid flex font-extrabold h-[35px] items-center justify-center rounded-radius17 text-center text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[35px]"
                    variant="body1"
                  >
                    1
                  </Text>
                  <div className="flex flex-1 flex-col gap-[17px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                    <Text
                      className="text-gray_900 text-left tracking-ls044 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      It all started in 1995
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[470px] not-italic text-gray_700 text-left"
                      variant="body3"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, On the other hand,
                      we denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-[0] w-[100%]">
                  <Text
                    className="border-2 border-gray_900 border-solid flex font-extrabold h-[35px] items-center justify-center rounded-radius17 text-center text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[35px]"
                    variant="body1"
                  >
                    2
                  </Text>
                  <div className="flex flex-1 flex-col gap-[17px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                    <Text
                      className="text-gray_900 text-left tracking-ls044 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Donate launches in 2007
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[470px] not-italic text-gray_700 text-left"
                      variant="body3"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, On the other hand,
                      we denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-[26px] items-start justify-start my-[0] w-[100%]">
                  <Text
                    className="border-2 border-gray_900 border-solid flex font-extrabold h-[35px] items-center justify-center rounded-radius17 text-center text-gray_900 tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[35px]"
                    variant="body1"
                  >
                    3
                  </Text>
                  <div className="flex flex-1 flex-col gap-[17px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                    <Text
                      className="text-gray_900 text-left tracking-ls044 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Relasto holds its initial public offering in 2008
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[470px] not-italic text-gray_700 text-left"
                      variant="body3"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, On the other hand,
                      we denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment.
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <Img
              src="images/img_rectangle20_589x531.png"
              className="flex-1 md:flex-none h-[589px] sm:h-[auto] max-h-[589px] object-cover rounded-radius10 w-[auto] md:w-[auto] sm:w-[auto]"
              alt="RectangleTwenty"
            />
          </div>
        </div>
        <div className="flex flex-col font-manrope items-center justify-center max-w-[1440px] pl-[170px] pr-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex md:flex-col sm:flex-col flex-row gap-[158px] md:gap-[40px] sm:gap-[40px] items-center justify-between max-w-[1150px] mx-[auto] w-[100%]">
            <Img
              src="images/img_rectangle20_589x496.png"
              className="flex-1 md:flex-none h-[589px] sm:h-[auto] max-h-[589px] object-cover rounded-radius10 w-[auto] md:w-[auto] sm:w-[auto]"
              alt="RectangleTwenty One"
            />
            <div className="flex flex-1 flex-col gap-[56px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <Text
                  className="text-gray_900 text-left tracking-ls072 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Our vision is simple.
                </Text>
                <Text
                  className="font-normal leading-[180.00%] not-italic text-gray_700 text-left"
                  variant="body3"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. In a free hour, On the other hand, we
                  denounce with righteous indignation and dislike men who are so
                  beguiled and demoralized by the charms of pleasure of the
                  moment.
                  <br />
                  In a free hour, On the other hand, we denounce with righteous
                  indignation and dislike men .
                </Text>
              </div>
              <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                <Text
                  className="font-semibold text-gray_900 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  Kausar Pial
                </Text>
                <Text
                  className="font-semibold text-gray_700 text-left w-[auto]"
                  variant="body3"
                >
                  CEO at Static Mania
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-manrope items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[60px] items-center justify-start max-w-[1200px] mx-[auto] md:self-stretch sm:self-stretch w-[100%]">
            <Text
              className="text-gray_900 text-left tracking-ls072 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h3"
              variant="h3"
            >
              Relasto Team members
            </Text>
            <div className="flex flex-col items-start justify-start w-[100%]">
              <div className="md:gap-[20px] sm:gap-[20px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Img
                    src="images/img_rectangle5596_282x282.png"
                    className="h-[282px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="Rectangle5596"
                  />
                  <div className="flex flex-col gap-[7px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Kausar Pial
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-[auto]"
                      variant="body3"
                    >
                      CEO
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Img
                    src="images/img_rectangle5597_282x282.png"
                    className="h-[282px] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="Rectangle5597"
                  />
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Floyd Miles
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-[auto]"
                      variant="body3"
                    >
                      President of Sales
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Img
                    src="images/img_rectangle5598_282x282.png"
                    className="h-[282px] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="Rectangle5598"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Darlene Robertson
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-[auto]"
                      variant="body3"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Img
                    src="images/img_rectangle5599_282x282.png"
                    className="h-[282px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="Rectangle5599"
                  />
                  <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Guy Hawkins
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-[auto]"
                      variant="body3"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Img
                    src="images/img_rectangle5600_282x282.png"
                    className="h-[282px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="Rectangle5600"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Jerome Bell
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-[auto]"
                      variant="body3"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Img
                    src="images/img_rectangle5601_282x282.png"
                    className="h-[282px] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="Rectangle5601"
                  />
                  <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Ralph Edwards
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-[auto]"
                      variant="body3"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Img
                    src="images/img_rectangle5602_282x282.png"
                    className="h-[282px] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="Rectangle5602"
                  />
                  <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Arlene McCoy
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-[auto]"
                      variant="body3"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Img
                    src="images/img_rectangle5603_282x282.png"
                    className="h-[282px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="Rectangle5603"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Devon Lane
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-[auto]"
                      variant="body3"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Img
                    src="images/img_rectangle5604_282x282.png"
                    className="h-[282px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="Rectangle5604"
                  />
                  <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Courtney Henry
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-[auto]"
                      variant="body3"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Img
                    src="images/img_rectangle5605_282x282.png"
                    className="h-[282px] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="Rectangle5605"
                  />
                  <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Bessie Cooper
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-[auto]"
                      variant="body3"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Img
                    src="images/img_rectangle5606_282x282.png"
                    className="h-[282px] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="Rectangle5606"
                  />
                  <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Cody Fisher
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-[auto]"
                      variant="body3"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Img
                    src="images/img_rectangle5607_282x282.png"
                    className="h-[282px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="Rectangle5607"
                  />
                  <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_900 text-left tracking-ls04 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Cody Fisher
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_700 text-left w-[auto]"
                      variant="body3"
                    >
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray_900 flex flex-col font-manrope items-center justify-center p-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col gap-[120px] md:gap-[40px] sm:gap-[40px] items-center justify-start max-w-[1200px] mx-[auto] w-[100%]">
            <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[60px] items-start justify-start w-[100%]">
              <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-start w-[100%]">
                <Text
                  className="flex-1 text-left text-white_A700 tracking-ls072 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  News & Consult
                </Text>
                <Button
                  className="flex items-center justify-center text-center"
                  onClick={() => navigate("/listing")}
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      className="ml-[8px] text-center"
                      alt="arrow_right"
                    />
                  }
                  size="sm"
                >
                  <div className="common-pointer bg-transparent cursor-pointer font-bold text-[18px] text-left text-orange_A700">
                    Explore All
                  </div>
                </Button>
              </div>
              <List
                className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-[100%]"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col gap-[24px] h-[486px] md:h-[auto] sm:h-[auto] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Img
                    src="images/img_image_350x384.png"
                    className="h-[100%] md:h-[350px] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="image Eighteen"
                  />
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                    <Text
                      className="font-bold leading-[135.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[384px] text-left text-white_A700 tracking-ls048 md:tracking-ls1 sm:tracking-ls1"
                      as="h5"
                      variant="h5"
                    >
                      9 Easy-to-Ambitious DIY Projects to Improve Your Home
                    </Text>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[100%] sm:w-[100%]">
                      <Text
                        className="font-bold text-deep_orange_400 text-left w-[auto]"
                        variant="body3"
                      >
                        Read the Article
                      </Text>
                      <Img
                        src="images/img_arrowright_24X24.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[24px] h-[486px] md:h-[auto] sm:h-[auto] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Img
                    src="images/img_image_21.png"
                    className="h-[100%] md:h-[350px] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="image Nineteen"
                  />
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                    <Text
                      className="font-bold leading-[135.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[384px] text-left text-white_A700 tracking-ls048 md:tracking-ls1 sm:tracking-ls1"
                      as="h5"
                      variant="h5"
                    >
                      Serie Shophouse Launch In July, Opportunity For Investors
                    </Text>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[100%] sm:w-[100%]">
                      <Text
                        className="font-bold text-deep_orange_400 text-left w-[auto]"
                        variant="body3"
                      >
                        Read the Article
                      </Text>
                      <Img
                        src="images/img_arrowright_24X24.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowright One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[24px] h-[486px] md:h-[auto] sm:h-[auto] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Img
                    src="images/img_image_22.png"
                    className="h-[100%] md:h-[350px] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="image Twenty"
                  />
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                    <Text
                      className="font-bold leading-[135.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[384px] text-left text-white_A700 tracking-ls048 md:tracking-ls1 sm:tracking-ls1"
                      as="h5"
                      variant="h5"
                    >
                      Looking for a New Place? Use This Time to Create Your
                      Wishlist
                    </Text>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[100%] sm:w-[100%]">
                      <Text
                        className="font-bold text-deep_orange_400 text-left w-[auto]"
                        variant="body3"
                      >
                        Read the Article
                      </Text>
                      <Img
                        src="images/img_arrowright_24X24.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowright Two"
                      />
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="bg-gray_401 flex flex-col items-center justify-center px-[100px] sm:px-[20px] md:px-[40px] py-[40px] rounded-radius10 w-[100%]">
              <div className="flex flex-col gap-[30px] items-center justify-start px-[200px] sm:px-[20px] md:px-[40px] w-[100%]">
                <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                  <Text
                    className="text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    For Recent Update, News.
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[600px] not-italic text-center text-gray_900"
                    variant="body3"
                  >
                    We helps businesses customize, automate and scale up their
                    ad production and delivery.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[8px] items-start justify-start w-[100%]">
                  <Input
                    className="flex-1 font-semibold p-[0] text-[14px] placeholder:text-gray_700 text-gray_700 text-left w-[100%]"
                    wrapClassName="flex-1 w-[100%]"
                    type="email"
                    name="input"
                    placeholder="Enter your Email"
                    shape="RoundedBorder10"
                    size="md"
                    variant="FillGray52"
                  ></Input>
                  <Button
                    className="cursor-pointer font-semibold min-w-[126px] text-[16px] text-center text-white_A700 w-[auto]"
                    shape="RoundedBorder10"
                    size="3xl"
                    variant="FillGray900"
                  >
                    Subscribe
                  </Button>
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
                        alt="clock One"
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

export default AboutUsPage;
