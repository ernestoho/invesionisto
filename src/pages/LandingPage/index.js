import React from "react";

import { Img, Text, Button, Input, List, CheckBox, Slider } from "components";
import { useNavigate } from "react-router-dom";

const LandingPagePage = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-markoone gap-[100px] md:gap-[40px] sm:gap-[40px] items-center justify-start mx-[auto] md:w-[100%] sm:w-[100%] w-[auto]">
        <div className="flex flex-col items-start justify-start w-[100%]">
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
              <ul className="flex sm:flex-1 flex-row font-manrope sm:hidden items-center justify-between sm:w-[100%] w-[492px] common-row-list common-row-list common-row-list">
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
          <div className="bg-yellow_50 flex flex-col font-manrope items-start justify-start pl-[120px] sm:pl-[20px] md:pl-[40px] py-[50px] w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row gap-[100px] md:gap-[40px] sm:gap-[40px] items-center justify-start ml-[auto] w-[100%]">
              <div className="flex flex-1 flex-col gap-[40px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="leading-[140.00%] text-gray_900 text-left tracking-ls092 md:tracking-ls1 sm:tracking-ls1"
                    as="h2"
                    variant="h2"
                  >
                    Find a perfect property
                    <br />
                    Where you&#39;ll love to live
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[610px] not-italic text-gray_700 text-left"
                    variant="body1"
                  >
                    We helps businesses customize, automate and scale up their
                    ad production and delivery.
                  </Text>
                </div>
                <div className="bg-white_A700 flex flex-col items-start justify-start p-[24px] sm:px-[20px] rounded-radius16 w-[100%]">
                  <div className="flex flex-col gap-[38px] items-center justify-start w-[100%]">
                    <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-center w-[100%]">
                      <Button
                        className="cursor-pointer flex-1 font-bold text-[18px] text-center text-white_A700 w-[100%]"
                        shape="RoundedBorder10"
                        size="3xl"
                        variant="FillGray900"
                      >
                        Buy
                      </Button>
                      <Button
                        className="cursor-pointer flex-1 font-bold text-[18px] text-center text-gray_900 w-[100%]"
                        shape="RoundedBorder10"
                        size="3xl"
                        variant="FillGray300"
                      >
                        Sell
                      </Button>
                      <Button
                        className="cursor-pointer flex-1 font-bold text-[18px] text-center text-gray_900 w-[100%]"
                        shape="RoundedBorder10"
                        size="3xl"
                        variant="FillGray300"
                      >
                        Rent
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                        <Input
                          className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                          wrapClassName="flex w-[100%]"
                          name="TextFieldLarge"
                          placeholder="City/Street"
                          suffix={
                            <Img
                              src="images/img_location.svg"
                              className="ml-[35px] my-[auto]"
                              alt="location"
                            />
                          }
                          shape="RoundedBorder10"
                          size="2xl"
                          variant="OutlineBluegray100"
                        ></Input>
                        <Input
                          className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                          wrapClassName="flex w-[100%]"
                          name="TextFieldLarge One"
                          placeholder="Property Type"
                          suffix={
                            <Img
                              src="images/img_sort.svg"
                              className="ml-[35px] my-[auto]"
                              alt="sort"
                            />
                          }
                          shape="RoundedBorder10"
                          size="2xl"
                          variant="OutlineBluegray100"
                        ></Input>
                        <Input
                          className="font-semibold p-[0] text-[18px] placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                          wrapClassName="flex w-[100%]"
                          name="TextFieldLarge Two"
                          placeholder="Price Range"
                          suffix={
                            <Img
                              src="images/img_sort.svg"
                              className="ml-[35px] my-[auto]"
                              alt="sort"
                            />
                          }
                          shape="RoundedBorder10"
                          size="2xl"
                          variant="OutlineBluegray100"
                        ></Input>
                      </div>
                      <Button
                        className="cursor-pointer font-bold text-[18px] text-center text-white_A700 w-[100%]"
                        shape="RoundedBorder10"
                        size="5xl"
                        variant="FillGray900"
                      >
                        Search
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:self-stretch sm:self-stretch md:w-[100%] sm:w-[100%] w-[47%]">
                <Img
                  src="images/img_image_503x610.png"
                  className="h-[503px] md:h-[auto] sm:h-[auto] object-cover w-[100%]"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-manrope items-start justify-start px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex md:flex-col sm:flex-col flex-row gap-[24px] items-center justify-center max-w-[1200px] mx-[auto] w-[100%]">
            <div className="bg-red_100 flex flex-1 flex-col h-[424px] md:h-[auto] sm:h-[auto] items-start justify-center sm:px-[20px] md:px-[40px] px-[50px] py-[46px] rounded-radius20 md:self-stretch sm:self-stretch w-[100%]">
              <div className="flex flex-col gap-[50px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="leading-[140.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[488px] text-gray_900 text-left tracking-ls072 md:tracking-ls1 sm:tracking-ls1"
                    as="h3"
                    variant="h3"
                  >
                    Simple & easy way to find your dream Appointment
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[488px] not-italic text-gray_900 text-left"
                    variant="body3"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold min-w-[138px] text-[16px] text-center text-white_A700 sm:w-[100%] w-[auto]"
                  shape="RoundedBorder10"
                  size="3xl"
                  variant="FillGray900"
                >
                  Get Started
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
              <div className="sm:gap-[20px] gap-[24px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                <div className="bg-deep_orange_50 flex flex-1 flex-col h-[200px] md:h-[auto] sm:h-[auto] items-start justify-center sm:px-[20px] px-[30px] py-[24px] rounded-radius20 md:self-stretch sm:self-stretch w-[100%]">
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_refresh.svg"
                      className="h-[30px] w-[30px]"
                      alt="refresh"
                    />
                    <Text
                      className="leading-[135.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[222px] text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1"
                      as="h4"
                      variant="h4"
                    >
                      Search  your location
                    </Text>
                  </div>
                </div>
                <div className="bg-deep_orange_50 flex flex-1 flex-col h-[200px] md:h-[auto] sm:h-[auto] items-start justify-center sm:px-[20px] px-[30px] py-[24px] rounded-radius20 md:self-stretch sm:self-stretch w-[100%]">
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_instagram.svg"
                      className="h-[30px] w-[30px]"
                      alt="instagram"
                    />
                    <Text
                      className="leading-[135.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[222px] text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1"
                      as="h4"
                      variant="h4"
                    >
                      Visit  Appointment
                    </Text>
                  </div>
                </div>
                <div className="bg-deep_orange_50 flex flex-1 flex-col h-[200px] md:h-[auto] sm:h-[auto] items-start justify-center sm:px-[20px] px-[30px] py-[24px] rounded-radius20 md:self-stretch sm:self-stretch w-[100%]">
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_camera_orange_a700.svg"
                      className="h-[30px] w-[30px]"
                      alt="camera"
                    />
                    <Text
                      className="leading-[135.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[222px] text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1"
                      as="h4"
                      variant="h4"
                    >
                      Get your  dream house
                    </Text>
                  </div>
                </div>
                <div className="bg-deep_orange_50 flex flex-1 flex-col h-[200px] md:h-[auto] sm:h-[auto] items-start justify-center sm:px-[20px] px-[30px] py-[24px] rounded-radius20 md:self-stretch sm:self-stretch w-[100%]">
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_instagram_30X30.svg"
                      className="h-[30px] w-[30px]"
                      alt="instagram One"
                    />
                    <Text
                      className="leading-[135.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[222px] text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1"
                      as="h4"
                      variant="h4"
                    >
                      Enjoy your  Appointment
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray_50 flex flex-col font-manrope items-start justify-start px-[120px] sm:px-[20px] md:px-[40px] py-[50px] w-[100%]">
          <div className="flex md:flex-col sm:flex-col flex-row gap-[100px] md:gap-[40px] sm:gap-[40px] items-start justify-start max-w-[1200px] mx-[auto] w-[100%]">
            <List
              className="md:flex-1 sm:flex-1 sm:flex-col flex-row gap-[100px] md:gap-[40px] sm:gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:w-[100%] sm:w-[100%] w-[73%]"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[18px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
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
              <div className="flex flex-col gap-[18px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
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
              <div className="flex flex-col gap-[18px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
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
            <div className="flex flex-1 flex-col gap-[18px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
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
        <div className="flex flex-col font-manrope items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[60px] md:h-[auto] sm:h-[auto] items-start justify-start max-w-[1200px] mx-[auto] md:self-stretch sm:self-stretch w-[100%]">
            <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
              <div className="flex sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
                <Text
                  className="text-gray_900 text-left tracking-ls072 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Featured Properties
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
              <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start w-[100%]">
                <Button className="bg-transparent cursor-pointer font-bold min-w-[159px] text-[18px] text-center text-gray_900 w-[auto]">
                  Resident Property
                </Button>
                <Button className="bg-transparent cursor-pointer font-bold min-w-[186px] text-[18px] text-center text-gray_400 w-[auto]">
                  Commercial Property
                </Button>
                <Button className="bg-transparent cursor-pointer font-bold min-w-[164px] text-[18px] text-center text-gray_400 w-[auto]">
                  Industrial Property
                </Button>
                <Button className="bg-transparent cursor-pointer font-bold min-w-[180px] text-[18px] text-center text-gray_400 w-[auto]">
                  Agriculture Property
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[100%]">
              <div className="md:gap-[20px] sm:gap-[20px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                <div className="flex flex-1 flex-col h-[100%] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_image_260x384.png"
                    className="h-[260px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="image One"
                  />
                  <div className="bg-gray_51 border border-red_101 border-solid flex flex-col items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                        <Img
                          src="images/img_eye.svg"
                          className="h-[24px] w-[24px]"
                          alt="eye"
                        />
                        <Text
                          className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          2861 62nd Ave, Oakland, CA 94605
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_bookmark.svg"
                              className="h-[20px] w-[20px]"
                              alt="bookmark"
                            />
                            <Text
                              className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              3 Bed Room
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_ticket_20X20.svg"
                              className="h-[20px] w-[20px]"
                              alt="ticket"
                            />
                            <Text
                              className="font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              1 Bath
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_icon_20X20.svg"
                              className="h-[20px] w-[20px]"
                              alt="icon"
                            />
                            <Text
                              className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              1,032 sqft
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_settings.svg"
                              className="h-[20px] w-[20px]"
                              alt="settings"
                            />
                            <Text
                              className="font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              Family
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[31px] items-center justify-start w-[100%]">
                        <Button
                          className="common-pointer cursor-pointer flex-1 font-semibold text-[16px] text-center text-white_A700 w-[100%]"
                          onClick={() => navigate("/propertydetails")}
                          shape="RoundedBorder10"
                          size="3xl"
                          variant="FillGray900"
                        >
                          View Details
                        </Button>
                        <Text
                          className="flex-1 font-bold text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          $649,900
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[100%] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_image_16.png"
                    className="h-[260px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="image Two"
                  />
                  <div className="bg-gray_51 border border-red_101 border-solid flex flex-col items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                        <Img
                          src="images/img_eye.svg"
                          className="h-[24px] w-[24px]"
                          alt="eye One"
                        />
                        <Text
                          className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          2861 62nd Ave, Oakland, CA 94605
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_bookmark.svg"
                              className="h-[20px] w-[20px]"
                              alt="bookmark One"
                            />
                            <Text
                              className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              3 Bed Room
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_ticket_20X20.svg"
                              className="h-[20px] w-[20px]"
                              alt="ticket One"
                            />
                            <Text
                              className="font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              1 Bath
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_icon_20X20.svg"
                              className="h-[20px] w-[20px]"
                              alt="icon One"
                            />
                            <Text
                              className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              1,032 sqft
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_settings_20x20.svg"
                              className="h-[20px] w-[20px]"
                              alt="settings One"
                            />
                            <Text
                              className="font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              Family
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[31px] items-center justify-start w-[100%]">
                        <Button
                          className="common-pointer cursor-pointer flex-1 font-semibold text-[16px] text-center text-white_A700 w-[100%]"
                          onClick={() => navigate("/propertydetails")}
                          shape="RoundedBorder10"
                          size="3xl"
                          variant="FillGray900"
                        >
                          View Details
                        </Button>
                        <Text
                          className="flex-1 font-bold text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          $649,900
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[100%] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_image_17.png"
                    className="h-[260px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="image Three"
                  />
                  <div className="bg-gray_51 border border-red_101 border-solid flex flex-col items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                        <Img
                          src="images/img_eye.svg"
                          className="h-[24px] w-[24px]"
                          alt="eye Two"
                        />
                        <Text
                          className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          2861 62nd Ave, Oakland, CA 94605
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_bookmark.svg"
                              className="h-[20px] w-[20px]"
                              alt="bookmark Two"
                            />
                            <Text
                              className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              3 Bed Room
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_ticket_20X20.svg"
                              className="h-[20px] w-[20px]"
                              alt="ticket Two"
                            />
                            <Text
                              className="font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              1 Bath
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_icon_20X20.svg"
                              className="h-[20px] w-[20px]"
                              alt="icon Two"
                            />
                            <Text
                              className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              1,032 sqft
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_settings_1.svg"
                              className="h-[20px] w-[20px]"
                              alt="settings Two"
                            />
                            <Text
                              className="font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              Family
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[31px] items-center justify-start w-[100%]">
                        <Button
                          className="common-pointer cursor-pointer flex-1 font-semibold text-[16px] text-center text-white_A700 w-[100%]"
                          onClick={() => navigate("/propertydetails")}
                          shape="RoundedBorder10"
                          size="3xl"
                          variant="FillGray900"
                        >
                          View Details
                        </Button>
                        <Text
                          className="flex-1 font-bold text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          $649,900
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[100%] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_image_18.png"
                    className="h-[260px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="image Four"
                  />
                  <div className="bg-gray_51 border border-red_101 border-solid flex flex-col items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                        <Img
                          src="images/img_eye.svg"
                          className="h-[24px] w-[24px]"
                          alt="eye Three"
                        />
                        <Text
                          className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          2861 62nd Ave, Oakland, CA 94605
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_bookmark.svg"
                              className="h-[20px] w-[20px]"
                              alt="bookmark Three"
                            />
                            <Text
                              className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              3 Bed Room
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_ticket_20X20.svg"
                              className="h-[20px] w-[20px]"
                              alt="ticket Three"
                            />
                            <Text
                              className="font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              1 Bath
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_icon_20X20.svg"
                              className="h-[20px] w-[20px]"
                              alt="icon Three"
                            />
                            <Text
                              className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              1,032 sqft
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_settings_2.svg"
                              className="h-[20px] w-[20px]"
                              alt="settings Three"
                            />
                            <Text
                              className="font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              Family
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[31px] items-center justify-start w-[100%]">
                        <Button
                          className="common-pointer cursor-pointer flex-1 font-semibold text-[16px] text-center text-white_A700 w-[100%]"
                          onClick={() => navigate("/propertydetails")}
                          shape="RoundedBorder10"
                          size="3xl"
                          variant="FillGray900"
                        >
                          View Details
                        </Button>
                        <Text
                          className="flex-1 font-bold text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          $649,900
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[100%] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_image_19.png"
                    className="h-[260px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="image Five"
                  />
                  <div className="bg-gray_51 border border-red_101 border-solid flex flex-col items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                        <Img
                          src="images/img_eye.svg"
                          className="h-[24px] w-[24px]"
                          alt="eye Four"
                        />
                        <Text
                          className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          2861 62nd Ave, Oakland, CA 94605
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_bookmark.svg"
                              className="h-[20px] w-[20px]"
                              alt="bookmark Four"
                            />
                            <Text
                              className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              3 Bed Room
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_ticket_20X20.svg"
                              className="h-[20px] w-[20px]"
                              alt="ticket Four"
                            />
                            <Text
                              className="font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              1 Bath
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_icon_20X20.svg"
                              className="h-[20px] w-[20px]"
                              alt="icon Four"
                            />
                            <Text
                              className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              1,032 sqft
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_settings_3.svg"
                              className="h-[20px] w-[20px]"
                              alt="settings Four"
                            />
                            <Text
                              className="font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              Family
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[31px] items-center justify-start w-[100%]">
                        <Button
                          className="common-pointer cursor-pointer flex-1 font-semibold text-[16px] text-center text-white_A700 w-[100%]"
                          onClick={() => navigate("/propertydetails")}
                          shape="RoundedBorder10"
                          size="3xl"
                          variant="FillGray900"
                        >
                          View Details
                        </Button>
                        <Text
                          className="flex-1 font-bold text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          $649,900
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[100%] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_image_20.png"
                    className="h-[260px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="image Six"
                  />
                  <div className="bg-gray_51 border border-red_101 border-solid flex flex-col items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                        <Img
                          src="images/img_eye.svg"
                          className="h-[24px] w-[24px]"
                          alt="eye Five"
                        />
                        <Text
                          className="flex-1 font-semibold text-gray_900 text-left w-[auto]"
                          variant="body4"
                        >
                          2861 62nd Ave, Oakland, CA 94605
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_bookmark.svg"
                              className="h-[20px] w-[20px]"
                              alt="bookmark Five"
                            />
                            <Text
                              className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              3 Bed Room
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_ticket_20X20.svg"
                              className="h-[20px] w-[20px]"
                              alt="ticket Five"
                            />
                            <Text
                              className="font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              1 Bath
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_icon_20X20.svg"
                              className="h-[20px] w-[20px]"
                              alt="icon Five"
                            />
                            <Text
                              className="flex-1 font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              1,032 sqft
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_settings_4.svg"
                              className="h-[20px] w-[20px]"
                              alt="settings Five"
                            />
                            <Text
                              className="font-semibold text-gray_700 text-left w-[auto]"
                              variant="body4"
                            >
                              Family
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[31px] items-center justify-start w-[100%]">
                        <Button
                          className="common-pointer cursor-pointer flex-1 font-semibold text-[16px] text-center text-white_A700 w-[100%]"
                          onClick={() => navigate("/propertydetails")}
                          shape="RoundedBorder10"
                          size="3xl"
                          variant="FillGray900"
                        >
                          View Details
                        </Button>
                        <Text
                          className="flex-1 font-bold text-gray_900 text-left tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          $649,900
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray_51 flex flex-col font-manrope items-center justify-center p-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col gap-[150px] md:gap-[40px] sm:gap-[40px] items-center justify-center max-w-[1200px] mx-[auto] md:self-stretch sm:self-stretch w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[85px] items-center justify-start w-[100%]">
              <div className="flex flex-1 flex-col md:gap-[40px] sm:gap-[40px] gap-[60px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                  <Text
                    className="leading-[140.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[557px] text-gray_900 text-left tracking-ls072 md:tracking-ls1 sm:tracking-ls1"
                    as="h3"
                    variant="h3"
                  >
                    Simple & easy way to find your dream Appointment
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[557px] not-italic text-gray_700 text-left"
                    variant="body3"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. In a free hour, when our power of
                    choice is untrammelled and when nothing prevents our being
                    able to do what we like best, every pleasure is to be
                    welcomed.
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold min-w-[138px] text-[16px] text-center text-white_A700 sm:w-[100%] w-[auto]"
                  shape="RoundedBorder10"
                  size="3xl"
                  variant="FillGray900"
                >
                  Get Started
                </Button>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-[20px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Img
                    src="images/img_rectangle18_327x268.png"
                    className="h-[327px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="RectangleEighteen"
                  />
                  <Img
                    src="images/img_rectangle21_218x268.png"
                    className="h-[218px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="RectangleTwentyOne"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Img
                    src="images/img_rectangle19_218x268.png"
                    className="h-[218px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="RectangleNineteen"
                  />
                  <Img
                    src="images/img_rectangle20_327x268.png"
                    className="h-[327px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="RectangleTwenty"
                  />
                </div>
              </div>
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row gap-[157px] md:gap-[40px] sm:gap-[40px] items-center justify-start w-[100%]">
              <Img
                src="images/img_rectangle20_589x521.png"
                className="flex-1 md:flex-none h-[589px] sm:h-[auto] max-h-[589px] object-cover rounded-radius10 w-[auto] md:w-[auto] sm:w-[auto]"
                alt="RectangleTwenty One"
              />
              <div className="flex flex-1 flex-col md:gap-[40px] sm:gap-[40px] gap-[60px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <Text
                      className="leading-[140.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[521px] text-gray_900 text-left tracking-ls072 md:tracking-ls1 sm:tracking-ls1"
                      as="h3"
                      variant="h3"
                    >
                      Best rated host on popular rental sites
                    </Text>
                    <Text
                      className="font-normal leading-[180.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[521px] not-italic text-gray_700 text-left"
                      variant="body3"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, when our power of
                      choice is untrammelled.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                    <CheckBox
                      className="font-semibold text-[18px] text-gray_900 text-left sm:w-[100%]"
                      inputClassName="mr-[5px] sm:w-[100%] w-[undefinedpx]"
                      label="Find excellent deals"
                      name="Findexcellentdeals"
                      size="sm"
                    ></CheckBox>
                    <CheckBox
                      className="font-semibold text-[18px] text-gray_900 text-left sm:w-[100%]"
                      inputClassName="mr-[5px] sm:w-[100%] w-[undefinedpx]"
                      label="Friendly host & Fast support"
                      name="Friendlyhost"
                      size="md"
                    ></CheckBox>
                    <CheckBox
                      className="font-semibold text-[18px] text-gray_900 text-left sm:w-[100%]"
                      inputClassName="mr-[5px] sm:w-[100%] w-[undefinedpx]"
                      label="Secure payment system"
                      name="Securepaymentsystem"
                      size="md"
                    ></CheckBox>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-semibold min-w-[134px] text-[16px] text-center text-white_A700 w-[auto]"
                  shape="RoundedBorder10"
                  size="3xl"
                  variant="FillGray900"
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-manrope gap-[24px] items-start justify-start w-[100%]">
          <div className="flex flex-col items-center justify-center sm:px-[20px] px-[215px] md:px-[40px] w-[100%]">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 1 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="max-w-[1010px] mx-[auto] w-[100%]"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex md:flex-col sm:flex-col flex-row gap-[100px] md:gap-[40px] sm:gap-[40px] items-start justify-start mx-[10px] md:self-stretch sm:self-stretch">
                    <Img
                      src="images/img_rectangle5591_344x455.png"
                      className="flex-1 md:flex-none h-[344px] sm:h-[auto] object-cover rounded-radius8 w-[100%]"
                      alt="Rectangle5591"
                    />
                    <div className="flex flex-1 flex-col items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                      <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
                        <div className="flex flex-row sm:flex-row sm:gap-[40px] gap-[73px] items-center justify-start w-[100%]">
                          <div className="flex flex-1 flex-col gap-[4px] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                            <Text
                              className="text-gray_900 text-left tracking-ls056 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Taylor Wilson
                            </Text>
                            <Text
                              className="font-semibold text-gray_900 text-left w-[auto]"
                              variant="body3"
                            >
                              Product Manager - Static Mania
                            </Text>
                          </div>
                          <Img
                            src="images/img_shape_deep_orange_300.svg"
                            className="h-[51px] max-h-[51px] w-[auto]"
                            alt="shape"
                          />
                        </div>
                        <Text
                          className="font-semibold leading-[165.00%] md:max-w-[100%] sm:max-w-[100%] max-w-[455px] text-gray_700 text-left"
                          as="h5"
                          variant="h5"
                        >
                          Eget eu massa et consectetur. Mauris donec. Leo a, id
                          sed duis proin sodales. Turpis viverra diam porttitor
                          mattis morbi ac amet. Euismod commodo. We get you
                          customer relationships that last.{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
              Indicator={({ isActive }) => {
                if (isActive) {
                  return <div className="" />;
                }
                return <div className="" role="button" tabIndex={0} />;
              }}
            />
          </div>
          <div className="flex flex-row gap-[30px] items-start justify-between pl-[770px] pr-[215px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="sm:flex sm:flex-row gap-[8px] w-[auto]">
              <Img
                src="images/img_arrowleft.svg"
                className="h-[24px] w-[24px]"
                alt="arrowleft"
              />
              <Text
                className="font-bold text-gray_604 text-left w-[auto]"
                variant="body3"
              >
                Previews
              </Text>
            </div>
            <div className="sm:flex gap-[8px] w-[auto]">
              <Text
                className="font-bold text-left text-orange_A700 w-[auto]"
                variant="body3"
              >
                Next
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="h-[24px] w-[24px]"
                alt="arrowright"
              />
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
                    alt="image Thirteen"
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
                        alt="arrowright One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[24px] h-[486px] md:h-[auto] sm:h-[auto] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Img
                    src="images/img_image_21.png"
                    className="h-[100%] md:h-[350px] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="image Fourteen"
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
                        alt="arrowright Two"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[24px] h-[486px] md:h-[auto] sm:h-[auto] items-start justify-start md:self-stretch sm:self-stretch w-[100%]">
                  <Img
                    src="images/img_image_22.png"
                    className="h-[100%] md:h-[350px] sm:h-[auto] object-cover rounded-radius10 w-[100%]"
                    alt="image Fifteen"
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
                        alt="arrowright Three"
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
                    className="cursor-pointer sm:flex-1 font-semibold min-w-[126px] text-[16px] text-center text-white_A700 sm:w-[100%] w-[auto]"
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
            <div className="flex md:flex-col sm:flex-col flex-row font-markoone md:gap-[20px] sm:gap-[20px] items-center sm:items-start justify-start w-[100%]">
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
                      alt="instagram Two"
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
                  <ul className="flex flex-col gap-[14px] items-start justify-start w-[100%] common-column-list common-column-list common-column-list">
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
                  <ul className="flex flex-col gap-[14px] items-start justify-start w-[100%] common-column-list common-column-list common-column-list">
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
                  <ul className="flex flex-col gap-[14px] items-start justify-start w-[100%] common-column-list common-column-list common-column-list">
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
                  <ul className="flex flex-col gap-[14px] items-start justify-start w-[100%] common-column-list common-column-list common-column-list">
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

export default LandingPagePage;
